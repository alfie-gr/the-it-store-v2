import React from 'react';
import { Link } from "react-router-dom";
import Gallary from "../components/Gallary";
import { Cog } from 'lucide-react';
import '../index.css'; // Make sure this has full height styles

export default function Home() {
    return (
        // Overall Page
        <div className="relative w-full max-w-screen overflow-x-hidden mx-auto mt-16 md:mt-20 inset-0  items-center bg-white">

            {/* Background Image with low opacity, absolute positioned */}
            <div
                className="relative inset-0 bg-[center_top_45%] bg-cover   bg-no-repeat h-[200px] md:h-[550px] "
                style={{ backgroundImage: "url('/assets/shopFront.JPG')" }}


            >




            </div>




            {/* Heading and Button */}
            <section className='relative flex flex-col md:flex-row justify-between  px-10 md:px-36 py-5 space-y-10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.09)]  rounded-md overflow-hidden'>


                {/* Heading */}
                <div className="">
                    <span className="font-semibold font-poppins text-[24px] md:text-[50px]  text-[#000000] ">Genuine Apple. </span>
                    <p className='md:hidden'></p>
                    <span className="font-semibold font-poppins text-[24px] md:text-[50px] text-[#353535] ">Pre-owned with confidence, </span>
                    <p></p>
                    <span className="font-semibold font-poppins text-[24px] md:text-[50px] text-[#FF8300] ">Performance you can trust</span>
                </div>

                <div className=' relative flex flex-row space-x-7' >


                    {/*Book Repair */}
                    <Link to="/bookRepair">
                        <button class="group relative inline-flex h-[calc(48px+8px)]
                     items-center justify-center rounded-full bg-gradient-to-tr
                      from-[#FF8300] to-[#ffb15d] py-1 pl-6 pr-14 font-medium
                       text-neutral-50">
                            <span class="z-10 pr-2 font-poppins">Book Repair</span>
                            <div class="absolute right-1 inline-flex h-12 w-12 items-center
                         justify-end rounded-full bg-[#e08a2e] transition-[width]
                          group-hover:w-[calc(100%-8px)]">
                                <div class=" px-1 flex items-center justify-center">
                                    <Cog className='text-white mr-2'></Cog>
                                </div>
                            </div>
                        </button>
                    </Link>


                    <button class="group relative inline-flex h-[calc(48px+8px)]
                     items-center justify-center rounded-full bg-gradient-to-tr
                      from-[#FF8300] to-[#ffb15d] py-1 pl-6 pr-14 font-medium
                       text-neutral-50">
                        <span class="z-10 pr-2 font-poppins">Book 1-1 Training</span>
                        <div class="absolute right-1 inline-flex h-12 w-12 items-center
                         justify-end rounded-full bg-[#e08a2e] transition-[width]
                          group-hover:w-[calc(100%-8px)]">
                            <div class=" px-1 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2">
                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                </svg>
                            </div>
                        </div>
                    </button>






                </div>

            </section>


            {/* Stock categories */}
            <section className=' flex flex-col justify-start px-36 py-14 ' >
                <div className='flex-col justify-content-flex-start'>

                    <p className="">
                        <span className="font-semibold font-poppins text-[25px] text-[#000000]">Stock. </span>

                        <span className="font-semibold font-poppins text-[25px] text-[#757575]">Browse our stock.</span>
                    </p>

                    {/* Maybe Take Out!!!!!!!!!!!!!!! */}
                    <p className="font-medium font-poppins text-[15px] text-[#414141]">
                        We have rapidly rotating stock of pre-owned Apple devices, including Mac laptops and desktops, iPad, iPhone and Apple Watch.
                    </p>





                    <div className="grid grid-cols-5 grid-rows-1 gap-6 py-10">

                        {/* Mac */}
                        <div className="flex flex-col items-center justify-between space-y-8 bg-white p-4 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
                            <img src="/assets/mac.png" alt="Mac" className="h-[200px] object-contain" />
                            <div className="text-center text-sm font-medium font-poppins">
                                <h2 className=' hover:text-red-500' >Product Title</h2>
                            </div>

                        </div>

                        {/* iPhone */}
                        <div className="flex flex-col items-center justify-between space-y-8 bg-white p-4 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
                            <img src="/assets/iphone.jpg" alt="iPhone" className="h-[200px] object-contain" />
                            <span className="text-center text-sm font-medium font-poppins">iPhone</span>
                        </div>

                        {/* iPad */}
                        <div className="flex flex-col items-center justify-between space-y-8 bg-white p-4 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
                            <img src="/assets/ipad.jpg" alt="iPad" className="h-[200px] object-contain" />
                            <span className="text-center text-sm font-medium font-poppins">iPad</span>
                        </div>

                        {/* Apple Watch */}
                        <div className="flex flex-col items-center justify-between space-y-8 bg-white p-4 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
                            <img src="/assets/appleWatch.jpg" alt="Apple Watch" className=" h-[200px] object-contain" />
                            <span className="text-center text-sm font-medium font-poppins">Apple Watch</span>
                        </div>

                        {/* Accessories */}
                        <div className="flex flex-col items-center justify-between space-y-8 bg-white p-4 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
                            <img src="/assets/accessories.png" alt="Accessories" className=" h-[200px] object-contain" />
                            <span className="text-center text-sm font-medium font-poppins">Accessories</span>
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

            <section className='relative flex flex-col justify-start px-36 py-20 bg-[#111111] '>
                <div className='flex-col justify-content-flex-start'>

                    <p className="">
                        <span className="font-semibold font-poppins text-[25px] text-[#ffffff]">Gallary. </span>

                        <span className="font-semibold font-poppins text-[25px] text-[#a3a3a3]">View our store.</span>
                    </p>







                    <Gallary></Gallary>



                </div>
            </section>


        </div>
    );
}