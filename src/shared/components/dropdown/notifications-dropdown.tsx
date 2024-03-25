import box from "@assets/icons/box.svg";

export const Notifications = () => {
  const allNotifications = [
    {
      title: "Notification title",
      id: 1,
      message:
        "This is an example of a notification. Here you can find the notification about certain actions on your account.",
      date: "13 May 2023; 6:00PM",
    },
    {
      title: "Notification title",
      id: 2,
      message:
        "This is an example of a notification. Here you can find the notification about certain actions on your account.",
      date: "13 May 2023; 6:00PM",
    },
    {
      title: "Notification title",
      id: 3,
      message:
        "This is an example of a notification. Here you can find the notification about certain actions on your account.",
      date: "13 May 2023; 6:00PM",
    },
    {
      title: "Notification title",
      id: 4,
      message:
        "This is an example of a notification. Here you can find the notification about certain actions on your account.",
      date: "13 May 2023; 6:00PM",
    },
  ];
  return (
    <div className="bg-[#FFF] shadow-lg w-[444px] overflow-y-auto absolute top-[80px] border border-[1px] right-[2%]">
      <h3 className="font-maison text-[24px] px-6 tracking-wide py-4">
        Notifications (2)
      </h3>
      <div className="border-b border-b-[#EAECF0]" />
      <div className="overflow-auto">
        {allNotifications.map((ele) => (
          <>
            <div className="flex px-4 py-6 gap-[.7rem]" key={ele.id}>
              <div className=" bg-[#FAF6F3] w-[95px] h-[45px] flex items-center justify-center rounded-[50%]">
                <img
                  src={box}
                  style={{
                    objectFit: "contain",
                    width: "24px",
                    height: "24px",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div>
                <h6 className="text-[#101828]">{ele.title}</h6>
                <p className="text-[#344054] font-extralight text-[14px]">{ele.message}</p>
                <p className="text-gray-400 font-extralight text-[12px] pt-2">{ele.date}</p>
              </div>
            </div>
            <div className="border-b border-b-[#EAECF0]" />
          </>
        ))}
      </div>
    </div>
  );
};
