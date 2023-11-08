import styles from "../style"
import piceone from "../assets/piceone.svg"
import parts from "../assets/parts.png"
import picethree from "../assets/picethree.svg"
import Button from './button'


const Gallery = () => {
  return (
    <>
    <h2 className={`${styles.heading} animate__animated  animate__fadeInUpBig mb-[2.12rem]`}>Gallery</h2>
    <p className={`${styles.pargraf} animate__animated  animate__fadeInUpBig`}>View gallery of our products and make yourself satisfied with our creation.</p>
    <div className='grid grid-cols-1 xl:grid-cols-2 mt-28 animate__animated  animate__fadeInUpBig'>
        <div className='mt-40 mb-10 xl:mb-0'>
        <div className='relative'>
            <img src={picethree} className='mb-6 relative ' alt="" />
            <p className='text-3xl not-italic font-bold leading-[normal] font-Ubuntu text-primary absolute top-[1.88rem] left-[2.38rem]'>Scooter</p>
            </div>
            <div className='flex flex-col  gap-[1.69rem] mt-[3.44rem]'>
            <Button text = "Battery Images "/>
            <Button text = "Spare Parts Images"/>
            <Button text = "Charging Cable Images"/>
            </div>
        </div>
        <div className='ml-auto '>
            <div className='relative'>
            <img src={piceone} className='mb-6 relative ' alt="" />
            <p className='text-3xl not-italic font-bold leading-[normal] font-Ubuntu text-primary absolute md:top-[1.88rem] bottom-[1.88rem] left-[2.38rem]'>Built Quality</p>
            </div>
            <div className='relative'>
            <img src={parts} className='mb-6 relative ' alt="" />
            <p className='text-3xl not-italic font-bold leading-[normal] font-Ubuntu text-primary absolute top-[1.88rem] left-[2.38rem]'>Parts</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Gallery