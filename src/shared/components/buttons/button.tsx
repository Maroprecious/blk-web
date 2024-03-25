type props = {
  variant: "outline" | "solid";
  title: string;
  onClick: () => void;
};
export const Button = ({ variant, title, onClick }: props) => {
  return (
    <div style={{ width: "100%" }}>
      <button
        onClick={onClick}
        className={
          variant === "outline"
            ? "border border-[#946C3C] w-full text-[#946C3C] h-[53px] text-[15px] font-normal"
            : variant === "solid"
            ? "bg-[#946C3C] h-[53px] w-full text-[#FFF] text-[15px] font-normal"
            : ""
        }
      >
        {title}
      </button>
    </div>
  );
};
