import { Link } from "react-router-dom";
import RegisterForm from "../components/registerForm/RegisterForm";
const Registration = () => {
  return (
    <main className="register">
      <div className="register__banner">
        <h1>
          Discover new things on <br /> Super app
        </h1>
      </div>
      <div className="register__form--wrapper">
        <div className="register__form--subWrapper">
          <div className="register__form--heading">
            <h2>Super app</h2>
            <h5>Create your new account</h5>
          </div>
          <RegisterForm />
          <div className="register__terms_privacy">
            <p>
              By clicking on Sign up. you agree to Superapp{" "}
              <Link to={"#"} className="register__terms_privacy--links">
                Terms and Conditions of Use
              </Link>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <Link to={"#"} className="register__terms_privacy--links">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Registration;
