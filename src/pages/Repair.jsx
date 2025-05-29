import React from 'react';
import { Link } from "react-router-dom";
import Gallary from "../components/Gallary";
import { Cog } from 'lucide-react';
import '../index.css'; // Make sure this has full height styles

export default function Repair() {
    return (
        // Overall Page
        <div className="relative w-full min-h-screen inset-0 -z-10 size-full items-center bg-white">

          
            {/* Background Image with low opacity, absolute positioned */}
            <div
                className="relative inset-0 bg-[center_top_80%] bg-cover   bg-no-repeat h-[550px] "
                style={{ backgroundImage: "url('/assets/repairBanner.JPG')" }}

                
            >
            </div>



            {/* Heading and Button */}
            <section className='relative flex  justify-center px-36 py-18 space-y-10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.09)] bg-white p-8 rounded-md'>

                {/* Heading */}
                <div className="relative flex flex-col">
                    <span className="font-semibold font-poppins text-[50px]  text-[#FF8300] ">Repair</span>

                    <div className='relative flex flex-row justify-between'>
                        <div className='w-6/12 space-y-2'>
                            <p className="font-medium font-poppins text-[18px] text-[#353535] ">The iT Store offers all Apple repairs and upgrades for MacBook Pro, iMac, Mac Pro, Mac mini and iOS devices.</p>

                            <p className="font-medium font-poppins text-[18px] text-[#353535] ">As well as employing Apple Certified Mac Technician, all our repairs are completed under strict ESD anti-static conditions in our air-purified workshops. We use Apple specialised toolkits and diagnostic tools to professionally complete every repair to the highest standard.</p>
                        </div>


                    </div>
                </div>




                <div className='relative flex space-x-7' >
                    <a href="#buttons-with-link">
                        <button
                            className="flex items-center gap-2 whitespace-nowrap py-4 px-6 font-medium text-[20px] font-poppins text-white bg-gradient-to-tr from-[#FF8300] to-[#ffb15d] rounded-md shadow-md hover:from-slate-700 hover:to-slate-700 hover:shadow-lg focus:bg-slate-800 active:bg-slate-900 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 ease-in-out"
                            type="button"
                        >
                            <Cog className="text-white" />
                            Book Repair
                        </button>


                    </a>



                    <a href="#buttons-with-link">
                        <button className="flex items-center gap-2 whitespace-nowrap py-4 px-6 font-medium text-[20px] font-poppins text-white bg-gradient-to-tr from-[#FF8300] to-[#ffb15d] rounded-md shadow-md hover:from-slate-700 hover:to-slate-700 hover:shadow-lg focus:bg-slate-800 active:bg-slate-900 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 ease-in-out" type="button">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2">
                                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                            </svg>

                            Book 1-1 Training
                        </button>


                    </a>

                </div>


            </section>


            {/* Repairs */}
            <section className=' flex flex-col justify-start px-36 py-12  '>
                <div className='flex-col justify-content-flex-start'>

                    <p className="">
                        <span className="font-semibold font-poppins text-[25px] text-[#000000]">Common Repairs. </span>

                        <span className="font-semibold font-poppins text-[25px] text-[#757575]">Frequent repairs we encounter.</span>
                    </p>

                    {/* Maybe Take Out!!!!!!!!!!!!!!! */}
                    <p className="font-medium font-poppins text-[15px] text-[#414141]">
                        We have rapidly rotating stock of pre-owned Apple devices, including Mac laptops and desktops, iPad, iPhone and Apple Watch.
                    </p>




                    {/* Grid of Repair Cards */}
                    <div className="grid grid-cols-5 space-x-3 py-10 font-poppins font-semibold">

                        {/* Screen Repair */}
                        <div className="group relative h-[300px]  rounded-lg shadow-lg overflow-hidden">
                            {/* Image */}
                            <img
                                src="/assets/screenRepair.jpg"
                                alt="Screen Repair"
                                className="h-full w-full object-cover rounded-lg"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg z-10"></div>

                            {/* Title Text */}
                            <div className="absolute bottom-0 left-0 w-full p-4 text-lg font-semibold z-20">
                                <span className='text-[#FF8300]'>Screen </span>
                                <span className='text-[#FF8300]/80'>Repair</span>
                            </div>


                        </div>



                        {/* Dispaly Repair */}
                        <div className="relative h-[300px]  rounded-lg shadow-lg overflow-hidden">
                            {/* Image */}
                            <img
                                src="/assets/displayRepair.jpg"
                                alt="Display Repair"
                                className="h-full w-full object-cover rounded-lg"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>

                            {/* Text */}
                            <div className="absolute bottom-0 left-0 w-full p-4  text-lg font-semibold z-10">
                                <span className='text-[#FF8300]'>Display </span><span className='text-[#FF8300]/80'>Repair</span>

                            </div>
                        </div>

                        {/* Battery Repair */}
                        <div className="relative h-[300px]  rounded-lg shadow-lg overflow-hidden">
                            {/* Image */}
                            <img
                                src="/assets/batteryRepair.jpg"
                                alt="Battery Repair"
                                className="h-full w-full object-cover rounded-lg"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>

                            {/* Text */}
                            <div className="absolute bottom-0 left-0 w-full p-4  text-lg font-semibold z-10">
                                <span className='text-[#FF8300]'>Battery </span><span className='text-[#FF8300]/80'>Repair</span>

                            </div>
                        </div>

                        {/* Data recovery */}
                        <div className="relative h-[300px]  rounded-lg shadow-lg overflow-hidden">
                            {/* Image */}
                            <img
                                src="/assets/dataRecovery.jpg"
                                alt="Screen Repair"
                                className="h-full w-full object-cover rounded-lg"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>

                            {/* Text */}
                            <div className="absolute bottom-0 left-0 w-full p-4  text-lg font-semibold z-10">
                                <span className='text-[#FF8300]'>Data </span><span className='text-[#FF8300]/80'>Recovery</span>

                            </div>
                        </div>

                        {/* Dispaly Repair */}
                        <div className="relative h-[300px]  rounded-lg shadow-lg overflow-hidden">
                            {/* Image */}
                            <img
                                src="/assets/imacUpgrade.jpg"
                                alt="Screen Repair"
                                className="h-full w-full object-cover rounded-lg"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>

                            {/* Text */}
                            <div className="absolute bottom-0 left-0 w-full p-4  text-lg font-semibold z-10">
                                <span className='text-[#FF8300]'>iMac SSD </span><span className='text-[#FF8300]/80'>Upgrade</span>

                            </div>
                        </div>




                    </div>





                </div>
            </section>



            <section className="bg-[#0d0d0d] text-white py-20 px-36 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="p-8 bg-[#1a1a1a] rounded-lg shadow-lg hover:shadow-orange-400/40 transition-all">
                    <h3 className="text-2xl font-semibold mb-2 text-[#ff8300]">Repairs</h3>

                    <div className="space-y-6">
                        <p>At The iT Store, we take pride in delivering repairs and upgrades you can trust. Our team includes Apple Certified Mac Technicians, ensuring that your device is handled by professionals who meet Apple’s stringent technical standards.</p>
                        <p>Every repair is carried out in our state-of-the-art, air-purified workshops in Canterbury, which are designed to meet strict ESD (Electrostatic Discharge) anti-static conditions. This protects sensitive internal components and guarantees the long-term reliability of your device.</p>
                        <p>We use only Apple-specialised toolkits and official diagnostic systems, allowing us to accurately identify issues and carry out repairs with exceptional precision. Whether it's a hardware fault or a performance upgrade, we’re committed to completing every job to the highest industry standards, giving you peace of mind and restoring your device to optimal performance.</p>
                        <ul className="space-y-3">
                            <li className="flex">
                                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                    <circle cx="11" cy="11" r="11" className="fill-[#ff8300]/20" />
                                    <circle cx="11" cy="11" r="10.5" className="stroke-[#ff8300]/25" />
                                    <path d="M8 11.5L10.5 14L14 8" className="text-[#ff8300] dark:stroke-[#ff8300]" />
                                </svg>
                                <p className="ml-3">
                                    In house workshop
                                </p>
                            </li>
                            <li className="flex">
                                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                    <circle cx="11" cy="11" r="11" className="fill-[#ff8300]/20" />
                                    <circle cx="11" cy="11" r="10.5" className="stroke-[#ff8300]/25" />
                                    <path d="M8 11.5L10.5 14L14 8" className="text-[#ff8300] dark:stroke-[#ff8300]" />
                                </svg>
                                <p className="ml-3">
                                    12 month warranty
                                </p>
                            </li>
                            <li className="flex">
                                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                    <circle cx="11" cy="11" r="11" className="fill-[#ff8300]/20" />
                                    <circle cx="11" cy="11" r="10.5" className="stroke-[#ff8300]/25" />
                                    <path d="M8 11.5L10.5 14L14 8" className="text-[#ff8300] dark:stroke-[#ff8300]" />
                                </svg>
                                <p className="ml-3">
                                    24hr turnaround*
                                </p>
                            </li>

                            <li className="flex">
                                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                    <circle cx="11" cy="11" r="11" className="fill-[#ff8300]/20" />
                                    <circle cx="11" cy="11" r="10.5" className="stroke-[#ff8300]/25" />
                                    <path d="M8 11.5L10.5 14L14 8" className="text-[#ff8300] dark:stroke-[#ff8300]" />
                                </svg>
                                <p className="ml-3">Free diagnosis*</p>
                            </li>
                        </ul>
                        <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
                    </div>
                </div>
                <div className="p-8 bg-[#1a1a1a] rounded-lg shadow-lg hover:shadow-orange-400/40 transition-all">
                    <h3 className="text-2xl font-semibold mb-2 text-[#ff8300]">Trade-In Options</h3>

                    <div className='space-y-6'>
                        <p>Looking to upgrade or no longer need your Apple device? At The iT Store, we make it easy and secure to sell or trade in your Apple products. Whether it's a Mac, iPhone, iPad, or Apple Watch, we offer competitive valuations and a hassle-free process designed to give you the best value.</p>
                        <p>Our expert team thoroughly inspects each device using Apple-authorised diagnostic tools, ensuring transparency and fairness in every assessment. You can choose to receive immediate payment or use the value of your trade-in towards a new or refurbished Apple device from our store.</p>
                        <p>We accept devices in a range of conditions, and our process is built around speed, simplicity, and security. Every transaction is handled with complete data privacy in mind — we ensure secure data erasure on all devices before resale or recycling.</p>
                        <p>What we look for in a good trade in:</p>
                        <ul className="space-y-3">


                            <li className="flex">
                                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                    <circle cx="11" cy="11" r="11" className="fill-[#ff8300]/20" />
                                    <circle cx="11" cy="11" r="10.5" className="stroke-[#ff8300]/25" />
                                    <path d="M8 11.5L10.5 14L14 8" className="text-[#ff8300] dark:stroke-[#ff8300]" />
                                </svg>
                                <p className="ml-3">
                                    Above 80% battery health
                                </p>
                            </li>
                            <li className="flex">
                                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                    <circle cx="11" cy="11" r="11" className="fill-[#ff8300]/20" />
                                    <circle cx="11" cy="11" r="10.5" className="stroke-[#ff8300]/25" />
                                    <path d="M8 11.5L10.5 14L14 8" className="text-[#ff8300] dark:stroke-[#ff8300]" />
                                </svg>
                                <p className="ml-3">
                                    Good screen condition
                                </p>
                            </li>
                            <li className="flex">
                                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                    <circle cx="11" cy="11" r="11" className="fill-[#ff8300]/20" />
                                    <circle cx="11" cy="11" r="10.5" className="stroke-[#ff8300]/25" />
                                    <path d="M8 11.5L10.5 14L14 8" className="text-[#ff8300] dark:stroke-[#ff8300]" />
                                </svg>
                                <p className="ml-3">
                                    Good camera condition
                                </p>
                            </li>

                            <li className="flex">
                                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                    <circle cx="11" cy="11" r="11" className="fill-[#ff8300]/20" />
                                    <circle cx="11" cy="11" r="10.5" className="stroke-[#ff8300]/25" />
                                    <path d="M8 11.5L10.5 14L14 8" className="text-[#ff8300] dark:stroke-[#ff8300]" />
                                </svg>
                                <p className="ml-3">Out of contract</p>
                            </li>
                        </ul>


                    </div>


                </div>
            </section>

            <section className='relative flex flex-col justify-start px-36 py-20  '>
                <div className='flex-col justify-content-flex-start'>

                    <p className="">
                        <span className="font-semibold font-poppins text-[25px] text-[#000000]">Gallary. </span>

                        <span className="font-semibold font-poppins text-[25px] text-[#757575]">View our store.</span>
                    </p>







                    <Gallary></Gallary>



                </div>
            </section>


        </div>
    );
}