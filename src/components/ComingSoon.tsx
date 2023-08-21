import React from 'react'
import styles from '../style'

const ComingSoon = ({ title, styles, href, download }) => {
  return (
    <div className={`${styles.flexCenter}`}>
        <a href={href} download = {download} className={`${styles} w-[316px] h-14 px-6 rounded-[50px] border border-2 border-dashed border-black dark:border-orange dark:text-orange justify-center items-center gap-1.5 inline-flex`}>
          {title}
        </a>
        <p className='w-[316px] text-center text-blue-600 text-[14px] font-normal align-items align-text-top ml-5'>Coming Soon</p>
    </div>
  )
}

export default ComingSoon