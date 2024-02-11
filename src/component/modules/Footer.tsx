import Logo from './Logo';

const Footer = () => {
  // const { t } = useTranslation('common');
  return (
    <div className="bottom-0 mx-auto max-w-full bg-hoverTextColor">
      <footer className=" bg-hoverTextColor text-slate-200 lg:text-left">
        {/* <!-- Main container div: holds the entire content of the footer --> */}
        <div className=" text-center md:text-left">
          <div className=" grid  grid-cols-1 md:grid-cols-1 ">
            {/* <!-- Logo section --> */}
            <div className="flex items-center justify-center ">
              <h6 className=" flex items-center justify-center font-semibold uppercase md:justify-start">
                <Logo />
              </h6>
            </div>
          </div>
        </div>
        {/* <!--Copyright section--> */}
        <div className="flex items-center justify-center gap-4 bg-hoverTextColor text-center dark:bg-neutral-700">
          <span>© 2023 Copyright:</span>
          <span className="font-semibold text-greyColor ">BitsBytes</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
