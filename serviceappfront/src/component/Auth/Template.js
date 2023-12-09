import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] mx-4 md:mx-10 lg:mx-20 my-12 mt-[7rem] rounded-lg ">
     
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="z-10 mx-auto flex w-full max-w-screen-xl flex-col-reverse justify-around gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-10 bg-purple-700 text-white rounded-lg shadow-lg bg-slate-400">
          <div className="mx-auto w-full max-w-[450px] md:mx-0 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-base md:text-lg lg:text-xl">
              <span className="font-light">{description1}</span> <br />
              <span className="font-semibold italic">{description2}</span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto w-full max-w-[450px] md:mx-0 my-8 md:my-0">
            <img
              src={image}
              alt="Students"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;
