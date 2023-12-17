import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import EmailSignUpButton from "./EmailSignUpButton";

const RegistrationForm = () => {
  return (
    <>
      <section className="h-screen px-10">
        <div className="h-full">
          <div>
            <div className="h-full w-full py-16 px-4">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-white bg-transparent shadow-2xl rounded lg:w-2/5 md:w-1/2 w-full h-auto p-10 mt-16">
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
                  >
                    New to Register App? SignUp!
                  </p>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
                  >
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="hover:text-gray-500 focus:text-gray-500 focus:outline-none underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
                    >
                      {" "}
                      LogIn here
                    </Link>
                  </p>

                  <SocialLogin></SocialLogin>
                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                      Or
                    </p>
                  </div>

                  <EmailSignUpButton />

                  {/* {errorElement} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationForm;
