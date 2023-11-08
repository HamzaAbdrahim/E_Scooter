import styles from "../style"
import bigbgscoter from "../assets/bigbgscoter.svg"
import redcolor from "../assets/redcolor.svg"
import bluecolor from "../assets/bluecolor.png"
import blackcolor from "../assets/blackcolor.png"

import greencolor from "../assets/greencolor.png"



const Colors = () => {
  return (
    <>
    <h2 className={`${styles.heading} animate__animated animate__fadeInUpBig mb-[2.12rem]`}>Colors</h2>
    <p className={`${styles.pargraf} animate__animated animate__fadeInUpBig`}>Checkout our products colors.</p>
    <div className={`${styles.flexitems} animate__animated animate__fadeInTopLeft flex-col mt-20 lg:mt-28`}>
    <img src={bigbgscoter} className="-mb-20 mg:-mb-36 rounded-xl" alt="" />
    <div className={`${styles.flexCenter} ${styles.paddingx} w-full flex-wrap`}>
    <div className='relative cursor-pointer duration-500 hover:-translate-y-10'>
    <img src={redcolor} alt="scoterRed"  />
      <p className=' text-[rgba(255,255,255,0.60)] text-center text-[5rem] not-italic font-bold leading-[normal] absolute bottom-20 right-20'>01</p>
    </div>
    <div className='relative cursor-pointer duration-500 hover:-translate-y-10'>
    <img src={greencolor} alt="scotergreen"  />
      <p className=' text-[rgba(255,255,255,0.60)] text-center text-[5rem] not-italic font-bold leading-[normal] absolute bottom-20 right-20'>02</p>
    </div>
    <div className='relative cursor-pointer duration-500 hover:-translate-y-10'>
    <img src={bluecolor} alt="scoterblue" />
      <p className=' text-[rgba(255,255,255,0.60)] text-center text-[5rem] not-italic font-bold leading-[normal] absolute bottom-20 right-20'>03</p>
    </div>
    <div className='relative cursor-pointer duration-500 hover:-translate-y-10'>
    <img src={blackcolor} alt="scoterblack" />
      <p className=' text-[rgba(255,255,255,0.60)] text-center text-[5rem] not-italic font-bold leading-[normal] absolute bottom-20 right-16'>04</p>
    </div>
    </div>

    </div>

    </>
  )
}

export default Colors