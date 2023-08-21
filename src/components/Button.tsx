import clsx from "clsx";

const Button = (props: {
  title: string;
  styles?;
  href: string;
  download?;
  className?: string;
}) => {
  const { title, href, download, className } = props;
  return (
    <a
      href={href}
      download={download}
      className={clsx(
        className,
        `bg-blue-600 dark:bg-orange dark:text-black font-poppins font-medium w-[193px] h-[42px] px-6 bg-blue-600 rounded-[50px] justify-center items-center gap-1.5 inline-flex text-white`
      )}
    >
      {title}
    </a>
  );
};

export default Button;
