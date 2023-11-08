import packet from "../assets/packet.svg"
import imgfive from "../assets/imgfive.svg"
import { Shopping_Rack } from "../content/content"
import done from "../assets/done.svg"
import styles from "../style"
import Button from "./button"


const Shopping = () => {
  return (
    <>
    <div className={`${styles.flexBetween} xl:flex-row flex-col-reverse`}>
              <div className={` animate__animated  animate__slideInLeft ${styles.flexitems} mt-10 xl:mt-0 mr-auto xl:mr-0 flex-col md:flex-row gap-[4.19rem]`}>
                  <img src={imgfive} alt="imgfive" />
                  <img src={packet} alt="packet" />
              </div>
              <div className=" animate__animated  animate__fadeInRightBig xl:mr-[10.30rem] mr-auto ml-[3.13rem] xl:ml-0">
                  {Shopping_Rack.map((bag, index) => (
                      <div  key={index}>
                          <h3 className="text-[3.125rem] not-italic font-bold leading-[120%] font-Ubuntu text-primary mb-[2.06rem]">
                              {bag.title}
                          </h3>
                          <ul>
                              {bag.discrption.map((item, index) => (
                                  <li key={index} className={`${styles.flexitems} gap-[1.13rem] ${index === bag.discrption.length - 1 ? "" : "mb-[2.06rem]"}`}>
                                      <img src={done} alt="done" />
                                      <p className="text-primary font-Ubuntu text-xl not-italic font-normal leading-[140%">{item.title}</p>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}

              </div>
          </div>
          <div className={`${styles.flexCenter} mt-[4.63rem]`}>
        <Button text = "More Accessories Coming Soon" />
          </div>
                                      </>
  )
}

export default Shopping