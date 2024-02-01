import retreatParticipant from "../../assets/icons/retreatPartcp.svg";

function Cards() {
  return (
    <div className="p-6 bg-transparent border border-[#EAECF0] flex-1">
      <img
        src={retreatParticipant}
        alt="retreatParticipant Icon"
        className="mb-2"
      />
      <h3 className="font-recoleta text-[#101828] text-6xl py-3">$60</h3>
      <p className="text-[#667085] text-[20px]">No of retreat participants</p>
    </div>
  );
}

export default Cards;
