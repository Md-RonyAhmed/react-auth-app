/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import EmailLoginButton from "./EmailLoginButton";

const LoginForm = () => {
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
                    Already Sign up? Login!
                  </p>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
                  >
                    Don't have account or sign up?{" "}
                    <Link
                      to="/signup"
                      className="hover:text-gray-500 focus:text-gray-500 focus:outline-none underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
                    >
                      {" "}
                      Sign up here
                    </Link>
                  </p>

                  <SocialLogin></SocialLogin>
                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                      Or
                    </p>
                  </div>

                  <EmailLoginButton />

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

export default LoginForm;
