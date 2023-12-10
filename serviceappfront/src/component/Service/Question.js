import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { updateQuestionAnswer } from "../../services/oprerations/serviceAPIs";
import { useSelector } from "react-redux";

const Question = ({ data, index }) => {
  const { token } = useSelector((state) => state.auth);
  const [info, setInfo] = useState({
    question: data?.question,
    answer: data?.answer,
  });

  const handleChange = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
    console.log(info);
  };

  const [isEdit, setEdit] = useState(false);
  const handleClick = () => {
    setEdit(true);
  };

  const handleSave = async (e) => {
    await updateQuestionAnswer(data._id, info.question, info.answer, token);
    setEdit(false);
  };

  const handleCancle = async (e) => {
    setInfo({ question: data?.question, answer: data?.answer });
    setEdit(false);
  };

  return (
    <div className=" flex flex-col my-4 sm:flex-row md:flex-row ">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="question"
          id="question"
          className={`w-full font-bold text-lg bg-stone-200 rounded-lg p-3  ${!isEdit&&'cursor-not-allowed'}`}
          required
          value={index + ") " + info?.question}
          readOnly={!isEdit}
          onChange={handleChange}
        />

        <textarea
          type="text"
          name="answer"
          id="answer"
          className={`w-[100%]   bg-stone-100 rounded-lg my-1 p-1 text-gray-500${!isEdit&&'cursor-not-allowed' }`}
          value={info?.answer}
          rows="2"
          cols="50"
          readOnly={!isEdit}
          onChange={handleChange}
        />
        <div className={`${!isEdit && "hidden"} mb-3 `}>
          <button
            className="p-2 text-lg font-bold bg-orange-300 rounded-lg mx-3"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="p-2 text-lg font-bold bg-blue-300 rounded-lg mx-3"
            onClick={handleCancle}
          >
            Cancle
          </button>
        </div>
      </form>

      <button
        className={`bg-blue-400 p-2 mx-2 rounded-lg h-10 ${isEdit && "hidden"}`}
        onClick={handleClick}
      >
        {" "}
        Edit
      </button>
    </div>
  );
};

export default Question;
