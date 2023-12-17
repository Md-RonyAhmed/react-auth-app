/* eslint-disable react-hooks/rules-of-hooks */
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import Swal from "sweetalert2";
import auth from "../../firebase/firebse.config";

/* eslint-disable react/prop-types */
const EmailLogin = ({ isVisible }) => {
  if (!isVisible) {
    return null; // If isVisible is false, don't render the component (hide it).
  }
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  let errorElement;

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/");
    Swal.fire({
      icon: "success",
      title: "Login Successfully",
      toast: true,
      position: "top-start",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  }

  if (error) {
    errorElement = <p className="text-red-600">Error: {error?.message}</p>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-4">
        <label
          id="email"
          className="text-sm font-medium leading-none text-gray-800 mb-4"
        >
          Email
        </label>
        <div className="relative flex-col items-center justify-center">
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
            type="email"
            className="bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3"
            placeholder="Enter your email"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
      </div>
      <div className="mt-4 w-full">
        <label
          htmlFor="pass"
          className="text-sm font-medium leading-none text-gray-800"
        >
          Password
        </label>
        <div className="relative flex-col items-center justify-center">
          <input
            id="pass1"
            name="password"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 6,
                message: "Must be 6 characters or longer",
              },
            })}
            className="bg-gray-100 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            placeholder="Enter your password"
            required
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
      </div>
      <div className="mt-8">
        <input
          value="Login"
          type="submit"
          // disabled={!agree}
          className="cursor-pointer w-full font-bold mr-3 inline-block rounded bg-primary px-8 py-3 text-md uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        />
      </div>
      {errorElement}
    </form>
  );
};

export default EmailLogin;
