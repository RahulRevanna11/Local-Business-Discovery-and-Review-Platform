import loginImg from "../assets/download.jpeg"
import Template from "../component/Auth/Template"
function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Login for Local Love."
      description2="Experience Local Living, Log In Here."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login