/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */




// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const fetch = require('node-fetch');
const cors = require("cors")({ origin: true }); // You can restrict this if needed

const REPAIRSHOPR_API_KEY = 'T9a22a5cccc9fb7c46-87f3d85fff6d95142a0b122010b9028b';
const REPAIRSHOPR_SUBDOMAIN = 'theitstore';

exports.getCustomers = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const response = await fetch(`https://${REPAIRSHOPR_SUBDOMAIN}.repairshopr.com/api/v1/customers`, {
        headers: {
          'Authorization': `Bearer ${REPAIRSHOPR_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`RepairShopr API error: ${response.statusText}`);
      }

      const customers = await response.json();
      res.status(200).json(customers);
    } catch (err) {
      console.error('Error fetching customers:', err);
      res.status(500).json({ error: err.message });
    }
  });
});

exports.getAvailableAppointments = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const date_from = req.query.date_from;
      const date_to = req.query.date_to;

      if (!date_from || !date_to) {
        return res.status(400).json({ error: "Missing required date_from or date_to" });
      }

      const appointments = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const params = new URLSearchParams({
          date_from,
          date_to,
          page: page.toString(),
          mine: "true"
        });

        const url = `https://${REPAIRSHOPR_SUBDOMAIN}.repairshopr.com/api/v1/appointments?${params.toString()}`;

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${REPAIRSHOPR_API_KEY}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`RepairShopr API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        if (Array.isArray(data.appointments)) {
          appointments.push(...data.appointments);
        }

        hasMore = data.appointments?.length === 25; // assuming 25 per page
        page++;
      }

      res.status(200).json({ appointments });
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });
});


exports.createRepairTicket = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed. Use POST." });
      }

      const {
        business_name,
        first_name,
        last_name,
        email,
        phone,
        ticket_issue,
        device_model,
        device_type
      } = req.body;

      if (!email && !phone) {
        return res.status(400).json({ error: "Email or phone is required to identify the customer." });
      }

      const queryParam = encodeURIComponent(email || phone);
      const findCustomerRes = await fetch(
        `https://${REPAIRSHOPR_SUBDOMAIN}.repairshopr.com/api/v1/customers?query=${queryParam}`,
        {
          headers: {
            Authorization: `Bearer ${REPAIRSHOPR_API_KEY}`
          }
        }
      );

      const customers = await findCustomerRes.json();
      let customerId;

      if (Array.isArray(customers) && customers.length > 0) {
        customerId = customers[0].id;
      } else {
        // Create new customer
        const createCustomerRes = await fetch(
          `https://${REPAIRSHOPR_SUBDOMAIN}.repairshopr.com/api/v1/customers`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${REPAIRSHOPR_API_KEY}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              business_name: business_name || null,
              firstname: first_name || null,
              lastname: last_name || null,
              email: email || null,
              phone: phone || null,
              mobile: null,
              address: null,
              address_2: null,
              city: null,
              state: null,
              zip: null,
              notes: null,
              get_sms: false,
              opt_out: false,
              no_email: false,
              get_billing: false,
              get_marketing: false,
              get_reports: false,
              ref_customer_id: null,
              referred_by: null,
              tax_rate_id: null,
              notification_email: null,
              invoice_cc_emails: null,
              invoice_term_id: null,
              properties: {},
              consent: {}
            })
          }
        );

        if (!createCustomerRes.ok) {
          const errorText = await createCustomerRes.text();
          throw new Error(`Customer creation failed: ${errorText}`);
        }

        const newCustomer = await createCustomerRes.json();

        if (!newCustomer.customer || !newCustomer.customer.id) {
          throw new Error("Unexpected response: Customer ID not found.");
        }

        customerId = newCustomer.customer.id;
      }

      // Create ticket
      const createTicketRes = await fetch(
        `https://${REPAIRSHOPR_SUBDOMAIN}.repairshopr.com/api/v1/tickets`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${REPAIRSHOPR_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            customer_id: customerId,
            subject: `Repair request: ${device_type} ${device_model} - ${ticket_issue}`,
            problem: null,
            due_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // optional: 3 days from now
            start_at: new Date().toISOString(),
            end_at: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // optional: 2 hours later
            status: "New",
            priority: "medium",
            tech: null
          })
        }
      );

      if (!createTicketRes.ok) {
        const ticketErrorText = await createTicketRes.text();
        throw new Error(`Ticket creation failed: ${ticketErrorText}`);
      }

      const createdTicket = await createTicketRes.json();

      res.status(201).json({
        message: "Customer and ticket created successfully",
        customer_id: customerId,
        ticket: createdTicket
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : typeof err === "string" ? err : "Unknown error occurred";
      console.error("Error handling request:", err);
      res.status(500).json({ error: message });
    }
  });
});