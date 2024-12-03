// // import useFormContext from "../hooks/useFormContext";

// // const AddInfo = () => {
// //     const { data, handleChange } = useFormContext();

// //     const content = (
// //         <>
// //             <label htmlFor="Address1">Address</label>
// //             <input
// //                 type="text"
// //                 id="Address1"
// //                 name="shipAddress1"
// //                 placeholder="555 Wallaby Way"
// //                 pattern="[\w\d\s.#]{2,}"
// //                 value={data.shipAddress1}
// //                 onChange={handleChange}
// //                 disabled={data.sameAsBilling}
// //                 style={{
// //                     border: "1px solid #ccc",
// //                     borderRadius: "4px",
// //                     padding: "8px",
// //                     outline: "none",
// //                     width: "100%"
// //                 }}
// //             />

// //             <label htmlFor="Address2">Address Line 2</label>
// //             <input
// //                 type="text"
// //                 id="Address2"
// //                 name="shipAddress2"
// //                 placeholder="Apt. 2"
// //                 pattern="[\w\d\s.#]{2,}"
// //                 value={data.shipAddress2}
// //                 onChange={handleChange}
// //                 disabled={data.sameAsBilling}
// //                 style={{
// //                     border: "1px solid #ccc",
// //                     borderRadius: "4px",
// //                     padding: "8px",
// //                     outline: "none",
// //                     width: "100%"
// //                 }}
// //             />

// //             <label htmlFor="City">City</label>
// //             <input
// //                 type="text"
// //                 id="City"
// //                 name="shipCity"
// //                 placeholder="New York"
// //                 pattern="([A-Z])[\w\s.]{1,}"
// //                 value={data.shipCity}
// //                 onChange={handleChange}
// //                 disabled={data.sameAsBilling}
// //                 style={{
// //                     border: "1px solid #ccc",
// //                     borderRadius: "4px",
// //                     padding: "8px",
// //                     outline: "none",
// //                     width: "100%"
// //                 }}
// //             />

// //             <label htmlFor="State">State</label>
// //             <select
// //                 id="State"
// //                 name="shipState"
// //                 value={data.shipState}
// //                 onChange={handleChange}
// //                 disabled={data.sameAsBilling}
// //                 style={{
// //                     border: "1px solid #ccc",
// //                     borderRadius: "4px",
// //                     padding: "8px",
// //                     outline: "none",
// //                     width: "100%"
// //                 }}
// //             >
// //                 <option value="" disabled>
// //                     Select State
// //                 </option>
// //                 <option value="AL">Alabama</option>
// //                 <option value="AK">Alaska</option>
// //                 <option value="AZ">Arizona</option>
// //                 <option value="AR">Arkansas</option>
// //                 <option value="CA">California</option>
// //                 <option value="CO">Colorado</option>
// //                 <option value="CT">Connecticut</option>
// //                 <option value="DE">Delaware</option>
// //                 <option value="DC">District Of Columbia</option>
// //                 <option value="FL">Florida</option>
// //                 <option value="GA">Georgia</option>
// //                 <option value="HI">Hawaii</option>
// //                 <option value="ID">Idaho</option>
// //                 <option value="IL">Illinois</option>
// //                 <option value="IN">Indiana</option>
// //                 <option value="IA">Iowa</option>
// //                 <option value="KS">Kansas</option>
// //                 <option value="KY">Kentucky</option>
// //                 <option value="LA">Louisiana</option>
// //                 <option value="ME">Maine</option>
// //                 <option value="MD">Maryland</option>
// //                 <option value="MA">Massachusetts</option>
// //                 <option value="MI">Michigan</option>
// //                 <option value="MN">Minnesota</option>
// //                 <option value="MS">Mississippi</option>
// //                 <option value="MO">Missouri</option>
// //                 <option value="MT">Montana</option>
// //                 <option value="NE">Nebraska</option>
// //                 <option value="NV">Nevada</option>
// //                 <option value="NH">New Hampshire</option>
// //                 <option value="NJ">New Jersey</option>
// //                 <option value="NM">New Mexico</option>
// //                 <option value="NY">New York</option>
// //                 <option value="NC">North Carolina</option>
// //                 <option value="ND">North Dakota</option>
// //                 <option value="OH">Ohio</option>
// //                 <option value="OK">Oklahoma</option>
// //                 <option value="OR">Oregon</option>
// //                 <option value="PA">Pennsylvania</option>
// //                 <option value="RI">Rhode Island</option>
// //                 <option value="SC">South Carolina</option>
// //                 <option value="SD">South Dakota</option>
// //                 <option value="TN">Tennessee</option>
// //                 <option value="TX">Texas</option>
// //                 <option value="UT">Utah</option>
// //                 <option value="VT">Vermont</option>
// //                 <option value="VA">Virginia</option>
// //                 <option value="WA">Washington</option>
// //                 <option value="WV">West Virginia</option>
// //                 <option value="WI">Wisconsin</option>
// //                 <option value="WY">Wyoming</option>
// //             </select>

// //             <label htmlFor="ZipCode">Zip Code</label>
// //             <input
// //                 type="text"
// //                 id="ZipCode"
// //                 name="shipZipCode"
// //                 placeholder="12345"
// //                 pattern="[0-9]{5}"
// //                 maxLength="5"
// //                 value={data.shipZipCode}
// //                 onChange={handleChange}
// //                 disabled={data.sameAsBilling}
// //                 style={{
// //                     border: "1px solid #ccc",
// //                     borderRadius: "4px",
// //                     padding: "8px",
// //                     outline: "none",
// //                     width: "100%"
// //                 }}
// //             />
// //         </>
// //     );

// //     return content;
// // };

// // export default AddInfo;



// import useFormContext from "../hooks/useFormContext";

// const AddInfo = () => {
//   const { data, handleChange } = useFormContext();

//   const content = (
//     <>
//       <label htmlFor="address1">Address</label>
//       <input
//         type="text"
//         id="address1"
//         name="address1" 
//         placeholder="555 Wallaby Way"
//         pattern="[\w\d\s.#]{2,}"
//         value={data.address1} 
//         onChange={handleChange}
//         disabled={data.sameAsBilling}
//         style={{
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//           padding: "8px",
//           outline: "none",
//           width: "100%"
//         }}
//       />

//       <label htmlFor="address2">Address Line 2</label>
//       <input
//         type="text"
//         id="address2"
//         name="address2" 
//         placeholder="Apt. 2"
//         pattern="[\w\d\s.#]{2,}"
//         value={data.address2}
//         onChange={handleChange}
//         disabled={data.sameAsBilling}
//         style={{
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//           padding: "8px",
//           outline: "none",
//           width: "100%"
//         }}
//       />

//       <label htmlFor="city">City</label>
//       <input
//         type="text"
//         id="city"
//         name="city"
//         placeholder="New York"
//         pattern="([A-Z])[\w\s.]{1,}"
//         value={data.city} 
//         onChange={handleChange}
//         disabled={data.sameAsBilling}
//         style={{
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//           padding: "8px",
//           outline: "none",
//           width: "100%"
//         }}
//       />

//       <label htmlFor="state">State</label>
//       <select
//         id="state"
//         name="state" 
//         value={data.state}
//         onChange={handleChange}
//         disabled={data.sameAsBilling}
//         style={{
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//           padding: "8px",
//           outline: "none",
//           width: "100%"
//         }}
//       >
//         <option value="" disabled>
//           Select State
//         </option>
//         <option value="AL">Alabama</option>
//         <option value="AK">Alaska</option>
//         <option value="AZ">Arizona</option>
//         <option value="AR">Arkansas</option>
//         <option value="CA">California</option>
//         <option value="CO">Colorado</option>
//         <option value="CT">Connecticut</option>
//         <option value="DE">Delaware</option>
//         <option value="DC">District Of Columbia</option>
//         <option value="FL">Florida</option>
//         <option value="GA">Georgia</option>
//         <option value="HI">Hawaii</option>
//         <option value="ID">Idaho</option>
//         <option value="IL">Illinois</option>
//         <option value="IN">Indiana</option>
//         <option value="IA">Iowa</option>
//         <option value="KS">Kansas</option>
//         <option value="KY">Kentucky</option>
//         <option value="LA">Louisiana</option>
//         <option value="ME">Maine</option>
//         <option value="MD">Maryland</option>
//         <option value="MA">Massachusetts</option>
//         <option value="MI">Michigan</option>
//         <option value="MN">Minnesota</option>
//         <option value="MS">Mississippi</option>
//         <option value="MO">Missouri</option>
//         <option value="MT">Montana</option>
//         <option value="NE">Nebraska</option>
//         <option value="NV">Nevada</option>
//         <option value="NH">New Hampshire</option>
//         <option value="NJ">New Jersey</option>
//         <option value="NM">New Mexico</option>
//         <option value="NY">New York</option>
//         <option value="NC">North Carolina</option>
//         <option value="ND">North Dakota</option>
//         <option value="OH">Ohio</option>
//         <option value="OK">Oklahoma</option>
//         <option value="OR">Oregon</option>
//         <option value="PA">Pennsylvania</option>
//         <option value="RI">Rhode Island</option>
//         <option value="SC">South Carolina</option>
//         <option value="SD">South Dakota</option>
//         <option value="TN">Tennessee</option>
//         <option value="TX">Texas</option>
//         <option value="UT">Utah</option>
//         <option value="VT">Vermont</option>
//         <option value="VA">Virginia</option>
//         <option value="WA">Washington</option>
//         <option value="WV">West Virginia</option>
//         <option value="WI">Wisconsin</option>
//         <option value="WY">Wyoming</option>
//       </select>

//       <label htmlFor="zipCode">Zip Code</label>
//       <input
//         type="text"
//         id="zipCode"
//         name="zipCode" 
//         placeholder="12345"
//         pattern="[0-9]{5}"
//         maxLength="5"
//         value={data.zipCode} 
//         onChange={handleChange}
//         disabled={data.sameAsBilling}
//         style={{
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//           padding: "8px",
//           outline: "none",
//           width: "100%"
//         }}
//       />
//     </>
//   );

//   return content;
// };

// export default AddInfo;




import useFormContext from "../hooks/useFormContext";

const AddInfo = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <>
      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        placeholder="555 Wallaby Way"
        pattern="[\w\d\s.#]{2,}"
        value={data.street}
        onChange={handleChange}
        disabled={data.sameAsBilling}
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          outline: "none",
          width: "100%"
        }}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        placeholder="New York"
        pattern="([A-Z])[\w\s.]{1,}"
        value={data.city}
        onChange={handleChange}
        disabled={data.sameAsBilling}
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          outline: "none",
          width: "100%"
        }}
      />

      <label htmlFor="state">State</label>
      <select
        id="state"
        name="state"
        value={data.state}
        onChange={handleChange}
        disabled={data.sameAsBilling}
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          outline: "none",
          width: "100%"
        }}
      >
        <option value="" disabled>
          Select State
        </option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>

      <label htmlFor="zipCode">Zip Code</label>
      <input
        type="text"
        id="zipCode"
        name="zipCode"
        placeholder="12345"
        pattern="[0-9]{5}"
        maxLength="5"
        value={data.zipCode}
        onChange={handleChange}
        disabled={data.sameAsBilling}
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          outline: "none",
          width: "100%"
        }}
      />
    </>
  );

  return content;
};

export default AddInfo;
