import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { TypeRegistration } from "../utils/constant";
import useFetch from "@/hooks/useFetch";
import { addNewUser } from "@/api/apiUser";

const OnBoarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const [currentForm, setCurrentForm] = useState(null); // null, "sebi", or "non-sebi"
  const [formData, setFormData] = useState({
    type_of_registration: "",
    trade_name: "",
    registration_no: "",
    phone: "",
    exchange_name: "",
    location: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const {
    loading: loadingCreateUser,
    error: errorCreateUser,
    data: dataCreateUser,
    fn: fnCreateUser,
  } = useFetch(addNewUser);

  const validateForm = () => {
    const errors = {};
    if (currentForm === "sebi") {
      if (!formData.type_of_registration) {
        errors.type_of_registration = "Please select a registration type.";
      }
      if (!formData.trade_name) {
        errors.trade_name = "Trade name is required.";
      }
      if (!formData.registration_no) {
        errors.registration_no = "Registration number is required.";
      }
      if (!formData.phone.match(/^\d+$/)) {
        errors.phone = "Phone number must be numeric.";
      }
      if (!formData.exchange_name) {
        errors.exchange_name = "Exchange name is required.";
      }
      if (!formData.location) {
        errors.location = "Location is required.";
      }
    } else if (currentForm === "non-sebi") {
      if (!formData.phone.match(/^\d+$/)) {
        errors.phone = "Phone number must be numeric.";
      }
      if (!formData.location) {
        errors.location = "Location is required.";
      }
    }
    return errors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const handleRoleSelection = async (role) => {
    try {
      await user.update({
        unsafeMetadata: { role },
      });
      if (role === "SEBI NoN-Registered") {
        setCurrentForm("non-sebi");
      } else {
        setCurrentForm("sebi");
      }
    } catch (err) {
      console.error("Error updating role:", err);
      alert("Failed to update role. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    if (currentForm === "sebi") {
      fnCreateUser({ ...formData, user_id: user.id, is_sebi_registered: true });
    } else if (currentForm === "non-sebi") {
      const { trade_name, registration_no, exchange_name, ...nonSebiData } =
        formData;
      fnCreateUser({
        ...nonSebiData,
        user_id: user.id,
        is_sebi_registered: false,
      });
    }
  };
  useEffect(() => {
    if (dataCreateUser && user.unsafeMetadata.role) navigate("/community");
  }, [dataCreateUser]);
  if (!isLoaded) {
    return (
      <div className="w-full flex justify-center items-center">
        <SyncLoader className="m-auto" color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-40 sm:ml-60 items-center justify-center mt-32">
      <h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">
        I am a...
      </h2>
      <div className="mt-16 flex flex-col justify-center items-center sm:flex-row gap-4 w-full md:px-40">
        <Button
          className="h-36 w-[400px] text-xl bg-black text-white hover:bg-zinc-950"
          onClick={() => handleRoleSelection("SEBI Registered")}
        >
          SEBI Registered
        </Button>
        <Button
          variant="destructive"
          className="h-36 text-xl w-[400px] hover:bg-red-700"
          onClick={() => handleRoleSelection("SEBI NoN-Registered")}
        >
          SEBI NoN-Registered
        </Button>
      </div>

      {/* SEBI Form */}
      {currentForm === "sebi" && (
        <div className="w-full flex justify-center mt-10">
          <form
            className="w-full text-sm sm:text-md max-sm:mx-3 px-12 shadow-lg sm:px-16 sm:w-4/5 bg-zinc-50 dark:bg-zinc-900 py-8 rounded-xl grid grid-cols-1 gap-x-4 gap-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center">
              <Label htmlFor="type_of_registration" className="w-1/2">
                Type Of Registration
              </Label>
              <Select
                value={formData.type_of_registration}
                onValueChange={(value) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    type_of_registration: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="--Select Registration Type--" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>SEBI Registration Types</SelectLabel>
                    {TypeRegistration.map((item, index) => (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {formErrors.type_of_registration && (
                <p className="text-red-500 text-sm ml-4">
                  {formErrors.type_of_registration}
                </p>
              )}
            </div>

            {[
              "trade_name",
              "registration_no",
              "phone",
              "exchange_name",
              "location",
            ].map((field) => (
              <div key={field} className="flex items-center">
                <Label htmlFor={field} className="w-1/2 capitalize">
                  {field.replace(/([A-Z])/g, " $1") + ":"}
                </Label>
                <Input
                  id={field}
                  type="text"
                  placeholder={`Enter ${field
                    .replace(/([A-Z])/g, " $1")
                    .toLowerCase()}`}
                  value={formData[field]}
                  onChange={handleChange}
                />
                {formErrors[field] && (
                  <p className="text-red-500 text-sm ml-4">
                    {formErrors[field]}
                  </p>
                )}
              </div>
            ))}
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-blue-600 w-full hover:bg-blue-900 text-white"
                disabled={loadingCreateUser}
              >
                {loadingCreateUser ? "Submitting..." : "Submit"}
              </Button>
            </div>
            {errorCreateUser && (
              <p className="text-red-500 text-center mt-4">
                Failed to submit. Please try again.
              </p>
            )}
          </form>
        </div>
      )}

      {/* Non-SEBI Form */}
      {currentForm === "non-sebi" && (
        <div className="w-full flex justify-center mt-10">
          <form
            className="w-full text-sm sm:text-md max-sm:mx-3 px-12 shadow-lg sm:px-16 sm:w-4/5 bg-zinc-50 dark:bg-zinc-900 py-8 rounded-xl grid grid-cols-1 gap-x-4 gap-y-6"
            onSubmit={handleSubmit}
          >
            {["trade_name", "phone", "location"].map((field) => (
              <div key={field} className="flex items-center">
                <Label htmlFor={field} className="w-1/2 capitalize">
                  {field === "trade_name" && "Name / "}
                  {field.replace(/([A-Z])/g, " $1") + ":"}
                </Label>
                <Input
                  id={field}
                  type="text"
                  placeholder={`Enter ${field
                    .replace(/([A-Z])/g, " $1")
                    .toLowerCase()}`}
                  value={formData[field]}
                  onChange={handleChange}
                />
                {formErrors[field] && (
                  <p className="text-red-500 text-sm ml-4">
                    {formErrors[field]}
                  </p>
                )}
              </div>
            ))}
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-blue-600 w-full hover:bg-blue-900 text-white"
                disabled={loadingCreateUser}
              >
                {loadingCreateUser ? "Submitting..." : "Submit"}
              </Button>
            </div>
            {errorCreateUser && (
              <p className="text-red-500 text-center mt-4">
                Failed to submit. Please try again.
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default OnBoarding;
