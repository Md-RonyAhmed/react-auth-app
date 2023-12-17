/* eslint-disable react-hooks/rules-of-hooks */
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import auth from "../../firebase/firebse.config";

/* eslint-disable react/prop-types */
const EmailSignUp = ({ isVisible }) => {
  if (!isVisible) {
    return null; // If isVisible is false, don't render the component (hide it).
  }
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();
  let errorElement;
  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (error) {
    errorElement = <p className="text-red-600">{error?.message}</p>;
  }

  if (user) {
    navigate("/");
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    Swal.fire({
      icon: "success",
      title: "Sign up Successfully",
      toast: true,
      position: "top-start",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };
  return (
    <form onSubmit={handleRegister}>
      <div className="mt-4">
        <div>
          <label
            id="name"
            className="text-sm font-medium leading-none text-gray-800"
          >
            Full Name
          </label>
          <input
            aria-labelledby="name"
            name="name"
            type="text"
            className="bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            placeholder="Enter your full name"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <label
          id="email"
          className="text-sm font-medium leading-none text-gray-800"
        >
          Email
        </label>
        <input
          aria-labelledby="email"
          name="email"
          type="email"
          className="bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mt-4 w-full">
        <label
          htmlFor="pass"
          className="text-sm font-medium leading-none text-gray-800"
        >
          Password
        </label>
        <div className="relative flex items-center justify-center">
          <input
            id="pass1"
            name="password"
            type="password"
            className="bg-gray-100 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            placeholder="Enter your password"
            required
          />
          <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                fill="#71717A"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <input
          value="SIGN UP"
          type="submit"
          className="cursor-pointer w-full font-bold mr-3 inline-block rounded bg-primary px-8 py-3 text-md uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        />
      </div>
      {errorElement}
    </form>
  );
};

export default EmailSignUp;
