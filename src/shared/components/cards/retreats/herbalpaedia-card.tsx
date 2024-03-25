import { Button } from "@/components/ui/button";

export default function HerbalpaediaCard() {
  return (
    <div className="w-full h-[504px] h-fit border border-gray-200 p-2 flex flex-col justify-center items-start">
      <div className="w-full h-[300px] bg-[url('@assets/images/herbs-bg.png')] bg-cover bg-center bg-no-repeat" />
      <div className="w-full p-2">
        <h3 className="font-maison text-gray-900 text-[24px] font-medium">
          Grains of paradise{" "}
          <span className="italic">(Aframomum melegueta)</span>
        </h3>
        <div className="w-full py-2 flex flex-wrap justify-start items-center gap-2">
          {["Spiritual use", "Medicinal use", "Side effects"].map((element) => (
            <div
              key={element}
              className="px-4 py-2 bg-cream-300 flex justify-center items-center gap-2"
            >
              <div className="w-[5px] h-[5px] bg-clay-900 rounded-full" />
              <p className="text-clay-900 font-maison text-regular text-[16px]">
                {element}
              </p>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4">READ</Button>
      </div>
    </div>
  );
}
