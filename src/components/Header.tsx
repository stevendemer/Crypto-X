import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';

interface IProps {

}

const Header:React.FC<IProps> = () => {

  const [toggled, setToggled] = useState<boolean>(false);

  const handleClick = () => {
    console.log("Button clicked.");
    setToggled(!toggled);
  }

  const sideMenu = () => (
       <div className="fixed top-0 right-0 h-screen w-screen px-10 bg-green-500 rounded-lg">
        <div onClick={handleClick} className="fixed top-0 right-0 px-2 py-6 -my-2 w-fit cursor-pointer text-black z-30 text-5xl transition-all duration-300 delay-100 hover:rotate-180">
         <MdOutlineClose />
        </div>
       <div className="flex justify-around items-center flex-col font-bold space-y-20 py-20 text-3xl ">
          <Link to='/charts' className='transition-all delay-125 ease-in-out hover:scale-125 hover:underline underline-offset-8 decoration-2'>Charts</Link>
          <Link to='/assets' className=' transition delay-125 ease-in-out hover:underline hover:scale-125 underline-offset-8'>Assets</Link>
          <Link to='/exchanges' className='transition delay-125 ease-in-out hover:underline hover:scale-125 underline-offset-8'>Exchanges</Link>
        </div>
   </div>
  )


  return (
   <div className="fixed top-0 flex items-center justify-between w-screen text-white z-10 mx-auto py-3 bg-transparent h-[104px]">
     {/* Title and logo section */}
     <Link to="/">
      <h2 className="flex items-center mx-8 my-3 cursor-pointer font-lato whitespace-nowrap text-5xl text-white text-emerald-500 bg-blend-color font-bold">Crypto X</h2>
     </Link>
     {/* nav links  */}
     <div className="hidden space-x-12 px-10 text-white text-2xl font-mon font-semibold transition ease-in-out items-center md:flex">
       <Link to='/charts' className='transition delay-75 ease-in-out hover:text-emerald-400 hover:scale-125'>Charts</Link>
       <Link to='/assets' className=' transition delay-75 ease-in-out hover:text-emerald-400 hover:scale-125'>Assets</Link>
       <Link to='/exchanges' className='transition delay-75 ease-in-out hover:text-emerald-400 hover:scale-125'>Exchanges</Link>
       <Link to="/login">
        <div className="cursor-pointer bg-emerald-500 text-white text-xl font-extrabold p-2 transition-all delay-125 rounded-lg hover:bg-black hover:text-emerald-500">Sign in</div>
       </Link>
       <Link to="/signup"> 
          <div className="cursor-pointer bg-emerald-500 font-extrabold text-white text-xl p-2 transition-all delay-125 rounded-lg hover:bg-black hover:text-emerald-500">Sign up</div>
       </Link>
     </div>
     <div className="md:hidden block cursor-pointer px-20  text-white text-4xl opacity-75" onClick={handleClick}>
       <AiOutlineMenu />
     </div>
      {toggled && sideMenu()}
   </div> 
  );
}

export default Header;