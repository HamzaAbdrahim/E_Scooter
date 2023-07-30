import styles from "../style"
import{ sitemap } from "../content/content"
import{ Resources } from "../content/content"
import{ links } from "../content/content"
import icons from "../assets/icons.svg"

import footerimage from "../assets/footerimage.png"
const Footer = () => {
  return (
    <>
    <div className="bg-primary mt-14">

    <div  className={`flex pt-[6.19rem] w-full flex-wrap gap-28`}>
        <img src={footerimage} alt="footerimage" className="object-contain -mt-48" />
        <ul className="mx-auto xl:mx-0 ">
        <h1 className="text-[#FBFBFB] text-[1.375rem] not-italic font-bold leading-[normal] font-Ubuntu mb-[2.19rem]">About</h1>
            {sitemap.map((item , index) => (
                <li className="text-[#FBFBFB] text-[1rem] not-italic font-normal leading-[3.375rem] font-Ubuntu" key={index}>{item.title}</li>
            ))}
       
            </ul>
            <ul className="mx-auto xl:mx-0">
        <h1 className="text-[#FBFBFB] text-[1.375rem] not-italic font-bold leading-[normal] font-Ubuntu mb-[2.19rem] ">Resources</h1>
            {Resources.map((item , index) => (
                <li className="text-[#FBFBFB] text-[1rem] not-italic font-normal leading-[3.375rem] font-Ubuntu" key={index}>{item.title}</li>
            ))}
       
            </ul>
            <ul className="mx-auto xl:mx-0">
        <h1 className="text-[#FBFBFB] text-[1.375rem] not-italic font-bold leading-[normal] font-Ubuntu mb-[2.19rem] ">Legals</h1>
            {links.map((item , index) => (
                <li className="text-[#FBFBFB] text-[1rem] not-italic font-normal leading-[3.375rem] font-Ubuntu" key={index}>{item.title}</li>
            ))}
       <img src={icons} alt="socilamedia" className="mt-[1.44rem]" />
            </ul>
    </div>
            <p className=" py-8 text-[#FBFBFB] text-center text-base not-italic font-normal leading-[normal] font-Ubuntu">© Copyright 2021. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer