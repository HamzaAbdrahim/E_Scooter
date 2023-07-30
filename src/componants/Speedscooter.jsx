import {stats} from "../content/content"
import styles from "../style"

const Speedscooter = () => {
  return (
    <div className={`${styles.paddingx} ${styles.flexCenter} gap-[5rem] w-full flex-wrap `}>
      {stats.map(item => (
        <div key={item.id} className={`${styles.flexCenter} flex-col p-10 shadow-[0px_13.211169242858887px_26.422338485717773px_0px_rgba(0,0,0,0.06)] rounded-[0.41288rem] border-[0.661px] border-solid border-[#F4F4F4]`}>
          <div className={`flex items-end gap-4 mb-[1.12rem]`}>
          <p className="text-center text-[2.5rem] not-italic font-bold leading-[100%] font-Ubuntu text-primary -mb-1">{item.weight}</p>
          <p className="font-Ubuntu text-primary text-lg not-italic font-bold leading-[100%]">{item.whywight}</p>
          </div>
          <span className="font-Ubuntu text-primary  text-[0.8125rem] not-italic font-normal leading-[130%]">{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Speedscooter