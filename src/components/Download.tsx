import styles, {layout } from "../style";
import DownloadButton from "./DownloadButton";

const Download = () => (
  <section className={`${styles.flexStart} ${styles.paddingY} flex-col mt-20`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-4 w-full`}>
      <h1 className={`${styles.heading2} text-center dark:text-white`}>
        Download to discover our product
      </h1>
    </div>

    <div className={`${layout.sectionInfo} flex flex-center`} >
    <p className='mt-11 text-[18px] dark:text-white'>Desktop version:</p>
    <div className={`mb-1 flex md:flex-row flex-col`}>
        <DownloadButton styles='mt-1 text-[16px]' title='MacOS Intel v{macos_intel_version}' href='{macos_intel_url}'/>
        <DownloadButton styles='mt-2 text-[16px] md:ml-5' title='MacOS M1 v{macos_intel_version}' href='{macos_m1_url}'/>
        <DownloadButton styles='mt-2 text-[16px] md:ml-5' title='Chrome v{chrome_version}' href='{chrome_ext}'/> 
    </div>
      <p className='mt-10 text-[18px] dark:text-white'>Mobile version:</p>
      <div className={`mb-1 flex md:flex-row flex-col`}>
        <DownloadButton styles='mt-2 text-[16px]' title='Apple Store v{ios_version}' href='{ios_url}'/>
        <DownloadButton styles='mt-2 text-[16px] md:ml-5' title='Google Store v{0.7.0}' href='{android_url}'/>
      </div>
  </div>

    </section>
)

export default Download
