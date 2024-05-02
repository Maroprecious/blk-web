import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import days from "@assets/icons/days.svg";
import { FaChevronRight } from "react-icons/fa6";
// url to a valid topojson file
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
const Map = () => {
  return (
    <div
      className="border border-[#EAECF0] "
      style={{ width: "100%", height: "auto" }}
    >
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 160,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#FAF6F3"
                stroke="#CF956F"
                strokeWidth={0.5}
                strokeOpacity={10}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      <section className="px-6 flex  gap-4">
        <div className="w-[207px] border flex justify-between items-center pr-3 pl-2 border-[#EAECF0]">
          <div>
            <p>Tranquil Forest Retreat, Pacific Northwest</p>
            <div className="text-[#CF956F] flex bg-[#FAF6F3] py-2 my-2  justify-start items-start w-[95px] gap-2">
              <img src={days} alt="" />5 days
            </div>
          </div>
          <FaChevronRight />
        </div>
        <div className="w-[207px] border flex justify-between items-center pr-3 pl-2 border-[#EAECF0]">
          <div>
            <p>Tranquil Forest Retreat, Pacific Northwest</p>
            <div className="text-[#CF956F] flex bg-[#FAF6F3] py-2 my-2  justify-start items-start w-[95px] gap-2">
              <img src={days} alt="" />5 days
            </div>
          </div>
          <FaChevronRight />
        </div>
      </section>
    </div>
  );
};

export default Map;
