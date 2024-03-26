import scheduleImg from "@assets/images/schduleImg.svg";
import scheduleImg2 from "@assets/images/schduleImg2.svg";
import scheduleImg3 from "@assets/images/schduleImg3.svg";
import scheduleImg4 from "@assets/images/schduleImg4.svg";
import scheduleImg5 from "@assets/images/schduleImg5.svg";
const Itenary = () => {
  const schedule = [
    {
      img: scheduleImg,
      preview:
        " The day begins with a warm welcome as participants arrive andcheck in. A serene sunset yoga session sets the tone, followed by a delightful welcome dinner to foster connections.",
    },
    {
      img: scheduleImg2,
      preview:
        " The day begins with a warm welcome as participants arrive andcheck in. A serene sunset yoga session sets the tone, followed by a delightful welcome dinner to foster connections.",
    },
    {
      img: scheduleImg3,
      preview:
        " The day begins with a warm welcome as participants arrive andcheck in. A serene sunset yoga session sets the tone, followed by a delightful welcome dinner to foster connections.",
    },
    {
      img: scheduleImg4,
      preview:
        " The day begins with a warm welcome as participants arrive andcheck in. A serene sunset yoga session sets the tone, followed by a delightful welcome dinner to foster connections.",
    },
    {
      img: scheduleImg5,
      preview:
        " The day begins with a warm welcome as participants arrive andcheck in. A serene sunset yoga session sets the tone, followed by a delightful welcome dinner to foster connections.",
    },
  ];
  return (
    <div>
      {schedule.map((items, index) => {
        return (
          <div className="flex lg:gap-[56px]  items-center mb-20">
            <img
              src={items.img}
              className={`${index % 2 === 1 ? "order-2" : "order-1"}`}
            />{" "}
            <p
              className={`lg:text-2xl ${
                index % 2 === 1 ? "order-1" : "order-2"
              }`}
            >
              {items.preview}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Itenary;
