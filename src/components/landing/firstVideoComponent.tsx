import mainVideo from "@assets/video/brw-video.mp4";

const FirstVideoComponent = () => {
  return (
    <div className="relative mt-[28px]">
      <video height="558px" className="w-full h-auto" autoPlay loop>
        <source src={mainVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-black opacity-100"></div>
    </div>
  );
};

export default FirstVideoComponent;