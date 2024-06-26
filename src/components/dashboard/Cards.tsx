import retreatParticipant from "../../assets/icons/retreatPartcp.svg";

function Cards() {
  return (
    <div className="p-6 border border-[#EAECF0] flex-1">
      <div className="bg-[#FAF6F3] w-8 mb-2  h-8 rounded-full">
        <img src={retreatParticipant} alt="retreatParticipant Icon" />
      </div>
      <h3 className="font-arapey text-[#101828] text-6xl py-3">$60</h3>
      <p className="text-[#667085] text-[20px]">No of retreat participants</p>
    </div>
  );
}

export default Cards;
