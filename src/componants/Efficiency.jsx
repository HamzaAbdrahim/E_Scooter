import styles from "../style"
import Efficiencyimg from "../assets/Efficiencyimg.jpg"

const Efficiency = () => {
  return (
    <div className={`${styles.flexCenter} flex-col w-full flex-wrap`}>
        <h1 className={`${styles.heading} mb-[2.12rem]`}>High Efficiency Motor</h1>
        <p  className={`${styles.pargraf}`}>More torque for powerful riding with 22% maximum hill climbing capability.</p>
        <img src={Efficiencyimg} alt="Efficiencyimg" className="w-[88rem] h-[27.5rem] md:h-[49.5rem] object-contain lightgray 50% / cover no-repeat" />
    </div>
  )
}

export default Efficiency