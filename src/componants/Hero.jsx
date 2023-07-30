import { layout } from '../style'
import styles from '../style'
import Speedscooter from './Speedscooter'
import image from "../assets/image.png"
import lefticon from "../assets/lefticon.png"
import circalletter from "../assets/circalletter.svg"
import scooterbg from "../assets/scooterbg.svg"
import icon from "../assets/icon.svg" 
import { useState } from 'react'


const Hero = () => {
    const [curent , setcurent] = useState(1)
    function slider() {
        setcurent(curent+1)
    }
    function increment() {
        setcurent(curent === 0 ? 0:curent-1)
    }
  return (
    <>
    <div className={`${ styles.flexBetween} ${ layout.section}  md:pl-[3.13rem]  xl:pl-[3.5rem] flex-col  `}>
          <div className= {`${layout.sectionInfo} `}>
              <h1 className=' text-[5.625rem] not-italic font-light leading-[5.9375rem] tracking-[0.05625rem] mb-[5.80rem] uppercase font-Ubuntu text-primary'>Let's ride <span className='block font-bold'> the future.</span></h1>
              <p className="text-primary font-Ubuntu py-[3.87rem] mx-auto md:mx-0  border-solid border-t-4 border-t-primary  font-normal leading-[2.125rem] traking-[0.01375rem] text-[1.375rem] max-w-[22rem]">Simple and sleek design with users in mind </p>
              <div className={`${styles.flexitems} gap-20 justify-center flex-col lg:flex-row md:justify-start `}>
                  <div className={`${styles.flexitems} gap-[1.38rem]`}>
                      <img src={icon} alt="icon" className='cursor-pointer ease-out hover:-rotate-90 duration-500' />
                      <p className=' text-xl not-italic font-medium leading-8 tracking-[0.025rem] text-[#17181A] font-Ubuntu'>Buy now</p>
                  </div>
                  <div className={`${styles.flexitems} gap-[1.31rem]`}>
                      <span className=' text-[#414449] text-lg not-italic font-medium  leading-[1.5625rem] tracking-[0.01125rem] font-Ubuntu max-w-[6rem] '>Watch our video how it works</span>
                      <img src={circalletter} className='cursor-pointer' alt="" />
                  </div>

              </div>
          </div>
          <div>
              <div>
                  <div className='relative mt-10 md:mt-0'>
                      <img src={scooterbg} alt="scooterbg" className='bg-red object-contain ml-auto absolute right-0 my-[3.81rem]' />
                      <img src={image} alt="scooter" className=' object-contain z-10 relative w-[53.46963rem] h-[40.375rem]' />
                  </div>
              </div>
          </div>
      </div>
      <div className={`flex justify-end  mr-[3.16rem] mt-[1.44rem] gap-10`}>
              <p className='-mt-16 font-Ubuntu text-[9.375rem]  not-italic font-normal leading-[14.375rem] tracking-[0.09375rem] text-white strock'>0{curent}</p>
              <div className={`${styles.flexCenter} w-[6.46875rem] mt-6 h-[2.875rem] border-solid border-2 border-[#17181A] rounded-s-full rounded-e-full`}>
                  <img src={lefticon} alt="lefticon" onClick={slider} className='pr-4 cursor-pointer after:absolute after:right-0 border-r-solid border-r-[0.10rem] border-r-[#17181A]' />
                  <img src={lefticon} alt="lefticon" onClick={increment} className='pr-4 cursor-pointer rotate-180' />
              </div>
          </div>
          <Speedscooter />
          </>
  )
}

export default Hero