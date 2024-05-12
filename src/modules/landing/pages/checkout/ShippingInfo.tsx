import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ShippingInfo: React.FC = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!email.trim()) errors.email = "Email address is required";
    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    if (!address.trim()) errors.address = "Address is required";
    if (!city.trim()) errors.city = "City is required";
    if (!state.trim()) errors.state = "State is required";
    if (!zipCode.trim()) errors.zipCode = "Zip code is required";
    if (!phone.trim()) errors.phone = "Phone is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed to payment page
      window.location.href = "/payment"; // Redirect to payment page
    }
  };
  return (
    <div>
      <p className="pt-6 font-light text-[14px] font-maison">
        SHIPPING INFORMATION
      </p>
      <form className="pt-6" onSubmit={handleSubmit}>
        <Input
          className="bg-transparent"
          label="Email address"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        />
        {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
        <div className="flex gap-[1rem]">
          <Input
            className="bg-transparent"
            label="First name"
            placeholder="Your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {formErrors.firstName && (
            <p className="text-red-500">{formErrors.firstName}</p>
          )}
          <Input
            className="bg-transparent"
            label="Last name"
            placeholder="Your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {formErrors.lastName && (
            <p className="text-red-500">{formErrors.lastName}</p>
          )}
        </div>
        <Input
          className="bg-transparent"
          label="Address"
          placeholder="Your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        {formErrors.address && (
          <p className="text-red-500">{formErrors.address}</p>
        )}
        <Input
          className="bg-transparent"
          label="Apartment, suite, etc. (optional)"
          placeholder="Your apartment"
          value={apartment}
          onChange={(e) => setApartment(e.target.value)}
        />
        <div className="flex gap-[1rem]">
          <Input
            className="bg-transparent"
            label="City"
            placeholder="Your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          {formErrors.city && <p className="text-red-500">{formErrors.city}</p>}
          <Input
            className="bg-transparent"
            label="State"
            placeholder="Your state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          {formErrors.state && (
            <p className="text-red-500">{formErrors.state}</p>
          )}
          <Input
            className="bg-transparent"
            label="Zip code"
            placeholder="Your zip code"
            value={zipCode}
            onChange={(e) => {
              // Only allow numbers
              const inputValue = e.target.value.replace(/\D/g, "");
              setZipCode(inputValue);
            }}
            required
            type="text"
            pattern="[0-9]*"
          />
          {formErrors.zipCode && (
            <p className="text-red-500">{formErrors.zipCode}</p>
          )}
        </div>
        <Input
          className="bg-transparent"
          label="Phone"
          placeholder="+1 000 – 0000 – 000"
          value={phone}
          onChange={(e) => {
            // Only allow numbers
            const inputValue = e.target.value.replace(/\D/g, "");
            setPhone(inputValue);
          }}
          required
          type="text"
          pattern="[0-9]*"
        />
        {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}
        <Button className="w-full mt-2 h-[56px] p-6" type="submit">
          CONTINUE TO PAYMENT
        </Button>
      </form>
    </div>
  );
};

export default ShippingInfo;
