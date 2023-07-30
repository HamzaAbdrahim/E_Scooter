import React from 'react'
import styles from '../style'

const Button = (prop) => {
  return (
    <div className={`${styles.flexCenter} cursor-pointer w-[20rem] sm:w-[35.625rem] h-[5.875rem] rounded-[0.625rem] border-2 border-solid border-primary`}>
       <h3 className='text-center text-3xl not-italic font-bold leading-[120%] font-Ubuntu text-primary'>{prop.text}</h3>     
       </div>
  )
}

export default Button