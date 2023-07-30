import {navLinks} from "../content/content"
import close from "../assets/close.svg"
import styles from "../style"

const MenuMobil = (prop) => {
    return (
        <div className={`fixed w-64 h-screen -left-64 top-0 bg-white shadow-2xl py-24 px-10 duration-1000 ease-in-out md:hidden  ${prop.open ? "!left-0" : ""}`}>
            <div className={`${styles.flexitems}`}>
        <img src={prop.logo} alt="logo" />
        <img src={close} 
        alt="close" 
        className="absolute top-5 right-5 cursor-pointer"
        onClick={prop.handleclose} />
            </div>
        <ul className={`${styles.flexitems} gap-[4.88rem] flex-col my-16`}>
                {navLinks.map(nav => (
                    <li className={` ${styles.flexitems}`} key={nav.id}>
                        <a className="font-Ubuntu text-1xl font-normal leading-normal text-primary" href="">{nav.title}</a>
                        {nav.id === "product" ? <img src={prop.Vector} className="w-3 h-3 absolute right-16" alt="Vector" /> : ""}
                    </li>
                ))}
            </ul>
            <div className={`${styles.flexCenter} gap-[1rem] flex-col text-xl`}>
                <button className="text-[#42454A] text-center not-italic font-normal leading-[normal] font-Ubuntu">LOG IN</button>
                <button className="text-whity font-Ubuntu traking-[0.0175rem] leading-normal bg-primary py-[0.87rem] px-[1.63rem] shadow-[0px_12px_25px_-10px] rounded font-normal w-full ">SIGN UP</button>
            </div>
        </div>
    )
}

export default MenuMobil