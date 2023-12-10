// ContactCard.js

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { updateInquiry } from "../../../services/oprerations/serviceAPIs";

const ServiceEnquireListCard = ({ data }) => {
  console.log(data)
  const [isEditing, setEditing] = useState(false);
  const [isResponded, setResponded] = useState(data?.response !== "");
  const [isApproved, setApproved] = useState(data?.approved);
  const { token } = useSelector((state => state.auth))
  const { user } = useSelector((state => state.profile))
  const [isUser, setUSER] = useState(user.accountType === "User");
  const [response, setResponce] = useState(data?.response);
  const handleEdit = () => {
    setEditing(!isEditing);
  };

  const handleRespond = async () => {
    setResponded(!isResponded);
    await updateInquiry({ enquiryId: data._id, response: response }, token);
  };

  const handleApprove = async () => {
    setApproved(!isApproved);
    await updateInquiry({ approved: true, enquiryId: data._id }, token);

  };
  const handleChange = (e) => {
    setResponce(e.target.value);
    console.log(response)
  }
  return (
    <div className="bg-white shadow-md rounded-md p-4 md:p-6 w-full my-4">
      {!isUser && (
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
          <h2 className="text-xl font-semibold"></h2>
          <div className="space-y-2 sm:space-x-2 sm:space-y-0 mt-2 sm:mt-0">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={handleEdit}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
            <button
              className={`${isResponded ? "bg-green-500" : "bg-blue-500"
                } text-white px-3 py-1 ml-1 mr-1 rounded`}
              onClick={handleRespond}
            >
              {!isResponded ? "Responded" : "Respond"}
            </button>
            {data?.availableDate && data?.availableTime && (
              <button
                className={`${isApproved ? "bg-green-500" : "bg-blue-500"
                  } text-white px-3 py-1 ml-1 mr-1 rounded`}
                onClick={handleApprove}
              >
                {isApproved ? "Approved" : "Approve"}
              </button>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            defaultValue={data?.name}
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Contact
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            defaultValue={data?.contact}
            disabled
          />
        </div>
        {/* Add similar blocks for other fields (message, address, availableDate, availableTime) */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Address
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            defaultValue={data?.address}
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            defaultValue={data?.message}
            disabled
          />
        </div>
      </div>

      <div>
        {data?.availableDate && data?.availableTime && <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Date
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={data?.availableDate}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Time
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={data?.availableTime}
              disabled
            />
          </div>

        </div>}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Responce
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            defaultValue="Not Yet Given"
            disabled={!isEditing}
            // onClick={handleRespond}
            onChange={handleChange}
            value={response}
          />
        </div>
      </div>
      {isUser && data?.availableDate && data?.availableTime && (
        <button
          className={`${data?.approved ? "bg-green-500" : "bg-blue-500"
            } text-white px-3 py-1 rounded`}
        >
          {!response && !data?.approved ? "Not Approved" : "Approved"}
        </button>
      )}
    </div>
  );
};

export default ServiceEnquireListCard;
