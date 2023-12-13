import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProviousWork } from "../../services/oprerations/serviceAPIs";

const PreviousWork = ({ serviceId }) => {
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (serviceId) {
          const responseData = await getProviousWork({ service: serviceId }, token);
          setData(responseData);
        }
      } catch (error) {
        console.error("Error fetching previous work:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [serviceId, token]);

  if (loading || data.length === 0) {
    return <div className="spinner"></div>;
  }

  return (
    <div className="previous-work-container p-4 border border-gray-300 rounded-lg mt-16 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Previous Work</h2>
      {data.map((previousWorkItem) => (
        <div key={previousWorkItem._id} className="mb-6 border-2 p-6 border-slate-400 rounded-3xl">
          <p className="font-semibold text-lg mb-2">{previousWorkItem.OwnerName}</p>
          <p className="text-gray-600">Complete Date: {previousWorkItem.completeDate}</p>
          <p className="text-gray-600">Owner Contact: {previousWorkItem.OwnerContact}</p>
          <p className="text-gray-600">Address: {previousWorkItem.address}</p>
          <p className="text-gray-600">Cost: ${previousWorkItem.cost}</p>
          {/* Render Images (assuming Images is an array of strings) */}
          {previousWorkItem.Images && (
            <div className="mt-4">
              <p className="font-semibold mb-2">Images:</p>
              <div className="flex">
                {previousWorkItem.Images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className="mr-2 rounded-md"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                ))}
              </div>
            </div>
          )}
          {/* Render Service (assuming service is an array of objectIds) */}
          {previousWorkItem.service && (
            <div className="mt-4">
              <p className="font-semibold mb-2">Related Service IDs:</p>
              <ul className="list-disc pl-6">
                {previousWorkItem.service.map((serviceId, index) => (
                  <li key={index} className="text-gray-600">{serviceId}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PreviousWork;
