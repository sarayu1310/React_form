import useFormContext from "../hooks/useFormContext";

const Payment = () => {
    const { data, handleChange } = useFormContext();

    const fields = [
        { name: "cardNumber", type: "text", label: "Card Number", required: true },
        { name: "expiryDate", type: "date", label: "Expiry Date", required: true },
        { name: "cvv", type: "password", label: "CVV", required: true },
        { name: "cardholderName", type: "text", label: "Cardholder Name", required: true }
    ];

    const content = (
        <form>
            <style>
                {`
                input:-webkit-autofill {
                    -webkit-box-shadow: 0 0 0px 1000px white inset;
                    box-shadow: 0 0 0px 1000px white inset;
                }
                `}
            </style>
            {fields.map((field) => (
                <div key={field.name}>
                    <label htmlFor={field.name}>
                        {field.label} {field.required && <span>*</span>}
                    </label>
                    <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={data[field.name] || ""}
                        onChange={handleChange}
                        required={field.required}
                        style={{
                            border: "1px solid #ccc", // Neutral border
                            borderRadius: "4px",
                            padding: "8px",
                            outline: "none",
                            width: "100%", // Optional, ensures inputs are full width
                            backgroundColor: "white" // Force white background
                        }}
                    />
                </div>
            ))}
        </form>
    );

    return content;
};

export default Payment;
