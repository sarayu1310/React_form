import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  // Form titles for each step
  const title = {
    0: "User Information",
    1: "Address Form",
    2: "Payment Information Form",
  };
  const fieldsData = [
    [
      { name: "firstName", type: "text", label: "First Name", required: true },
      { name: "lastName", type: "text", label: "Last Name", required: true },
      { name: "age", type: "number", label: "Age", required: false },
    ],
    [
      { name: "street", type: "text", label: "Street", required: true },
      { name: "city", type: "text", label: "City", required: true },
      { name: "state", type: "dropdown", label: "State", options: ["California", "Texas", "New York"], required: true },
      { name: "zipCode", type: "text", label: "Zip Code", required: false },
    ],
    [
      { name: "cardNumber", type: "text", label: "Card Number", required: true },
      { name: "expiryDate", type: "date", label: "Expiry Date", required: true },
      { name: "cvv", type: "password", label: "CVV", required: true },
      { name: "cardholderName", type: "text", label: "Cardholder Name", required: true },
    ]
  ];

  const [page, setPage] = useState(0);
  const initialData = fieldsData.flat().reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [data, setData] = useState(initialData);

  useEffect(() => {
  }, [data]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const canSubmit = fieldsData[page].every((field) => !field.required || data[field.name]);

  const canNext = fieldsData[page].every((field) => !field.required || data[field.name]);
  const canPrev = page > 0;
  const disableNext = page === fieldsData.length - 1 || !canNext;
  const disablePrev = page === 0;

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        handleChange,
        disablePrev,
        disableNext,
        fields: fieldsData[page],
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
