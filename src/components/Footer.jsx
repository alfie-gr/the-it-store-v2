import '../index.css';

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white text-center  ">

      <div className='flex flex-col-4 justify-between items-start px-6 py-10'>


        {/* Col 1 */}
        <div className="px-10 flex flex-col justify-start items-start font-poppins text-[14px] space-y-3">

          {/* Sell or Trade */}
          <h2 className='font-semibold text-[18px] py-2'>Sell or Trade</h2>

          <div>
            <span className=' text-white font-normal hover:text-[#ff8300]'>Sell or Trade Device</span>
          </div>


          {/* Buy */}
          <h2 className='font-semibold text-[18px] py-2'>Buy</h2>

          <div>
            <span className=' text-white font-normal hover:text-[#ff8300]'>Mac</span>
          </div>

          <div>
            <span className=' text-white font-normal hover:text-[#ff8300]'>iPhone</span>
          </div>

          <div>
            <span className=' text-white font-normal hover:text-[#ff8300]'>iPad</span>
          </div>

          <div>
            <span className=' text-white font-normal hover:text-[#ff8300]'>Apple Watch</span>
          </div>

          <div>
            <span className=' text-white font-normal hover:text-[#ff8300]'>Accessories</span>
          </div>
        </div>

        {/* Col 2*/}
        <div className="px-10 flex flex-col justify-start items-start font-poppins text-[14px] space-y-3">

          {/* Sell or Trade */}
          <h2 className='font-semibold text-[18px] py-2'>Repair & Advice</h2>

          <div>
            <span className=' text-white font-normal hover:text-[#ff8300]'>Repair</span>
          </div>

          <div>
            <span className=' text-white font-normal hover:text-[#ff8300]'>Advice</span>
          </div>
        </div>

        {/* Col 3 */}
        <div className="px-10 flex flex-col justify-start items-start font-poppins text-[14px] space-y-3">


          {/* About Us */}
          <h2 className='font-semibold text-[18px] py-2'>About Us</h2>

          <div>
            <span className=' text-white font-normal hover:text-[#ff8300]'>FAQ's</span>
          </div>

          <div>
            <span className=' text-white font-normal hover:text-[#ff8300]'>About</span>
          </div>

          <div>
            <span className=' text-white font-normal hover:text-[#ff8300]'>Privacy Policy</span>
          </div>

          <div>
            <span className=' text-white font-normal hover:text-[#ff8300]'>Finance Option</span>
          </div>
        </div>


        {/* Col 4 */}
        <div className="px-10 flex flex-col justify-start items-start font-poppins space-y-3">
          {/* Contact Us */}
          <h2 className='font-semibold text-[18px] py-2'>Contact Us</h2>

          <div className='text-[14px]'>
            <span className=' text-white font-medium'>Telephone: </span>
            <span className=' text-white font-normal hover:text-[#ff8300]'>01227455250</span>
          </div>

          <div className='text-[14px]'>
            <span className=' text-white font-medium'>Email: </span>
            <span className=' text-white font-normal hover:text-[#ff8300]'>info@theitstore.com</span>
          </div>

          {/* Opening Times */}
          <h2 className='font-semibold text-[18px] py-3'>Opening Times</h2>

          <div className='text-[14px]'>
            <span className=' text-white font-medium'>Mon-Sat: </span>
            <span className=' text-white font-normal'>9am-5:30pm</span>
          </div>

          <h2 className='font-semibold text-[18px] py-3'>Socials</h2>

          <div className='grid grid-cols-3 gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-facebook-icon lucide-facebook hover:stroke-[#ff8300]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-twitter-icon lucide-twitter hover:stroke-[#ff8300]"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-instagram-icon lucide-instagram hover:stroke-[#ff8300]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </div>
        </div>


      </div>

      <div className='bg-[#3f3f3f] flex flex-col justify-start items-start px-16 py-6 font-poppins text-[14px] space-y-2'>

        <div className='flex flex-col justify-start items-start s'>
           <p>© 2025 Ace Knox Limited</p>
           <p>Registered in England and Wales: 14459989</p>
        </div>

        <div>
          Made by: GrayStudios
        </div>
       

      </div>


    </footer>
  );
}