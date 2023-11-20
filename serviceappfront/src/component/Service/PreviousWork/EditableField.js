import React, { useState } from 'react';

const EditableField = ({ label, value, field, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditValue(value);
  };

  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleSaveChanges = () => {
    onChange(field, editValue);
    setIsEditing(false);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={handleInputChange}
          className="bg-white p-2 border rounded w-full"
        />
      ) : (
        <div className="flex items-center">
          <span className="bg-gray-200 p-2 rounded w-full">{value}</span>
          <button
            type="button"
            className="ml-2 bg-blue-500 text-white p-2 rounded"
            onClick={handleEditToggle}
          >
            Edit
          </button>
        </div>
      )}
      {isEditing && (
        <button
          type="button"
          className="mt-2 bg-green-500 text-white p-2 rounded"
          onClick={handleSaveChanges}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default EditableField;
