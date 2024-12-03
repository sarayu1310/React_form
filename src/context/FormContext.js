// import { createContext, useState, useEffect } from "react";

// const FormContext = createContext({});

// export const FormProvider = ({ children }) => {
//   const title = {
//     0: "User Information",
//     1: "Address Form",
//     2: "Payment Information Form",
//   };

//   const [page, setPage] = useState(null);
  
//   const [data, setData] = useState({
//     FirstName: "",
//     LastName: "",
//     // billAddress1: "",
//     // billAddress2: "",
//     // billCity: "",
//     // billState: "",
//     // billZipCode: "",
//     // sameAsBilling: false,
//     // shipFirstName: "",
//     // shipLastName: "",
//     Address1: "",
//     Address2: "",
//     City: "",
//     State: "",
//     ZipCode: "",
//     // optInNews: false,
//   });

//   useEffect(() => {
//     if (data.sameAsBilling) {
//       setData((prevData) => ({
//         ...prevData,
//         shipFirstName: prevData.billFirstName,
//         shipLastName: prevData.billLastName,
//         shipAddress1: prevData.billAddress1,
//         shipAddress2: prevData.billAddress2,
//         shipCity: prevData.billCity,
//         shipState: prevData.billState,
//         shipZipCode: prevData.billZipCode,
//       }));
//     } else {
//       setData((prevData) => ({
//         ...prevData,
//         shipFirstName: "",
//         shipLastName: "",
//         shipAddress1: "",
//         shipAddress2: "",
//         shipCity: "",
//         shipState: "",
//         shipZipCode: "",
//       }));
//     }
//   }, [data.sameAsBilling]);

//   const handleChange = (e) => {
//     const type = e.target.type;
//     const name = e.target.name;
//     const value = type === "checkbox" ? e.target.checked : e.target.value;

//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const {
//     billAddress2,
//     sameAsBilling,
//     shipAddress2,
//     optInNews,
//     ...requiredInputs
//   } = data;

//   const canSubmit = [
//     ...Object.values(requiredInputs),
//   ].every(Boolean) && page === Object.keys(title).length - 1;

//   const canNextPage1 = Object.keys(data)
//     .filter((key) => key.startsWith("bill") && key !== "billAddress2")
//     .map((key) => data[key])
//     .every(Boolean);

//   const canNextPage2 = Object.keys(data)
//     .filter((key) => key.startsWith("ship") && key !== "shipAddress2")
//     .map((key) => data[key])
//     .every(Boolean);

//   const disablePrev = page === 0;

//   const disableNext =
//     page === Object.keys(title).length - 1 ||
//     (page === 0 && !canNextPage1) ||
//     (page === 1 && !canNextPage2);

//   const prevHide = page === 0 && "remove-button";

//   const nextHide = page === Object.keys(title).length - 1 && "remove-button";

//   const submitHide = page !== Object.keys(title).length - 1 && "remove-button";

//   return (
//     <FormContext.Provider
//       value={{
//         title,
//         page,
//         setPage,
//         data,
//         setData,
//         canSubmit,
//         handleChange,
//         disablePrev,
//         disableNext,
//         prevHide,
//         nextHide,
//         submitHide,
//       }}
//     >
//       {children}
//     </FormContext.Provider>
//   );
// };

// export default FormContext;


import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  // Form titles for each step
  const title = {
    0: "User Information",
    1: "Address Form",
    2: "Payment Information Form",
  };

  // Define the form fields for each step
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

  // Initialize form data based on the fields
  const initialData = fieldsData.flat().reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [data, setData] = useState(initialData);

  useEffect(() => {
    // Custom effect if needed based on form fields
  }, [data]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Check if all required fields are filled for submission
  const canSubmit = fieldsData[page].every((field) => !field.required || data[field.name]);

  // Check navigation logic for next/prev pages
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
        fields: fieldsData[page], // Pass the fields for the current page
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
