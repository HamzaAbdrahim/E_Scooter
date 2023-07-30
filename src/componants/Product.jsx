import { Benfits } from '../content/content'
import styles from '../style'
import done from "../assets/done.svg"
import Productimg from "../assets/Productimg.svg"

const Product = () => {
  return (
    <div className={`${styles.paddingY}`}>
        <h1 className='text-primary text-center font-Ubuntu text-[3.125rem] not-italic font-bold leading-[120%] mb-[2.12rem]'>Product Information</h1>
        <p className='text-primary text-center font-Ubuntu text-xl not-italic font-normal leading-[140%]'>Our Scooter has following unique design and technology features:</p>
        <div className={`${styles.flexBetween} mt-4  w-full flex-wrap `}>
        <img src={Productimg} alt="Productimg" className=' my-5 sm:my-0' />
        <div className='flex flex-col gap-[2.12rem]'>
        {Benfits[0].map((item , index) => (
            <div key={index} className={`${styles.flexitems}`}>
                <img src={done} alt="done" className='mr-[1.12rem]' />
                <h2 className='text-primary font-Ubuntu text-xl not-italic font-normal leading-[140%]'>{item.Benfit}</h2>
                </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Product