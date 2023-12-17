import { useState } from "react";
import EmailLogin from "./EmailLogin";

const EmailLoginButton = () => {
	const [isEmailVisible, setIsEmailVisible] = useState(false);

	const handleEmailButtonClick = () => {
		setIsEmailVisible(true);
	};
	return (
		<div>
			<button
				onClick={handleEmailButtonClick}
				aria-label="Continue with email"
				type="button"
				className="focus:outline-none focus:ring-2 focus:ring-offset-1 py-3.5 px-4 rounded-lg flex items-center w-full mt-10 text-center bg-green-400 justify-center"
			>
				<p className="text-xl font-bold ml-4 text-white">
					Login with Email
				</p>
			</button>
			<EmailLogin isVisible={isEmailVisible} />
		</div>
	);
};

export default EmailLoginButton;