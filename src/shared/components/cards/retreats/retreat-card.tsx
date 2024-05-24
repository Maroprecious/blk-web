import { Button } from "@/components/ui/button";
import { randomColor } from "@/lib/utils";
import { FaRegClock } from "react-icons/fa6";
import people from "../../.././../assets/icons/people.svg";
import moment from "moment";
import { useNavigate } from "react-router-dom";

type Props = {
  items?: Array<string>;
  name: string;
  price: string;
  start: string;
  end: string;
  participants: string;
  image: string;
  id: number;
};

export default function RetreatCard({
  items,
  name,
  price,
  start,
  participants,
  end,
  image,
  id,
}: Props) {
  const navigate = useNavigate();
  return (
    <div className="w-auto lg:h-[504px] h-[404px] border border-gray-200 p-2 flex flex-col justify-center items-start">
      <div
        className="w-full p-2 flex flex-wrap gap-2 lg:h-[300px] h-[200px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        {items?.map((element) => {
          const { colorWithOpacity, colorWithoutOpacity } = randomColor(0.1);
          return (
            <div
              style={{ backgroundColor: colorWithOpacity }}
              className="p-2 w-fit h-fit flex justify-center items-center gap-2"
            >
              <div
                style={{ backgroundColor: colorWithoutOpacity }}
                className="w-[4px] h-[4px] rounded-full"
              />
              <p
                style={{ color: colorWithoutOpacity }}
                className="font-arapey font-light text-[14px]"
              >
                {element}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-full p-2">
        <h3 className="font-arapey text-gray-900 lg:text-[24px] text-[20px] font-medium">
          {/* Lavender <span className="italic">(Lavandula angustifolia)</span> */}
          {name}
        </h3>
        <h1 className="font-arapey text-primary font-bold text-[24px]">
          $ {price} USD
        </h1>
        <div className="w-full py-2 flex justify-start gap-[.7rem] items-start">
          <div className="flex items-center p-2 gap-[.3rem] justify-items-start bg-cream-300">
            <FaRegClock size={20} color="#CF956F" />
            <p className="text-clay-900 font-arapey text-[15px]">
              {moment(start).format("Do")} - {moment(end).format("Do")},{" "}
              {moment(end).year()}
            </p>
          </div>
          <div className="lg:flex hidden items-center p-2 gap-[.3rem] justify-items-start bg-cream-300">
            <img src={people} />
            <p className="text-clay-900 font-arapey text-[15px]">
              {participants.length}{" "}
              {`${participants.length < 2 ? "person" : "people"}`}
            </p>
          </div>
        </div>
        <Button className="w-full mt-4" onClick={() => navigate(`/retreats/${id}`)}>
          VIEW DETAILS
        </Button>
      </div>
    </div>
  );
}
