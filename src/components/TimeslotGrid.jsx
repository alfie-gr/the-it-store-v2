import React, { useEffect, useState } from "react";
import { fetchAvailableAppointments } from "@/lib/utils"; // adjust the path if needed

export default function TimeSlotGrid() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date();
        const sevenDaysLater = new Date();
        sevenDaysLater.setDate(today.getDate() + 7);

        const dateFrom = today.toISOString().split("T")[0];
        const dateTo = sevenDaysLater.toISOString().split("T")[0];

        const appts = await fetchAvailableAppointments(dateFrom, dateTo);
        setAppointments(appts || []);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {appointments.map((appt) => (
        <div key={appt.id} className="border p-4 rounded shadow">
          <p><strong>Date:</strong> {appt.start_at?.split("T")[0]}</p>
          <p><strong>Time:</strong> {new Date(appt.start_at).toLocaleTimeString()}</p>
          <p><strong>Duration:</strong> {appt.duration ?? "N/A"} mins</p>
        </div>
      ))}
    </div>
  );
}