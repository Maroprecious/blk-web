import dropdown from "@assets/icons/customerPanel/dropdown.svg";
const Filters = () => {
  return (
    <div className="flex border px-4 h-10 gap2 items-center">
      <p>Filters</p> <img src={dropdown} alt="Logo" className="" />
    </div>
  );
};

export default Filters;
