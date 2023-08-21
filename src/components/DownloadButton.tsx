import React from "react";

const Button = (props: { title; styles?; href; download? }) => {
  const { title, styles, href, download } = props;
  return (
    <a
      href={href}
      download={download}
      className={`dark:bg-orange bg-blue-600 font-poppins font-medium ${styles} w-[316px] h-14 px-6 bg-blue-600 rounded-[50px] justify-center items-center gap-1.5 inline-flex text-white dark:text-black`}
    >
      {title}
    </a>
  );
};

export default Button;
