import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"

import frameImg from "../../assets/download.jpeg"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] place-items-center  mx-28 my-20">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-around gap-y-12
         py-12 md:flex-row md:gap-y-0 md:gap-x-10  bg-green-400 rounded-lg">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem]  leading-[2.375rem] text-richblack-5 font-bold">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-white">{description1}</span>{" "}
              <br></br>
              <span className="font-edu-sa font-bold italic text-white">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0 my-52">
            
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top- right-4 z-10 rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template