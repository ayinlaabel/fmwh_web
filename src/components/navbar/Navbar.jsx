import { Outlet } from "react-router-dom";

const baseUrl = process.env.PUBLIC_URL;

const Navbar = () => {
  return (
    <>
      <header className='h-fit w-full'>
        <div className='h-[2rem] bg-[#56876D] w-full flex px-3'>
          <div className='flex items-center mr-[10rem]'>
            <div className='text-white mr-3 text-[12px]'>
              <i class='fa-solid fa-envelope'></i>
            </div>
            <p className='text-white text-[12px] font-medium'>
              johndoe@example.com
            </p>
          </div>
          <div className='flex items-center'>
            <div className='text-white mr-3 text-[12px]'>
              <i class='fa-solid fa-phone'></i>
            </div>
            <p className='text-white text-[12px] font-medium'>
              +234 811 345 6574
            </p>
          </div>
        </div>
        <nav className='h-[4rem] bg-[#04724D] px-9 flex items-center justify-between'>
          <div className='h-[3rem] w-[3rem]'>
            <img
              src={baseUrl + "/SealNigerianPresident.png"}
              alt=''
              className='object-contain'
            />
          </div>
          <ul className='flex w-fit text-[14px]'>
            <li className='w-fit px-3 text-white font-medium'>
              <a href='/'>Home</a>
            </li>
            <li className='w-fit px-3 text-[#56876D]'>
              <a href='/about-us'>About Us</a>
            </li>
            <li className='w-fit px-3 text-[#56876D]'>
              <a href='/unit'>Unit</a>
            </li>
            <li className='w-fit px-3 text-[#56876D]'>
              <a href='/our-processes'>Our Processes</a>
            </li>
            <li className='w-fit px-3 text-[#56876D]'>
              <a href='/help'>Help</a>
            </li>
            <li className='w-fit px-3 text-[#56876D]'>
              <a href='/contact-us'>Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
