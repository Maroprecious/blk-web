import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

type BreadCrumbProps = {
  items: Array<{
    label: string;
    link: string;
  }>;
};
export default function BreadCrumb({ items }: BreadCrumbProps) {
  return (
    <div className="flex justify-start items-center py-8">
      {items.map((element, idx) => (
        <div key={idx} className="flex justify-start items-center">
          <Link
            to={element.link}
            className={`font-arapey text-[16px] font-light ${
              idx + 1 === items.length ? "text-primary" : "text-gray-400"
            }`}
          >
            {element.label}
          </Link>
          {idx + 1 !== items.length && (
            <span className="px-2">
              <IoIosArrowForward size={16} color="#98A2B3" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
