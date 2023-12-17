import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Loading";
import auth from "../../firebase/firebse.config";
const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();

  let errorElement;

  if (googleLoading || githubLoading) {
    return <Loading></Loading>;
  }

  if (googleError || githubError) {
    errorElement = (
      <p className="text-red-600">
        Error: {googleError?.message}
        {githubError?.message}
      </p>
    );
  }

  if (googleUser || githubUser) {
    navigate("/");
    Swal.fire({
      icon: "success",
      title: "Log In Successfully",
      toast: true,
      position: "top-start",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  }
  return (
    <div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        aria-label="Continue with google"
        type="button"
        className="focus:outline-none focus:ring-2 focus:ring-offset-1 py-3.5 px-4 rounded-lg flex items-center w-full mt-10 text-center bg-red-600 justify-center"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
            fill="white"
          />
          <path
            d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
            fill="white"
          />
          <path
            d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
            fill="white"
          />
          <path
            d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
            fill="white"
          />
        </svg>
        <p className="text-xl font-bold ml-4 text-white">Sign up with Google</p>
      </button>

      <button
        onClick={() => signInWithGithub()}
        aria-label="Continue with Github"
        type="button"
        className="focus:outline-none focus:ring-2 focus:ring-offset-1 py-3.5 px-4 rounded-lg flex items-center w-full mt-10 text-center bg-blue-600 justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="33"
          height="33"
          viewBox="0 0 48 48"
        >
          <path
            fill="white"
            d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
          ></path>
          <path
            fill="#2563eb"
            d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
          ></path>
        </svg>

        <p className="text-xl font-bold ml-4 text-white">Sign up with Github</p>
      </button>
    </div>
  );
};

export default SocialLogin;
