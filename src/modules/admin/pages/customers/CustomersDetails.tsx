import Layout from "@/shared/admin/layout/Layout";
import { useParams } from "react-router-dom";
import BreadCrumb from "@/components/ui/bread-crumb";
import { customers } from "@/modules/landing/resouces";
import avatar from "@/assets/images/customerAvatar.png";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
const CustomersDetails = () => {
  const { customersId } = useParams<{ customersId: string }>();
  const selectedProduct = customers.find(
    (customer) => customer.id.toString() === customersId
  );
  return (
    <Layout>
      <section className="flex justify-between mb-7">
        <BreadCrumb
          items={[
            {
              label: "Customers",
              link: "/admin/customers",
            },
            {
              label: `${selectedProduct?.name}`,
              link: "/herbalpaedia/1234",
            },
          ]}
        />
      </section>

      <section className=" mt-10">
        <img src={avatar} alt="avatar" />
        <h3 className="text-4xl">{selectedProduct?.name}</h3>
        <div className="flex flex-auto bg-[#FAF6F3]">
          <div className="flex gap-3  w-[185px]">
            <MdOutlineEmail color="#CF956F " />
            <p className="text-[#CF956F]">{selectedProduct?.email}</p>
          </div>
          <div className="flex gap-3 flex-auto w-[185px]">
            <BsTelephone color="#CF956F" />
            <p className="text-[#CF956F]">{selectedProduct?.phoneNum}</p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between my-3"></div>
      </section>
    </Layout>
  );
};

export default CustomersDetails;
