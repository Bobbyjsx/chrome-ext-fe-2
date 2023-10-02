"use client";
import Logo from "../../components/navs/Logo";
import Image from "next/image";

const Auth = () => {
	const authOptions = [
		{
			name: "Google",
			icon: "/assets/Google.svg",
			href: "#",
		},
		{
			name: "Facebook",
			icon: "/assets/Facebook.svg",
			href: "#",
		},
	];
	return (
		<main className="gap-y-10 w-full h-screen justify-center flex flex-col p-24">
			<Logo />
			<div className="w-full flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center items-center w-[475px] gap-y-10">
					<div className="w-96 text-center flex flex-col mx-auto gap-y-2">
						<p className="font-inter font-bold text-primary text-4xl">
							Log in or Sign up
						</p>
						<p className="text-sm font-thin w-80 flex mx-auto text-center">
							Join millions of others in sharing
							successful moves on HelpMeOut.
						</p>
					</div>
					<div className="flex flex-col space-y-5">
						{authOptions.map((option, index) => {
							return (
								<button
									key={index}
									className=" border-2 border-primary rounded-xl w-[475px] h-[42px] flex justify-center items-center">
									<div className="flex justify-start gap-10 items-center w-[260px] h-full">
										<Image
											width={1000}
											height={1000}
											className="w-7 h-7"
											src={option.icon}
											alt={option.name}
										/>

										<p>
											Continue With{" "}
											{option.name}
										</p>
									</div>
								</button>
							);
						})}
					</div>
					<div className="text-gray-400 flex items-center justify-center gap-x-3">
						<hr className="font-bold text-black w-[200px]" />
						<p className="text-sm">Or</p>
						<hr className="font-bold text-black w-[200px]" />
					</div>
					<form className="flex flex-col space-y-3">
						<label
							htmlFor="email"
							className="s">
							Email
						</label>
						<input
							type="text"
							id="email"
							placeholder="Enter your email address"
							className="border-2 border-gray-500 pl-5 rounded-xl w-[475px] h-[42px] flex justify-center items-center"
						/>
						<label
							htmlFor="password"
							className="s">
							Password
						</label>
						<input
							type="password"
							placeholder="Enter your password"
							id="password"
							className="border-2 border-gray-500 pl-5 rounded-xl w-[475px] h-[42px] flex justify-center items-center"
						/>
					</form>
					<button
						type="submit"
						className="bg-primary text-white rounded-xl w-[475px] h-[42px] flex justify-center items-center">
						Sign Up
					</button>
				</div>
			</div>
		</main>
	);
};
export default Auth;
