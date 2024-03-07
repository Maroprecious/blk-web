const ContactUs = () => {
  return (
    <div>
      {" "}
      {/* section */}
      <div className="px-4 w-full lg:px-0 max-w-[792px] mx-auto mt-[130px] flex flex-col gap-12">
        <div className="mt-[180px]">
          <h3 className="text-[40px] text-[#CF956F] lg:text-[64px] text-center font-medium font-amsterdam">
            Contact Us
          </h3>

          <form className="w-full grid items-center mb-[116px]">
            <div className="lg:grid grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label htmlFor="">First name</label>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
              <div>
                <label htmlFor="">Email address</label>
                <input
                  type="text"
                  placeholder="Your email address"
                  className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
              <div>
                <label htmlFor="">Preferred contact method </label>
                <input
                  type=""
                  placeholder="Your first name"
                  className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
              <div>
                <label htmlFor="">Your Last name</label>
                <input
                  type="text"
                  placeholder="Your Last name"
                  className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
              <div>
                <label htmlFor="">Phone number</label>
                <input
                  type="text"
                  placeholder="+1 000 – 0000 – 000"
                  className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
              <div>
                <label htmlFor="">Subject</label>
                <input
                  type="text"
                  placeholder="Your subject"
                  className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
            </div>
            <div>
              {" "}
              <label htmlFor="">Message</label>
              <input
                type="text"
                placeholder="Your subject"
                className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3 pb-6"
              />
            </div>
            <button className="bg-[#946C3C] uppercase text-white w-full max-w-[468px] py-4 mx-auto mt-[33px] ">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
