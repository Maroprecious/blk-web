const Footer = () => {
  return (
    <footer className="bg-[#946C3C] w-full pt-10 lg:px-[120px] pb-9 mt-[102px]">
      <div className="px-4 ">
        <h2 className="text-[#E6E5DE] font-medium font-arapey text-[40px] sm:text-[60px] lg:text-[80px] screen:text-[123.341px]">
          Back rooted retreats
        </h2>
        <div className="lg:flex justify-between">
          <div className="my-8 lg:mt-0 flex flex-col lg:block">
            <a
              href="/about"
              className="text-[14px] font-bold text-[#E6E5DE] lg:mt-0 font-arapey pr-4"
            >
              ABOUT
            </a>
            <a
              href="/herbalpeadia"
              className="text-[14px] text-[#E6E5DE] font-arapey mt-3 lg:mt-0 lg:border-l lg:px-4"
            >
              HERBALPEDIA
            </a>
            <a
              href="/retreatCalendar"
              className="text-[14px] text-[#E6E5DE] font-arapey mt-3 lg:mt-0 lg:border-l lg:px-4"
            >
              RETREATS CALENDAR
            </a>
            <a
              href="/store"
              className="text-[14px] text-[#E6E5DE] font-arapey mt-3 lg:mt-0 lg:border-l lg:px-4"
            >
              STORE
            </a>
            <a
              href=""
              className="text-[14px] text-[#E6E5DE] font-arapey mt-3 lg:mt-0 lg:border-l lg:px-4"
            >
              TERMS AND CONDITIONS
            </a>
            <a
              href=""
              className="text-[14px] text-[#E6E5DE] font-arapey mt-3 lg:mt-0 lg:border-l lg:px-4"
            >
              PRIVACY POLICY
            </a>
          </div>
          <div className="flex mt-1 gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#E6E5DE] font-arapey "
            >
              INSTAGRAM
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#E6E5DE] font-arapey "
            >
              TWITTER
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#E6E5DE] font-arapey "
            >
              FACEBOOK
            </a>
          </div>
        </div>
        <a href="mail:hello@backrootedreteats.com" className="text-[#E6E5DE] font-arapey">
          hello@backrootedreteats.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
