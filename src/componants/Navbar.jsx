import styles from "../style"
import logo from "../assets/logo.svg"
import Vector from "../assets/Vector.svg"
import hamburger from "../assets/hamburger-menu.svg"
import {navLinks} from "../content/content"
import { useState , useEffect , useRef } from "react"
import MenuMobil from "./MenuMobil"
import Dropdown from "./dropdown"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [show , setshow] = useState(false)

    function dropdown(e) {
    const value = e.target.textContent;
    value === "PRODUCTS" ?setshow(true):setshow(false);
    }

    const handleToggle = () => {setIsOpen(!isOpen);}

    const handleclose = () => {
        setIsOpen(false)
      };

    return (
        <>
        <nav className={`${styles.flexBetween} animate__animated animate__backInUp w-full py-[1.62rem] ${styles.paddingx} border-solid border-b-2 border-b-[#EAE8F3] `}>
            <img src={logo} alt="logo" className="h-10" />
            <ul className={`${styles.flexitems} md:flex hidden gap-[4.88rem] `}>
                {navLinks.map((nav) => (
                    <li className={` ${styles.flexitems} `} onClick={dropdown} key={nav.id}>
                        <a className="hover:underline duration-150 font-Ubuntu text-navsizefont-normal leading-normal text-primary" href="#">{nav.title}</a>
                        {nav.id === "product" ? <img src={Vector} className="w-3 h-3 ml-4" alt="Vector" /> : ""}
                        {nav.id === "product" ? <Dropdown state = {show}/> : ""}
                    </li>
                ))}
                
                
            </ul>
            <div className={`${styles.flexCenter} gap-[2.81rem] md:flex hidden`}>
                <button className="hover:underline  text-[#42454A] text-center text-navsize not-italic font-normal leading-[normal] font-Ubuntu">LOG IN</button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-whity text-navsize font-Ubuntu traking-[0.0175rem] leading-normal hover:bg-opacity-50 bg-primary py-[0.87rem] px-[1.63rem] shadow-[0px_12px_25px_-10px] rounded font-normal "
                >SIGN UP</button>
            </div>
            <img 
            src={hamburger} 
            alt="hamburger-menu" 
            className=" md:hidden w-14 h-14 cursor-pointer duration-300  "
            onClick={handleToggle} />
        </nav>
        <MenuMobil 
        handleclose = {handleclose}
        open ={isOpen} 
        logo = {logo}
        Vector = {Vector}
         />
            </>
    )
}

export default Navbar