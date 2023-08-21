import React from "react";
import styles, { layout } from "../style";
import header from "../assets/header.png";
import Button from "./Button";

const Header = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h4 className="font-semibold xs:text-[40px] text-[44px] xs:leading-[53px] leading-[43px] text-primary dark:text-white">
        Free security tool <br /> to protect your personal data
      </h4>
      <div className="w-4 h-24 px-2.5 justify-center items-center gap-2.5 inline-flex border-violet-200 dark:border-orange" />
      <div className="w-[422px] h-[193px] relative">
        <div className="left-0 top-0 absolute justify-start items-center gap-4 inline-flex">
          <div className="w-4 h-4 p-2.5 rounded-[36px] border border-violet-700 dark:border-orange justify-center items-center gap-2.5 inline-flex">
            <div className="w-2 h-2 bg-violet-700 dark:bg-orange rounded-full absolute" />
            <div
              style={{
                width: 16,
                height: 196,
                paddingLeft: 10,
                paddingRight: 10,
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 0,
                  alignSelf: "stretch",
                  border: "0.50px #D2DCF4 solid",
                  marginTop: 120,
                }}
              ></div>
            </div>
          </div>
          <p className="text-slate-900 text-[18px] font-medium dark:text-white">
            Download mobile
          </p>
        </div>

        <div className="w-4 h-24 px-2.5 left-0 top-[24px] absolute justify-center items-center gap-2.5 inline-flex" />
        <div className="left-0 top-[119px] absolute justify-start items-center gap-4 inline-flex">
          <div className="w-4 h-4 p-2.5 rounded-[36px] border border-violet-700 dark:border-orange justify-center items-center gap-2.5 flex" />
          <p className="text-slate-900 text-[18px] font-medium dark:text-white">
            Download desktop
          </p>
        </div>
        <div className="h-[42px] left-[32px] top-[32px] absolute justify-center items-center inline-flex">
          <Button title="Apple Store v{ios_version}" href="{ios_url}" />
        </div>
        <div className="h-[26px] left-[32px] top-[161px] absolute justify-center items-center inline-flex">
          <Button
            className="text-white text-[16px] font-medium"
            title="MacOS Intel v{macos_intel_version}"
            href="{macos_intel_url}"
          />
        </div>
        <div className="h-[26px] sm:left-[241px] left-[32px] sm:top-[161px] top-[210px] absolute justify-center items-center inline-flex">
          <Button
            className="text-white text-[16px] font-medium"
            title="MacOS M1 v{macos_intel_version}"
            href="{macos_m1_url}"
          />
        </div>
      </div>
    </div>
    <div className={layout.sectionImg}>
      <img
        src={header}
        alt="header"
        className="w-[100%] h-[100%] pt-12 sm:pt-0"
      />
    </div>
  </section>
);

export default Header;
