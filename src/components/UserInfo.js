import useFormContext from "../hooks/useFormContext";

const UserInfo = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <style>
        {`
        input {
          border: 1px solid #ccc; /* Neutral border */
          border-radius: 4px;
          padding: 8px;
          outline: none;
          width: 100%;
          background-color: white; /* Ensure white background */
        }

        input:focus {
          border-color: #007BFF; /* Optional: Add a subtle focus effect */
        }

        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px white inset;
          box-shadow: 0 0 0px 1000px white inset;
        }

        .flex-col {
          display: flex;
          flex-direction: column;
          gap: 10px; /* Space between elements */
        }

        .split-container {
          display: flex;
          gap: 20px; /* Space between columns */
        }
        `}
      </style>
      <div className="split-container">
        <div className="flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"  
            placeholder="Jane"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex-col">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Enter your Age"
          min="0"
          max="120"
          value={data.age}
          onChange={handleChange}
        />
      </div>
    </div>
  );

  return content;
};

export default UserInfo;
