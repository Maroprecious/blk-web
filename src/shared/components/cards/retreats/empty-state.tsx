type props = {
  text?: string;
};
export function EmptyRetreat({ text = "ongoing" }: props) {
  return (
    <div className="w-full lg:min-h-[488px] border border-gray-200 flex flex-col justify-center items-center gap-2">
      <div className="bg-[url('@assets/icons/empty.svg')] w-[202px] h-[162px] bg-contain bg-center bg-no-repeat" />
      <h2 className="font-amsterdam py-6 font-medium text-gray-900 text-[24px]">
        No {text} retreat
      </h2>
      <p className="font-arapey font-light text-[15px] mt-[-10px] text-gray-500">
        When you pay for a retreat, you it here.
      </p>
    </div>
  );
}
type emptyProps = {
  message: string;
  text: string;
};
export function Empty({ message, text }: emptyProps) {
  return (
    <div className="w-full lg:min-h-[488px] border border-gray-200 flex flex-col justify-center items-center gap-2">
      <div className="bg-[url('@assets/icons/empty.svg')] w-[202px] h-[162px] bg-contain bg-center bg-no-repeat" />
      <h2 className="font-amsterdam py-6 font-medium text-gray-900 text-[24px]">
        No {text}
      </h2>
      <p className="font-arapey font-light text-[15px] mt-[-10px] text-gray-500">
        {message}
      </p>
    </div>
  );
}
