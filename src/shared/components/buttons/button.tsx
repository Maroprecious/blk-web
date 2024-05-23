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
            ? "border border-[#946C3C] font-arapey w-full text-[#946C3C] h-[50px] text-[14px] font-normal"
            : variant === "solid"
            ? "bg-[#946C3C] h-[50px] font-arapey w-full text-[#FFF] text-[14px] font-normal"
            : ""
        }
      >
        {title}
      </button>
    </div>
  );
};
