import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type props = {
  name: string;
  sciName: string;
  id: number;
  image: string;
};
export default function HerbalpaediaCard({ name, sciName, id, image }: props) {
  const navigate = useNavigate();
  return (
    <div className="lg:w-[300px] w-auto lg:h-[504px] h-[404px] border border-gray-200 p-2 flex flex-col justify-center items-start">
      <div
        className="w-full lg:h-[300px] h-[220px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="w-full p-2">
        <h3 className="font-arapey text-gray-900 lg:text-[24px] text-[20px] font-medium">
          {name}
          <span className="font-arapey"> ({sciName})</span>
        </h3>
        <div className="w-full py-2 hidden lg:flex lg:flex-wrap lg:justify-start lg:items-center gap-2">
          {["Spiritual use", "Medicinal use", "Side effects"].map((element) => (
            <div
              key={element}
              className="px-4 py-2 bg-cream-300 flex justify-center items-center gap-2"
            >
              <div className="w-[5px] h-[5px] bg-clay-900 rounded-full" />
              <p className="text-clay-900 font-arapey text-regular text-[16px]">
                {element}
              </p>
            </div>
          ))}
        </div>
        <Button
          className="w-full mt-4"
          onClick={() => navigate(`/herbalpaedia/${id}`)}
        >
          READ
        </Button>
      </div>
    </div>
  );
}
