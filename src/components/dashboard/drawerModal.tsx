// import React from "react";
// import ImageUpload from "@/components/ui/UploadThumbnail";
// const DrawerModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
//   isOpen,
//   onClose,
// }) => {
//   return (
//     <>
//       <div
//         className={`fixed inset-0 z-50 bg-black bg-opacity-50 h-full flex justify-end transition-opacity ${
//           isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         } `}
//         onClick={onClose}
//       >
//         <div
//           className={`w-[456px] relative bg-white h-full shadow-lg transform transition-transform ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           } px-6 pt-10 pb-80 overflow-y-auto h-full`}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <h5 className="font-amsterdam text-[24px] text-[#946C3C] font-medium">
//             Add new product
//           </h5>
//           <p className="mt-6">Enter the product details to start selling.</p>
//           <form
//             // onSubmit={handleAddProducts}
//             className="w-full  font-arapey"
//           >
//             <div className="lg:grid gap-x-6 gap-y-4">
//               <div className="mt-6">
//                 <label className="font-light text-[#101828]">
//                   Name of product
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter name of Product"
//                   className="border w-full mt-2 bg-transparent block  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
//                   // onChange={(e) => handleChange(e)}
//                   // value={formData.name}
//                   name="name"
//                   required
//                 />
//               </div>
//               <div className="mt-3">
//                 <label className="font-light text-[#101828]">
//                   Price of product
//                 </label>
//                 <div className="relative">
//                   <p className="absolute font-arapey px-2 font-light flex items-center  text-[#667085] top-[12px]">
//                     USD ($)
//                     <div className="bg-[#EAECF0] h-4 w-[1px] ml-2"></div>
//                   </p>
//                   <input
//                     type="text"
//                     placeholder="0.00"
//                     className="border w-full mt-2 bg-transparent block pl-[80px]  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
//                     // value={formData.price}
//                     name="price"
//                     // onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className="mt-3">
//                 <label className="font-light text-[#101828]">
//                   Quantity of product
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter quantity"
//                   className="border w-full mt-2 bg-transparent block  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
//                   // onChange={handleChange}
//                   // value={formData.quantity}
//                   name="quantity"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="">Country</label>
//                 <select
//                   value="–Select country–"
//                   className="border w-full mt-2 outline-none pr-10 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
//                 >
//                   <option value="" className="">
//                     -Select Country-
//                   </option>
//                 </select>
//               </div>
//               <ImageUpload />
//             </div>
//           </form>
//           <div className=" mt-10 bg-white p-6 flex gap-4 border-t border-[#EAECF0]  bottom-0 w-full left-0">
//             <button className="border border-[#946C3C] h-12 text-[#946C3C] uppercase flex-1">
//               cancel
//             </button>
//             <button
//               type="submit"
//               className="border border-[#946C3C] h-12 uppercase bg-[#946C3C] text-white flex-1"
//             >
//               add product
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DrawerModal;

// FileUpload.js
// import { useCallback, useState } from "react";
// import FirebaseService from "@/utils/firebase.service";
// import { addProductPayload } from "@/utils/types";
// import { useAddProduct } from "@/api/mutations";
// const FileUpload = () => {
//   // const postData: addProductPayload = {
//   //   name: "string",
//   //   desc: "string",
//   //   price: 90,
//   //   quantity: 9,
//   //   categoryId: "string",
//   //   images: [],
//   // };
//   const [product, setProduct] = useState<addProductPayload>({
//     name: "",
//     desc: "",
//     price: 0,
//     quantity: 0,
//     categoryId: 0,
//     images: [],
//   });
//   const [localImages, setLocalImages] = useState<string[]>([]);
//   const [uploading, setUploading] = useState<boolean>(false);
//   const addProduct = useAddProduct();
//   const handleDrop = useCallback(async (event: any) => {
//     event.preventDefault();
//     const files = event.dataTransfer.files;
//     handleFiles(files);
//   }, []);

//   const handleFiles = async (files: FileList) => {
//     // [...files].forEach(uploadFile);
//     setUploading(true);
//     const uploadPromises = [...files].map(uploadFile);
//     await Promise.all(uploadPromises);
//     setUploading(false);
//   };

//   const uploadFile = async (file: File) => {
//     const path = `uploads/${file.name}`;
//     const localUrl = URL.createObjectURL(file);
//     setLocalImages(prev => [...prev, localUrl]);
//     try {
//       const url: string = await FirebaseService.uploadFile(path, file);
//       console.log('File available at', url);
//       setProduct(prevProduct => ({
//         ...prevProduct,
//         images: [...prevProduct.images, url],
//       }));
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };
//   const handleImageRemove = (index: number) => {
//     setLocalImages(prev => prev.filter((_, i) => i !== index));
//     setProduct(prevProduct => ({
//       ...prevProduct,
//       images: prevProduct.images.filter((_, i) => i !== index),
//     }));
//   };

//   // const sendFileUrlToEndpoint = async () => {
//   //   addProduct.mutate(product, {
//   //     onSuccess: (data) => {
//   //       console.log("Payment Intent created:", data);
//   //       console.log("success");
//   //     },
//   //     onError: (error) => {
//   //       console.log(error, "error");
//   //     },
//   //   });
//   const sendFileUrlToEndpoint = async () => {
//     try {
//       const response = await fetch('/api/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(product),
//       });
//       const result = await response.json();
//       console.log('Server response:', result);
//     } catch (error) {
//       console.error('Error sending product data to endpoint:', error);
//     }
//   };
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//       const { name, value } = event.target;
//       setProduct(prevProduct => ({
//         ...prevProduct,
//         [name]: name === 'price' || name === 'quantity' || name === 'categoryId' ? Number(value) : value,
//       }));
//     };

//     const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       if (event.target.files) {
//         handleFiles(event.target.files);
//       }
//     };

//     const handleSubmit = (event: React.FormEvent) => {
//       event.preventDefault();
//       if (!uploading) {
//         sendFileUrlToEndpoint();
//       }
//     };
//     // try {
//     //   const response = await fetch("/api/endpoint", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({ fileUrl: url }),
//     //   });
//     //   const result = await response.json();
//     //   console.log("Server response:", result);
//     // } catch (error) {
//     //   console.error("Error sending file URL to endpoint:", error);
//     // }
//   };

//   const handleDragOver = (event: any) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };

//   const handleChange = (event: any) => {
//     const files = event.target.files;
//     handleFiles(files);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div
//         id="drop-area"
//         // onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         style={{
//           border: '2px dashed #ccc',
//           borderRadius: '20px',
//           width: '300px',
//           height: '200px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           margin: '20px',
//         }}
//       >
//         <p>Drag and drop a file here or</p>
//         <input
//           type="file"
//           id="fileElem"
//           accept="image/*"
//           style={{ display: 'none' }}
//           // onChange={handleImageChange}
//           multiple
//         />
//         <label htmlFor="fileElem" style={{ cursor: 'pointer', color: 'blue' }}>
//           Browse Files
//         </label>
//       </div>
//       <input
//         type="text"
//         name="name"
//         // value={product.name}
//         // onChange={handleChange}
//         placeholder="Name"
//       />
//       <textarea
//         name="desc"
//         // value={product.desc}
//         onChange={handleChange}
//         placeholder="Description"
//       />
//       <input
//         type="number"
//         name="price"
//         // value={product.price}
//         onChange={handleChange}
//         placeholder="Price"
//       />
//       <input
//         type="number"
//         name="quantity"
//         value={product.quantity}
//         onChange={handleChange}
//         placeholder="Quantity"
//       />
//       <input
//         type="number"
//         name="categoryId"
//         value={product.categoryId}
//         onChange={handleChange}
//         placeholder="Category ID"
//       />
//       <button type="submit" disabled={uploading}>Submit</button>
//       <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
//         {localImages.map((url, index) => (
//           <div key={index} style={{ position: 'relative', margin: '10px' }}>
//             <img src={url} alt="Uploaded file" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
//             <button
//               onClick={() => handleImageRemove(index)}
//               style={{
//                 position: 'absolute',
//                 top: '5px',
//                 right: '5px',
//                 background: 'red',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '50%',
//                 cursor: 'pointer',
//               }}
//             >
//               X
//             </button>
//           </div>
//         ))}
//       </div>
//     </form>
//   );
// }

// export default FileUpload;
// FileUpload.tsx
import { useCallback, useState } from "react";
import FirebaseService from "@/utils/firebase.service";
import { addProductPayload } from "@/utils/types";
import uploadImage from "@assets/images/upload.svg";
import bin from "@assets/icons/storeBin.svg";
import { useAddProduct } from "@/api/mutations";
import { useFormik } from "formik";
import { addProductsSchema } from "@/schema/auth";
import toast from "react-hot-toast";
import Input from "@/components/ui/input";
import { Button } from "../ui/button";
const DrawerModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [product, setProduct] = useState<addProductPayload>({
    name: "",
    desc: "",
    price: 0,
    quantity: 0,
    categoryId: 0,
    images: [],
  });
  const [uploading, setUploading] = useState<boolean>(false);
  const [localImages, setLocalImages] = useState<string[]>([]);
  const { mutate, isPending } = useAddProduct();

  const handleDrop = useCallback(
    async (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      handleFiles(files);
    },
    []
  );

  const handleFiles = async (files: FileList) => {
    setUploading(true);
    const uploadPromises = [...files].map(uploadFile);
    await Promise.all(uploadPromises);
    setUploading(false);
  };

  const uploadFile = async (file: File) => {
    const path = `uploads/${file.name}`;
    const localUrl = URL.createObjectURL(file);
    setLocalImages((prev) => [...prev, localUrl]);
    try {
      const url: string = await FirebaseService.uploadFile(path, file);
      console.log("File available at", url);
      setProduct((prevProduct) => ({
        ...prevProduct,
        images: [...prevProduct.images, url],
      }));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleImageRemove = (index: number) => {
    setLocalImages((prev) => prev.filter((_, i) => i !== index));
    setProduct((prevProduct) => ({
      ...prevProduct,
      images: prevProduct.images.filter((_, i) => i !== index),
    }));
  };

  // const sendFileUrlToEndpoint = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://backrooted-backend.vercel.app/products",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(product),
  //       }
  //     );
  //     const result = await response.json();
  //     console.log("Server response:", result);
  //   } catch (error) {
  //     console.error("Error sending product data to endpoint:", error);
  //   }
  // };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]:
        name === "price" || name === "quantity" || name === "categoryId"
          ? Number(value)
          : value,
    }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      handleFiles(event.target.files);
    }
  };

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   if (!uploading) {
  //     sendFileUrlToEndpoint();
  //   }
  // };
  const { handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      price: "",
      quantity: "",
      images: [""],
    },
    validationSchema: addProductsSchema,
    onSubmit: (values) => {
      console.log(values, "values");
      try {
        mutate(product, {
          onSuccess: (data) => {
            if (!uploading) {
              try {
                mutate(product, {
                  onSuccess: (data) => {
                    console.log(data);
                    console.log("success");
                  },
                  onError: (data: any) => {
                    toast.error(
                      data?.response?.data?.error.message ??
                        "An error occured, please try again"
                    );
                  },
                });
              } catch (error: any) {
                console.log(error, "ll");
              }
            }
            console.log(data);
            console.log("success");
          },
          onError: (data: any) => {
            toast.error(
              data?.response?.data?.error.message ??
                "An error occured, please try again"
            );
          },
        });
      } catch (error: any) {
        console.log(error, "ll");
      }
      console.log("clickeed");
    },
  });

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 h-full flex justify-end transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } `}
        onClick={onClose}
      >
        <div
          className={`w-[456px] relative bg-white h-full shadow-lg transform transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } px-6 pt-10 pb-80 overflow-y-auto h-full`}
          onClick={(e) => e.stopPropagation()}
        >
          <h5 className="font-amsterdam text-[24px] text-[#946C3C] font-medium">
            Add new product
          </h5>
          <p className="mt-6">Enter the product details to start selling.</p>
          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <label className="font-light text-[#101828]">
                Name of product
              </label>
              <Input
                type="text"
                placeholder="Enter name of Product"
                className="border w-full mt-2 bg-transparent block  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                onChange={handleChange}
                error={errors.name}
                hasError={!!errors.name && touched.name}
                name="name"
                required
              />
            </div>

            <div className="mt-3">
              <label className="font-light text-[#101828]">
                Price of product
              </label>
              <div className="relative">
                <p className="absolute font-arapey px-2 font-light flex items-center  text-[#667085] top-[12px]">
                  USD ($)
                  <div className="bg-[#EAECF0] h-4 w-[1px] ml-2"></div>
                </p>
                <Input
                  type="text"
                  placeholder="0.00"
                  className="border w-full mt-2 bg-transparent block pl-[80px]  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                  name="price"
                  onChange={handleChange}
                  error={errors.price}
                  hasError={!!errors.price && touched.price}
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="font-light text-[#101828]">
                Quantity of product
              </label>
              <Input
                type="text"
                placeholder="Enter quantity"
                className="border w-full mt-2 bg-transparent block  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                // value={product.quantity}
                onChange={handleChange}
                error={errors.quantity}
                hasError={!!errors.quantity && touched.quantity}
                name="quantity"
              />
            </div>

            <div>
              <label htmlFor="">Category of product</label>
              <select
                value={product.categoryId}
                // onChange={handleChange}
                className="border w-full mt-2 outline-none pr-10 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
              >
                <option value="" className="">
                  -Select-
                </option>
              </select>
            </div>

            <div
              id="drop-area"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className={`w-full   relative  p-6 mt-6   border border-dashed border-[#946C3C] bg-[#FAF6F3] grid items-center justify-center`}
            >
              <img
                src={uploadImage}
                alt="upload Image"
                className=" max-w-[127px] mx-auto"
              />
              <label
                htmlFor="fileElem"
                style={{ cursor: "pointer", color: "#475467" }}
                className="text-base mb-2 font-bold text-center"
              >
                Drop your image here, or browse
              </label>
              <input
                type="file"
                id="fileElem"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
                multiple
              />
              {/* <label htmlFor="fileElem" style={{ cursor: "pointer", color: "blue" }}>
          Browse Files
        </label> */}
              <p className="text-[#CF956F]">
                Supports: JPG, JPEG2000, PNG, MP4
              </p>
            </div>
            <div
              style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}
            >
              {localImages.map((url, index) => (
                <div
                  key={index}
                  style={{ position: "relative", margin: "10px" }}
                >
                  <img
                    src={url}
                    alt="Uploaded file"
                    style={{
                      width: "82px",
                      height: "67px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <img
                    onClick={() => handleImageRemove(index)}
                    src={bin}
                    alt="upload Image"
                    className="absolute left-8 top-5 "
                  />
                  {/* </button> */}
                </div>
              ))}
            </div>
            <div className=" mt-10 bg-white p-6 flex gap-4 border-t border-[#EAECF0]  bottom-0 w-full left-0">
              <button
                className="border border-[#946C3C] h-12 text-[#946C3C] uppercase flex-1"
                onClick={onClose}
              >
                cancel
              </button>
              <Button
                type="submit"
                className="border border-[#946C3C] h-12 uppercase bg-[#946C3C] text-white flex-1"
                isLoading={isPending}
                disabled={uploading}
                // onClick={() => handleSubmit()}
              >
                add product
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DrawerModal;
