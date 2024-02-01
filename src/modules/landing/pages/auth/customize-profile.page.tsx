import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { AuthLayout } from "@/shared/components/layout/auth.layout";
import { useCallback, useState } from "react";
import { FiCamera } from "react-icons/fi";

export default function CustomizeProfilePage() {
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleUploadImage = useCallback(() => {
    const doc = document.createElement("input");
    doc.type = "file";
    doc.accept = "image/*";
    doc.onchange = (ev: any) =>
      setImageUrl(URL.createObjectURL(ev.target.files[0]));
    doc.hidden = true;
    doc.click();
  }, [setImageUrl]);

  return (
    <AuthLayout>
      <div className="w-full pt-20 lg:pb-[23em] flex justify-center items-center">
        <div className="w-[38%] max-w-[1440px]">
          <h1 className="font-recoleta pb-6 font-medium text-[32px]">
            Customise your profile
          </h1>
          <div>
            <div
              onClick={handleUploadImage}
              style={
                imageUrl
                  ? {
                      backgroundImage: `url('${imageUrl}')`,
                    }
                  : {}
              }
              className="w-[114px] bg-center bg-cover bg-no-repeat cursor-pointer h-[114px] rounded-full flex justify-center items-center bg-sage-200 mb-4"
            >
              <FiCamera size={40} strokeWidth={1} color="#000" />
            </div>
            <Input label="Last name" placeholder="Your last name" />
            <Input label="First name" placeholder="Your first name" />
            <Input
              label="Birthday"
              placeholder="DD/MM/YYYY"
              onFocus={(e) => (e.currentTarget.type = "date")}
            />
            <Select
              label="Location (Continent)"
              options={[
                {
                  label: "Lagos",
                  value: "Lagos",
                },
                {
                  label: "Abuja",
                  value: "Abuja",
                },
              ]}
            />
            <Button className="w-full h-[56px] text-[16px]">SIGN UP</Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
