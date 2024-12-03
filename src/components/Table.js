import React from "react";
import './table.css';

const Table = ({ submittedData, handleEdit, handleDelete }) => {
  if (submittedData.length === 0) return null;

  return (
    <div className="submitted-data">
      <h3>Submitted Data</h3>
      <table className="data-table">
        <thead>
          <tr>
            {Object.keys(submittedData[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((entry, index) => (
            <tr key={index}>
              {Object.values(entry).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
              <td>
                <button onClick={() => handleEdit(index)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(index)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
