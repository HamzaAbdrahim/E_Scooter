import done from "../assets/done.svg"
import {Golf_Bag} from "../content/content"
import Accessoriesimg from "../assets/Accessoriesimg.png"
import scoterbag from "../assets/scoterbag.png"
import styles from "../style"
const Accessories_shoping = () => {
  return (
    <>
    <div>
    <h1 className={`${styles.heading} animate__animated animate__zoomIn   mb-[2.12rem]`}>Multiple Accessories</h1>
    <p  className={`${styles.pargraf} animate__animated animate__zoomIn `}>There are multiple modes for the scooter for your multiple needs.</p>
      </div>
      <div className={`${styles.flexBetween} ${styles.paddingY} w-full flex-wrap `}>
              <div className=" animate__animated  animate__slideInLeft">
                  {Golf_Bag.map((bag,index) => (
                      <div  key={index}>
                          <h3 className="text-[3.125rem] not-italic font-bold leading-[120%] font-Ubuntu text-primary mb-[2.06rem]">
                              {bag.title}
                          </h3>
                          <ul>
                              {bag.discrption.map((item, index) => (
                                  <li key={item.id} className={`${styles.flexitems} gap-[1.13rem] ${index === bag.discrption.length - 1 ? "" : "mb-[2.06rem]"}`}>
                                      <img src={done} alt="done" />
                                      <p className="text-primary font-Ubuntu text-xl not-italic font-normal leading-[140%">{item.title}</p>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}

              </div>
              <div className={`${styles.flexitems} mt-10 xl:mt-0 flex-col md:flex-row  animate__animated  animate__slideInRigh`}>
                  <img src={Accessoriesimg} className="" alt="Accessoriesimg" />
                  <img src={scoterbag} className="" alt="scoterbag" />
              </div>
          </div>
          </>
  )
}

export default Accessories_shoping