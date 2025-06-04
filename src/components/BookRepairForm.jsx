// components/CustomerForm.tsx
import { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "@/firebase"; //
import React from 'react';
import { Link } from "react-router-dom";
import TimeslotGrid from "@/components/TimeslotGrid";
import '../index.css';
import dayjs from 'dayjs';


export default function BookRepairForm() {

  {/* State variables appoitnments */ }
  const fetchAppointments = async () => {
    const response = await fetch(
      `https://us-central1-the-it-store.cloudfunctions.net/getAvailableAppointments?date_from=2025-06-01&date_to=2025-06-07`
    );
    const data = await response.json();
    setAppointments(data.appointments);
  };

  

  const HOURS = Array.from({ length: 9 }, (_, i) => 9 + i); // 9 AM to 5 PM
  const DAYS = Array.from({ length: 7 }, (_, i) => dayjs().add(i, 'day')); // Next 7 days

  const AppointmentsGrid = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);}

    const isSlotTaken = (day, hour) => {
      return appointments.some((appt) => {
        const start = dayjs(appt.start_at);
        return start.isSame(day, 'day') && start.hour() === hour;
      });
    };

    {/* State variables for customer information */ }
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [business_name, setBusinessName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    {/* State variables for device and model selection */ }
    const [device, setDevice] = useState("");
    const [model, setModel] = useState("");
    const [variant, setVariant] = useState("");
    const [modelIssue, setmodelIssue] = useState("");

    {/* Sumbit info state */ }
    const [submitInfo, setSubmitInfo] = useState(false);

    const device_type = {
      iPhone: [
        "Select Model",
        "iPhone Xr",
        "iPhone SE",
        "iPhone 11",
        "iPhone 12",
        "iPhone 13",
        "iPhone 14",
        "iPhone 15",
        "iPhone 16"],
      iPad: ["Select Model", "5/6/7/8/9th Gen", "iPad Air", "iPad Pro", "iPad Mini"],
      MacBook: ["Select Model", "MacBook Air", "MacBook Pro", "MacBook"],
      iMac: ["Select Model", "22.5in", "24in M1/M3", "27in"],
      MacPro: ["Up to 2011 Tower", "Darth Vader's Trash Can", "Cheese Grater"],
      MacMini: ["Old white one", "Aluminum with DVD", "Aluminum without DVD", "Space Grey"],
      AppleWatch: ["Select Model", "Apple Watch Series 1/2/3", "Apple Watch Series 4/5/6/7/8", "Apple Watch SE", "Apple Watch Ultra"],
      Other: ["Select Model", "Apple TV", "HomePod", "AirPods", "Accessories"]
    };

    const device_model = {
      "iPhone Xr": ["Select Variant*", "Xr Standard"],
      "iPhone SE": ["Select Variant*", "SE1", "SE2", "SE3"],
      "iPhone 11": ["Select Variant*", "11 Standard", "11 Pro", "11 Pro Max"],
      "iPhone 12": ["Select Variant*", "12 Standard", "12 Pro", "12 Pro Max"],
      "iPhone 13": ["Select Variant*", "13 Standard", "13 Pro", "13 Pro Max"],
      "iPhone 14": ["Select Variant*", "14 Standard", "14 Pro", "14 Pro Max"],
      "iPhone 15": ["Select Variant*", "15 Standard", "15 Pro", "15 Pro Max"],
      "iPhone 16": ["Select Variant*", "16 Standard", "16 Pro", "16 Pro Max"]
    };

    const ticket_issue = {
      "iPhone": ["Battery Replacement", "Screen Repair", "Charging Port Issue", "Camera Issue", "Water Damage", "Wont Turn On", "Audio Issue", "Other"],
      "iPad": ["Battery Replacement", "Screen Repair", "Charging Port Issue", "Camera Issue", "Water Damage", "Wont Turn On", "Audio Issue", "Other"],
      "MacBook": ["Screen Repair", "Hard Drive Issue", "Software Issue", "Keyboard Issue", "Liquid Damage", "Other"],
      "iMac": ["Screen Repair", "Hard Drive Issue", "Software Issue", "Keyboard Issue", "Liquid Damage", "Other"],
      "MacPro": ["Screen Repair", "Hard Drive Issue", "Software Issue", "Keyboard Issue", "Liquid Damage", "Other"],
      "MacMini": ["Screen Repair", "Hard Drive Issue", "Software Issue", "Keyboard Issue", "Liquid Damage", "Other"],
      "AppleWatch": ["Battery Replacement", "Screen Repair", "Charging Issue", "Water Damage", "Other"],
      "Other": ["Battery Replacement", "Screen Repair", "Charging Issue", "Water Damage", "Other"]
    }

    const gatheredInfo = {
      first_name,
      last_name,
      business_name,
      email,
      phone,
      device_type: device,
      device_model: variant,
      ticket_issue: modelIssue,
    };

    const handleInfoSubmit = () => {
      if (!first_name || !last_name || !email || !phone || !device || !model || !variant || !modelIssue) {
        alert("Please fill out all required fields.");
        return;
      }
      // gatheredInfo.first_name = first_name;
      // gatheredInfo.last_name = last_name;
      // gatheredInfo.business_name = business_name;
      // gatheredInfo.email = email;
      // gatheredInfo.phone = phone;
      // gatheredInfo.device_type = device;   // Ensure this is a string
      // gatheredInfo.device_model = variant;
      // gatheredInfo.ticket_issue = modelIssue;
      // console.log("Gathered Info:", gatheredInfo);
      setSubmitInfo(true);
    
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!first_name || !last_name || !email || !phone || !device || !model || !variant || !modelIssue) {
        alert("Please fill out all required fields.");
        return;
      }

      try {
        const res = await fetch("https://createrepairticket-4f6qjip22a-uc.a.run.app", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name,
            last_name,
            business_name,
            email,
            phone,
            device_type: device,   // Ensure this is a string
            device_model: variant,
            ticket_issue: modelIssue,
          }),
        });

        const data = await res.json();
        console.log("Submitted:", data);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Submission error:", error.message);
        } else {
          console.error("Unknown submission error:", error);
        }
      }
    };

    return (
      <div className="flex flex-col items-start justify-start  px-4">
        {!submitInfo ?
          (<>

            <div className="grid grid-cols-3 gap-10">


              {/* Customer Information Form */}

              <div>
                <div className=" w-full space-y-6">

                  <label className="block mb-2 text-md font-medium text-gray-700 font-poppins">Contact Details:</label>



                  {/* First Name */}
                  <div className="relative">
                    {/* SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute size-5 left-5 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <path fill-rule="evenodd" d="M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clip-rule="evenodd" />
                    </svg>



                    {/* Input */}
                    <input
                      type="text"
                      placeholder="First Name*"
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-gray-200  px-12 py-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins placeholder-gray-500"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative w-full">
                    {/* SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute size-5 left-5 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <path fill-rule="evenodd" d="M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clip-rule="evenodd" />
                    </svg>

                    {/* Input */}
                    <input
                      type="text"
                      placeholder="Last Name*"
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                      className="bg-gray-200  px-12 py-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins placeholder-gray-500"
                    />
                  </div>

                  {/* Business Name */}
                  <div className="relative w-full">
                    {/* SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute size-5 left-5 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <path fill-rule="evenodd" d="M1 2.75A.75.75 0 0 1 1.75 2h10.5a.75.75 0 0 1 0 1.5H12v13.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5H2v-13h-.25A.75.75 0 0 1 1 2.75ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM8 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM8.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM14.25 6a.75.75 0 0 0-.75.75V17a1 1 0 0 0 1 1h3.75a.75.75 0 0 0 0-1.5H18v-9h.25a.75.75 0 0 0 0-1.5h-4Zm.5 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm.5 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" clip-rule="evenodd" />
                    </svg>


                    {/* Input */}
                    <input
                      type="text"
                      placeholder="Business Name (Optional)"
                      value={business_name}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="bg-gray-200  px-12 py-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins placeholder-gray-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative w-full">
                    {/* SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute size-5 left-5 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <path fill-rule="evenodd" d="M5.404 14.596A6.5 6.5 0 1 1 16.5 10a1.25 1.25 0 0 1-2.5 0 4 4 0 1 0-.571 2.06A2.75 2.75 0 0 0 18 10a8 8 0 1 0-2.343 5.657.75.75 0 0 0-1.06-1.06 6.5 6.5 0 0 1-9.193 0ZM10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd" />
                    </svg>


                    {/* Input */}
                    <input
                      type="email"
                      placeholder="Email*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200  px-12 py-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins placeholder-gray-500"
                    />
                  </div>

                  {/* Phone Name */}
                  <div className="relative w-full">
                    {/* SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute size-5 left-5 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd" />
                    </svg>


                    {/* Input */}
                    <input
                      type="tel"
                      placeholder="Phone Number*"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-gray-200  px-12 py-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins placeholder-gray-500"
                    />
                  </div>








                </div>
              </div>

              {/* Device selector and model dropdown */}
              <div className="flex-1 space-y-6">
                <label className="block  text-md font-medium text-gray-700  font-poppins">Select Apple Device:</label>

                {/* Device Selection */}
                <div className="grid grid-cols-4 gap-3 mb-4  font-poppins">
                  {Object.keys(device_type).map((d) => (
                    <div
                      key={d}
                      onClick={() => {
                        setDevice(d);
                        setModel(device_type[d][0]); // Default to first model
                      }}
                      className={`cursor-pointer text-center px-4 py-4 rounded-lg  ${device === d
                        ? "bg-[#3f3f3f] text-white"
                        : "bg-gray-200  hover:bg-blue-100 text-black border-gray-300"
                        }`}

                    >

                      {(d === "iPhone" || d === "iMac" || d === "iPad") ? d : d.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    </div>
                  ))}


                </div>

                {/* Model Selection */}
                {device && (
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="bg-gray-200 px-4 py-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins"
                  >
                    {device_type[device].map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                )}

                <div style={{ minWidth: "100%", minHeight: "3.5rem" }}>
                  {device && model && device_model[model] && (
                    <select
                      value={variant}
                      onChange={(e) => setVariant(e.target.value)}
                      className="bg-gray-200 px-4 py-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins"
                    >
                      {device_model[model].map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  )}
                </div>




              </div>


              <div className="flex-1 space-y-6">
                <label className="block  text-md font-medium text-gray-700  font-poppins">Select Issue:</label>

                {/* Issue */}
                {device && (
                  <select
                    value={modelIssue}
                    onChange={(e) => setmodelIssue(e.target.value)}
                    className="bg-gray-200 px-4 py-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins"
                  >
                    {ticket_issue[device].map((issue) => (
                      <option key={issue} value={issue}>
                        {issue}
                      </option>
                    ))}
                  </select>
                )}

              </div>

              <button
                onClick={handleInfoSubmit}
                type="submit"
                className="mt-6 px-6 py-3 bg-[#ca6a0d] text-white rounded-lg font-poppins hover:bg-[#b55c0b]"
              >
                Submit Repair
              </button>



            </div>
          </>) : (
            <div>
              <TimeslotGrid></TimeslotGrid>
            </div>
          )}





      </div >
    );
  }