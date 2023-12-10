import { useState } from "react";
import IconBtn from "../common/IconBtn"
import { createInquiry } from "../../services/oprerations/serviceAPIs"
import { useSelector } from "react-redux";
export default function ConfirmationModal({ modalData }) {
  // const currdate= Date.now();s
  console.log(modalData);
  const [bookAppoinment, setBookAppoinment] = useState(false)
  const [formData, setFormData] = useState({
    message: '',
    address: '',
    name: '',
    contact: '',
    availableDate: null,
    availableTime: null,
    serviceId: modalData.id
  });
  const { token } = useSelector(state => state.auth)
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData)
  };
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    const res = await createInquiry(formData, token)
    console.log(res)
    setLoading(false)
    modalData.btn2Handler();
    
  };
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      {/* <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-white p-6">
        <p className="text-2xl font-semibold text-richblack-5">
          {modalData?.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 text-richblack-200">
          {modalData?.text2}
        </p>
        <div className="flex items-center gap-x-4">
          <IconBtn
            onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
          />
          <button
            className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div> */}

      <div className=" mx-auto mt-8 p-6 bg-slate-300   shadow-md w-11/12 max-w-[350px] rounded-lg ">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              rows="4"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 w-full rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact No</label>
            <input
              id="contact"
              name="contact"
              rows="4"
              value={formData.contact}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 w-full rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 w-full rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 w-full rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button className="block text-md font-medium text-white bg-pink-500 p-2 rounded-lg" onClick={() => {
            setBookAppoinment(!bookAppoinment)
            setBookAppoinment({
              message: '',
              address: '',
              name: '',
              contact: '',
              availableDate: null,
              availableTime: null,
              serviceId: modalData.id
            })
          }}>
            Book Appointment
          </button>
          {bookAppoinment && <div>
            <label htmlFor="availableDate" className="block text-sm font-medium text-gray-700">Appointment Date</label>
            <input
              type="date"
              id="availableDate"
              name="availableDate"
              value={formData.availableDate}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 w-full rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          }
          {bookAppoinment && <div>
            <label htmlFor="availableTime" className="block text-sm font-medium text-gray-700">Appointment Time</label>
            <input
              type="text"
              id="availableTime"
              name="availableTime"
              value={formData.availableTime}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 w-full rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>}

          <div className="flex justify-around gap-2">
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex items-center ">
              {!loading && <p>Inquire</p>}
              {loading && <div className="spinner"></div>}
            </button>
            <button onClick={modalData.btn2Handler} className="w-full py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Cancel</button>
          </div>
        </form>

      </div>
    </div>
  )
}