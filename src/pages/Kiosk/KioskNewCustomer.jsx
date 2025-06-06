import { useState } from "react";
import { Link } from "react-router-dom";
import { httpsCallable } from "firebase/functions";
import { functions } from "@/firebase"; //
import "@/index.css";

export default function KioskNewCustomer() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://getcustomers-4f6qjip22a-uc.a.run.app");
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.json();
            console.log("Customers:", data);
            // TODO: Display data in the kiosk UI
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    };

    return (
        <div className="flex flex-col justify-center relative w-full min-h-screen inset-0 size-full items-center bg-[#FF8300]">

            <div className="flex flex-col items-center justify-center min-h-screen bg-[#FF8300] px-4">
                <form onSubmit={handleSubmit}>
                    <div className="w-4/5 max-w-md space-y-6">


                        <h2 className="text-xl text-white text-left w-full font-poppins">New Customer</h2>
                        <p className="text-white text-left w-full font-poppins">
                            Please follow the instructions on the screen to create a new customer account.
                        </p>

                        {/* First Name */}
                        <div className="relative w-full">
                            {/* SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute size-5 left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <path fill-rule="evenodd" d="M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clip-rule="evenodd" />
                            </svg>



                            {/* Input */}
                            <input
                                type="text"
                                placeholder="First Name*"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="bg-white shadow-[0_4px_6px_rgba(194,106,13,0.8)] px-12 py-4 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="relative w-full">
                            {/* SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute size-5 left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <path fill-rule="evenodd" d="M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clip-rule="evenodd" />
                            </svg>

                            {/* Input */}
                            <input
                                type="text"
                                placeholder="Last Name*"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="bg-white shadow-[0_4px_6px_rgba(194,106,13,0.8)] px-12 py-4 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins"
                            />
                        </div>

                        {/* Business Name */}
                        <div className="relative w-full">
                            {/* SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute size-5 left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <path fill-rule="evenodd" d="M1 2.75A.75.75 0 0 1 1.75 2h10.5a.75.75 0 0 1 0 1.5H12v13.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5H2v-13h-.25A.75.75 0 0 1 1 2.75ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM8 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM8.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM14.25 6a.75.75 0 0 0-.75.75V17a1 1 0 0 0 1 1h3.75a.75.75 0 0 0 0-1.5H18v-9h.25a.75.75 0 0 0 0-1.5h-4Zm.5 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm.5 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" clip-rule="evenodd" />
                            </svg>


                            {/* Input */}
                            <input
                                type="text"
                                placeholder="Business Name (Optional)"
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                className="bg-white shadow-[0_4px_6px_rgba(194,106,13,0.8)] px-12 py-4 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative w-full">
                            {/* SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute size-5 left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <path fill-rule="evenodd" d="M5.404 14.596A6.5 6.5 0 1 1 16.5 10a1.25 1.25 0 0 1-2.5 0 4 4 0 1 0-.571 2.06A2.75 2.75 0 0 0 18 10a8 8 0 1 0-2.343 5.657.75.75 0 0 0-1.06-1.06 6.5 6.5 0 0 1-9.193 0ZM10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd" />
                            </svg>


                            {/* Input */}
                            <input
                                type="email"
                                placeholder="Email*"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-white shadow-[0_4px_6px_rgba(194,106,13,0.8)] px-12 py-4 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins"
                            />
                        </div>

                        {/* Phone Name */}
                        <div className="relative w-full">
                            {/* SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute size-5 left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd" />
                            </svg>


                            {/* Input */}
                            <input
                                type="phone"
                                placeholder="Phone Number*"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="bg-white shadow-[0_4px_6px_rgba(194,106,13,0.8)] px-12 py-4 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-[#202020]/20 font-poppins"
                            />
                        </div>


                        <button
                            type="submit"
                            className="bg-[#2D2D2D] text-white shadow-[0_4px_6px_rgba(194,106,13,0.8)] px-12 py-4 w-full rounded-full font-poppins"

                        >
                            Create New Customer Account
                        </button>






                    </div>
                </form>
            </div>



        </div>
    );
}