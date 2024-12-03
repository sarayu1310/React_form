// import FormInputs from "./FormInputs";
// import useFormContext from "../hooks/useFormContext";

// const Form = () => {
//     const {
//         page,
//         setPage,
//         data,
//         title,
//         validateFields, // Field validation logic
//         handleChange, // Handles input changes
//     } = useFormContext();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(JSON.stringify(data)); // Output final data
//     };

//     const handleNext = () => {
//         if (validateFields(page)) {
//             setPage((prevPage) => prevPage + 1);
//         } else {
//             alert("Please fill out all fields before proceeding.");
//         }
//     };

//     const handleBack = () => {
//         setPage((prevPage) => prevPage - 1);
//     };

//     const handleDropdownChange = (e) => {
//         const selectedPage = e.target.value;
//         setPage(selectedPage === "" ? null : Number(selectedPage));
//     };

//     const isSubmitDisabled = page === Object.keys(title).length - 1 && !validateFields(page); // Dynamic enablement

//     return (
//         <form className="form flex-col" onSubmit={handleSubmit}>
//             <header className="form-header">
//                 <div className="dropdown-container">
//                     <label htmlFor="page-select">Select Page:</label>
//                     <select
//                         id="page-select"
//                         value={page === null ? "" : page}
//                         onChange={handleDropdownChange}
//                         className="page-dropdown"
//                     >
//                         <option value="">--Select Form type--</option>
//                         {Object.keys(title).map((key) => (
//                             <option key={key} value={key}>
//                                 {title[key]}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {page !== null && <h2>{title[page]}</h2>}
//             </header>

//             {page !== null && (
//                 <FormInputs handleChange={handleChange} data={data} />
//             )}

//             <div className="button-container">
//                 {page > 0 && (
//                     <button type="button" className="button" onClick={handleBack}>
//                         Back
//                     </button>
//                 )}
//                 {page !== null && page < Object.keys(title).length - 1 && (
//                     <button
//                         type="button"
//                         className="button"
//                         onClick={handleNext}
//                         disabled={!validateFields(page)} // Disable Next button if fields are invalid
//                     >
//                         Next
//                     </button>
//                 )}
//                 {page === Object.keys(title).length - 1 && (
//                     <button
//                         type="submit"
//                         className="button"
//                         disabled={isSubmitDisabled} // Disable Submit until all fields are valid
//                     >
//                         Submit
//                     </button>
//                 )}
//             </div>
//         </form>
//     );
// };

// export default Form;



import { useState } from "react";
import FormInputs from "./FormInputs";
import useFormContext from "../hooks/useFormContext";
import Table from "../components/Table"; // Import Table component

const Form = () => {
    const {
        page,
        setPage,
        data,
        title,
        validateFields, // Field validation logic
        handleChange, // Handles input changes
    } = useFormContext();

    const [submittedData, setSubmittedData] = useState([]); // Store submitted data
    const [feedbackMessage, setFeedbackMessage] = useState(""); // Feedback message after submission

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateFields(page)) {
            setFeedbackMessage("Please fill out all required fields.");
            return;
        }

        setSubmittedData((prevData) => [...prevData, { ...data }]); // Add submitted data to the table
        setFeedbackMessage("Sign-up Successful!"); // Success message
        console.log(JSON.stringify(data)); // Output final data
    };

    const handleNext = () => {
        if (validateFields(page)) {
            setPage((prevPage) => prevPage + 1);
        } else {
            setFeedbackMessage("Please fill out all fields before proceeding.");
        }
    };

    const handleBack = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleDropdownChange = (e) => {
        const selectedPage = e.target.value;
        setPage(selectedPage === "" ? null : Number(selectedPage));
    };

    const handleEdit = (index) => {
        const selectedData = submittedData[index];
        setPage(0); // Set page to the first step for editing
        setSubmittedData((prevData) => prevData.filter((_, i) => i !== index)); // Remove the entry temporarily
        Object.keys(selectedData).forEach((key) => {
            data[key] = selectedData[key]; // Populate the data object for editing
        });
    };

    const handleDelete = (index) => {
        setSubmittedData((prevData) => prevData.filter((_, i) => i !== index));
        setFeedbackMessage("Entry deleted successfully.");
    };

    const isSubmitDisabled = page === Object.keys(title).length - 1 && !validateFields(page); // Dynamic enablement

    return (
        <div>
            <form className="form flex-col" onSubmit={handleSubmit}>
                <header className="form-header">
                    <div className="dropdown-container">
                        <label htmlFor="page-select">Select Page:</label>
                        <select
                            id="page-select"
                            value={page === null ? "" : page}
                            onChange={handleDropdownChange}
                            className="page-dropdown"
                        >
                            <option value="">--Select Form type--</option>
                            {Object.keys(title).map((key) => (
                                <option key={key} value={key}>
                                    {title[key]}
                                </option>
                            ))}
                        </select>
                    </div>

                    {page !== null && <h2>{title[page]}</h2>}
                </header>

                {page !== null && (
                    <FormInputs handleChange={handleChange} data={data} />
                )}

                <div className="button-container">
                    {page > 0 && (
                        <button type="button" className="button" onClick={handleBack}>
                            Back
                        </button>
                    )}
                    {page !== null && page < Object.keys(title).length - 1 && (
                        <button
                            type="button"
                            className="button"
                            onClick={handleNext}
                            disabled={!validateFields(page)} // Disable Next button if fields are invalid
                        >
                            Next
                        </button>
                    )}
                    {page === Object.keys(title).length - 1 && (
                        <button
                            type="submit"
                            className="button"
                            disabled={isSubmitDisabled} // Disable Submit until all fields are valid
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>

            {/* Display feedback message */}
            {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}

            {/* Display table of submitted data */}
            <Table
                submittedData={submittedData}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default Form;
