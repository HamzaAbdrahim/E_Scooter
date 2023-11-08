import styles from "../style"

const Subscribe = () => {
  return (
    <>
    <h2 className={`${styles.heading} animate__animated  animate__fadeInUpBig mb-[2.12rem]`}>Subscribe To Newsletter</h2>
    <p className={`${styles.pargraf} ${styles.paddingx} animate__animated  animate__fadeInUpBig `}>Subscribe to our newsletter to get amazing offers in future.</p>
    <div className={`${styles.flexitems} gap-5 mt-[3.69rem] flex-col md:flex-row animate__animated animate__zoomInRight`}>
        <input type="text" placeholder="Enter your email." className=" border-neutral-100 rounded-[0.625rem] w-[25rem] h-[5.0625rem] py-[1.70rem] pl-[2.37rem] text-xl not-italic font-normal leading-[140%] font-Ubuntu border-[1.5px] border-solid" />
        <input type="button" value="Get start" className={`${styles.flexCenter} text-[#FBFBFB] text-center text-xl not-italic font-normal leading-[140%] w-[12.25rem] h-[5.0625rem] bg-primary cursor-pointer rounded-[0.625rem]`} />
    </div>
    </>
  )
}

export default Subscribe