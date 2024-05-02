import uploadImage from "@assets/images/upload.svg";
import { useState, useRef } from "react";

function ImageUpload() {
  const [image, setImage] = useState<any>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img: any = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob: any) => {
            const file: any = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            // console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = (file: File) => {
    const formdata = new FormData();
    formdata.append("file", file);
  };
  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };

  return (
    <div className=" max-w-[952px]">
      <div
        className={`w-full  ${
          image ? "h-[456px]" : "h-[198px]"
        }  relative  p-6 mt-6   border border-dashed border-[#946C3C] bg-[#FAF6F3] `}
      >
        <div
          onClick={handleClick}
          style={{ cursor: "pointer" }}
          className={`${image && "absolute"}  w-full top-0 left-0 `}
        >
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="upload image"
              className="img-display-after h-[456px] w-full"
            />
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
          {!image && (
            <div
              className="cursor-pointer flex flex-col items-center justify-center gap-2"
              onClick={() => {
                handleUploadButtonClick;
                handleClick;
              }}
            >
              <img src={uploadImage} alt="upload Image" />
              <p className="text-base mb-2 font-bold text-center">
                {" "}
                Drop your image here, or browse
                <span className="block text-[#CF956F] text-sm font-normal">
                  {" "}
                  Supports: JPG, JPEG2000, PNG
                </span>{" "}
              </p>
            </div>
          )}
        </div>
      </div>
      {/***************** Or upload from the web *****************/}
    </div>
  );
}

export default ImageUpload;
