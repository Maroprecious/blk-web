import emptyState from "@assets/images/customerPanel/EmptyStateIllustrations.svg";

const RetreatEmptyState = () => {
  return (
    <div className="h-[476px] w-[326px] mt-4 border border-[#EAECF0] flex justify-center items-center">
      <div className="h-[267px] w-[250px]  flex flex-col items-center justify-center">
        <img src={emptyState} alt="Empty state illustration " />
        <h3 className="text-2xl font-amsterdam text-center">
          No ongoing retreat
        </h3>
        <p className="text-[#667085] text-center mt-6 text-base">
          When you pay for a retreat, you it here.
        </p>
      </div>
    </div>
  );
};

export default RetreatEmptyState;
