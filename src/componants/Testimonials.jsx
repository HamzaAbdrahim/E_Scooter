import styles from "../style"
import {testimonials} from "../content/content"
import arrow from "../assets/arrow.png"

const Testimonials = () => {
  return (
    <>
    <h1 className={`${styles.heading} mb-[2.56rem]`}>Testimonials</h1>
    <div className={`mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 `}>
        {testimonials.map(clints => (
            <div key={clints.id} className={`cursor-pointer duration-500 hover:-translate-y-10 m-auto flex-col ${styles.flexCenter} px-6 text-center w-[23rem] h-[22.875rem] bg-whity shadow-[0px_1.8518518209457397px_3.1481480598449707px_0px_rgba(49,49,49,0.02),0px_20px_13px_0px_rgba(49,49,49,0.05),0px_38.51852035522461px_25.481481552124023px_0px_rgba(49,49,49,0.06)]`}>
                <img src={clints.icon} alt="" />
                <p className="font-Ubuntu text-primary text-center text-xl not-italic font-normal mt-[0.73rem] mb-12 leading-[140%]">{clints.content}</p>
                <div className={`${styles.flexCenter} gap-5`}>
                    <img src={clints.clintsimg} alt="clintsimg" />
                    <span className="text-base not-italic font-medium leading-[normal] text-primary font-Ubuntu">{clints.name} <span className="block text-sm not-italic font-normal ">{clints.jobtitle}</span></span>
                </div>

            </div>
        ))}
    </div>
        <div className={`${styles.flexCenter} gap-8 mb-[5.12rem] mt-[2.69rem] left-1/2 top-1/2 `}>
          <div className={` w-[4rem] duration-500 hover:-translate-y-1  h-[4rem] cursor-pointer ${styles.flexCenter} rounded-full border-solid border-2 border-primary`}>
            <img src={arrow} alt="arrow-left" />
          </div>
          <div className={` w-[4rem] duration-500 hover:-translate-y-1 h-[4rem] cursor-pointer ${styles.flexCenter} rounded-full border-solid border-2 border-primary`}>
          <img src={arrow} alt="arrow-right" className="rotate-180" />
          </div>
        </div>
    </>
  )
}

export default Testimonials