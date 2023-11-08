import{ sitemap } from "../content/content"
import{ Resources } from "../content/content"
import{ links } from "../content/content"
import icons from "../assets/icons.svg"

import footerimage from "../assets/footerimage.png"
const Footer = () => {
  return (
    <>
    <footer className="bg-primary mt-14">

    <section  className={`animate__animated  animate__backInDown pt-[6.19rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 `}>
        <img src={footerimage} alt="footerimage" className="object-contain -mt-48" />
        <ul className="animate__animated animate__backInDown mx-auto xl:mx-0 text-center ">
        <h1 className="text-[#FBFBFB] text-[1.375rem] not-italic font-bold leading-[normal] font-Ubuntu mb-[2.19rem]">About</h1>
            {sitemap.map((item , index) => (
                <li className="text-[#FBFBFB] text-[1rem] not-italic font-normal leading-[3.375rem] font-Ubuntu" key={index}>{item.title}</li>
            ))}
       
        </ul>
        <ul className="animate__animated animate__backInDown mx-auto xl:mx-0 text-center">
        <h1 className="text-[#FBFBFB] text-[1.375rem] not-italic font-bold leading-[normal] font-Ubuntu mb-[2.19rem] ">Resources</h1>
            {Resources.map((item , index) => (
                <li className="text-[#FBFBFB] text-[1rem] not-italic font-normal leading-[3.375rem] font-Ubuntu" key={index}>{item.title}</li>
            ))}
       
        </ul>
        <ul className="animate__animated animate__backInDown mx-auto xl:mx-0 text-center">
        <h1 className="text-[#FBFBFB] text-[1.375rem] not-italic font-bold leading-[normal] font-Ubuntu mb-[2.19rem] ">Legals</h1>
            {links.map((item , index) => (
                <li className="text-[#FBFBFB] text-[1rem] not-italic font-normal leading-[3.375rem] font-Ubuntu" key={index}>{item.title}</li>
            ))}
       <img src={icons} alt="socilamedia" className="mt-[1.44rem]" />
        </ul>
    </section>
            <p className=" py-8 text-[#FBFBFB] text-center text-base not-italic font-normal leading-[normal] font-Ubuntu">© Copyright 2021. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer