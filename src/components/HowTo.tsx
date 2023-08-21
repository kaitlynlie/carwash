import React from 'react'
import styles, { layout } from '../style'
import { howto, first, second, third } from '../assets'

const HowTo = () => {
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionImg}`}>
          <img src={howto} alt='howto' className='w-[100%] h-[100%]' />
      </div>
      <div className={`${layout.sectionInfo} pl-10`}>
        <h4 className="text-black dark:text-white text-[32px] font-normal leading-10 font-poppins pt-1">
          How to install:
        </h4>
        <div className='flex pt-4'>
          <img src={first} alt='first' className='w-[55px] h-[55px]' />
          <ul className='list-disc sm:flex justify-between flex-col pl-10 pb-7'>
            <li className='font-poppins dark:text-white font-normal'>Install mobile app</li>
            <li className='font-poppins dark:text-white font-normal'>Install desktop app</li>
            <li className='font-poppins dark:text-white font-normal'>Scan desktop qr code to connect both</li>
          </ul>
        </div>
        <h4 className="text-black dark:text-white text-[32px] font-normal leading-10 font-poppins pt-1">
          How to add data:
        </h4>
        <div className='flex pt-4'>
          <img src={second} alt='second' className='w-[55px] h-[55px]' />
          <ul className='list-disc sm:flex justify-between flex-col pl-10 pb-9'>
            <li className='d'>Desktop add data, submit</li>
            <li className='font-poppins dark:text-white font-normal'>Data saved on cloud</li>
          </ul>
        </div>
        <h4 className="text-black dark:text-white text-[32px] font-normal leading-10 font-poppins pt-1">
          How to read data:
        </h4>
        <div className='flex pt-4'>
          <img src={third} alt='third' className='w-[55px] h-[55px]' />
          <ul className='list-disc sm:flex justify-between flex-col pl-10'>
            <li className='font-poppins dark:text-white font-normal'>Desktop click data</li>
            <li className='font-poppins dark:text-white font-normal'>Mobile unlock and allow (auth)</li>
            <li className='font-poppins dark:text-white font-normal'>Desktop receive and decrypted data</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HowTo