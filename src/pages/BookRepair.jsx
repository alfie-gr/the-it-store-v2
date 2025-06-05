{/* Import Form from componants */ }
import React from 'react';
import { Link } from "react-router-dom";
import Gallary from "../components/Gallary";
import { Cog } from 'lucide-react';
import BookRepairForm from "@/components/BookRepairForm";
import '../index.css'; // Make sure this has full height styles

export default function BookRepair() {
    return (
        // Overall Page
        <div className="relative w-full min-h-screen mt-32 inset-0 size-full items-center bg-white">

            <section className='relative flex flex-col justify-between  rounded-md overflow-hidden'>


                <div className='relative flex flex-col justify-between py-12  px-10 md:px-36  shadow-[0_20px_50px_-10px_rgba(0,0,0,0.09)]  rounded-md overflow-hidden' >
                    {/* Heading */}
                    <div className='relative flex flex-col justify-between py-12 px-36  shadow-[0_20px_50px_-10px_rgba(0,0,0,0.09)]  rounded-md overflow-hidden'>
                        <h1 className="font-semibold font-poppins text-[50px] text-[#000000] ">Book Repair </h1>
                        <p className=" font-poppins font-normal text-[20px] text-[#000000]" > To book a repair please start a new ticket. </p>


                    </div>



                    {/* Form */}
                    <div className='flex items-start justify-start mt-20 mx-10 md:mx-36 '>
                        <BookRepairForm></BookRepairForm>
                    </div>
                </div>



            </section>
        </div>
    );
}