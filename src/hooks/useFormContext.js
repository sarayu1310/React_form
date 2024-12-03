import { useContext } from "react";
import FormContext from "../context/FormContext";

const useFormContext = () => {
    const {
        page,
        data,
        setData,
        setPage,
        title,
        canSubmit,
    } = useContext(FormContext);

    const requiredFields = {
        0: ["billFirstName", "billLastName"],
        1: ["shipAddress1", "shipCity", "shipState", "shipZipCode"],
        2: ["cardNumber", "expiryDate", "cvv", "cardholderName"],
    };

    const validateFields = (currentPage) => {
        const fields = requiredFields[currentPage] || [];
        return fields.every((field) => data[field]?.trim() !== "");
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return {
        page,
        data,
        setPage,
        title,
        canSubmit,
        validateFields,
        handleChange, // Ensure handleChange is properly returned
    };
};

export default useFormContext;
