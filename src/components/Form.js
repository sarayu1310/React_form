import { useState } from "react";
import FormInputs from "./FormInputs";
import useFormContext from "../hooks/useFormContext";
import Table from "../components/Table";

const Form = () => {
    const {
        page,
        setPage,
        data,
        title,
        validateFields,
        handleChange,
    } = useFormContext();

    const [submittedData, setSubmittedData] = useState([]);
    const [feedbackMessage, setFeedbackMessage] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateFields(page)) {
            setFeedbackMessage("Please fill out all required fields.");
            return;
        }

        setSubmittedData((prevData) => [...prevData, { ...data }]);
        setFeedbackMessage("Sign-up Successful!");
        console.log(JSON.stringify(data));
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
        setPage(0); 
        setSubmittedData((prevData) => prevData.filter((_, i) => i !== index));
        Object.keys(selectedData).forEach((key) => {
            data[key] = selectedData[key];
        });
    };

    const handleDelete = (index) => {
        setSubmittedData((prevData) => prevData.filter((_, i) => i !== index));
        setFeedbackMessage("Entry deleted successfully.");
    };

    const isSubmitDisabled = page === Object.keys(title).length - 1 && !validateFields(page);
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
                            disabled={!validateFields(page)} 
                        >
                            Next
                        </button>
                    )}
                    {page === Object.keys(title).length - 1 && (
                        <button
                            type="submit"
                            className="button"
                            disabled={isSubmitDisabled} 
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
            {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
            <Table
                submittedData={submittedData}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default Form;
