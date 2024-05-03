import { randomColor } from "@/lib/utils";
import { HiDotsVertical } from "react-icons/hi";

export const PurchaseRecords = ({width = '85%'}: {width: string}) => {
  return (
    <div className="pt-8" style={{width: width}}>
      <table
        style={{
          width: "95%",
          margin: "auto",
          textAlign: "justify",
        }}
      >
        <thead
          className="bg-[#F9FAFB] h-[56px] border-b border-b-gray-200"
          style={{ padding: "10px" }}
        >
          <th className="font-normal text-[15px] text-gray-500">
            Product name
          </th>
          <th className="font-normal text-[15px] text-gray-500">
            Order number
          </th>
          <th className="font-normal text-[15px] text-gray-500">
            Date of purchase
          </th>
          <th className="font-normal text-[15px] text-gray-500">Price</th>
          <th className="font-normal text-[15px] text-gray-500">Category</th>
          <th className="font-normal text-[15px] text-gray-500">Status</th>
          <th className="font-normal text-[15px] text-gray-500">Action</th>
        </thead>
        <tbody style={{ paddingTop: "3rem" }}>
          {Array(6)
            .fill("_")
            .map((ele) => (
              <tr className="border-b border-b-gray-200 pt-8 h-[90px] my-auto">
                {" "}
                <td className="flex mr-[-4rem] gap-4 items-center mt-[.7rem]">
                  <div
                    className="w-[82px] p-2 flex rounded-[.3rem] flex-wrap gap-2 h-[67px] bg-[#000] bg-cover bg-center bg-no-repeat"
                    // style={{ backgroundImage: `url(${image})` }}
                  />
                  <p className="text-[15px] text-gray-900">
                    Grains of paradise
                  </p>
                </td>
                <td className="text-[15px] text-gray-900">BRR-42940</td>
                <td className="text-[15px] text-gray-900">21/12/2023</td>
                <td className="text-[15px] text-gray-900"> $68,460</td>
                <td className="text-[15px] text-gray-900">Spirit healing</td>
                <td className="text-[15px] text-gray-900">
                  {Array(1)
                    .fill("-")
                    ?.map((element) => {
                      const { colorWithOpacity, colorWithoutOpacity } =
                        randomColor(0.1);
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
                            className="font-maison font-light text-[14px]"
                          >
                            Accepted
                          </p>
                        </div>
                      );
                    })}
                </td>
                <td>
                  <HiDotsVertical />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
