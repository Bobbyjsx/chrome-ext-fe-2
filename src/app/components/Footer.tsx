import Link from "next/link";

const Footer = () => {
	return (
		<footer className="w-full bg-primary text-white font-sans flex justify-center- items-center py-20 ">
			<div className="grid grid-cols-2 md:grid-cols-4 mx-auto w-full place-items-center md:place-items-stretch gap-y-7">
				<section className=" flex flex-col col-span-2 md:col-span-1">
					<h1 className="font-normal text-lg  flex gap-3 items-center justify-center">
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_597_4401)">
								<path
									d="M31.1401 16.8422C30.5804 14.9123 29.5621 13.1465 28.1721 11.6954C26.7821 10.2443 25.0617 9.15104 23.1577 8.50888C21.2766 7.96133 19.2993 7.82678 17.3614 8.11444C15.4234 8.40211 13.5705 9.10519 11.9296 10.1755C11.7946 10.3109 11.6252 10.4068 11.4398 10.4532C11.2544 10.4996 11.0598 10.4945 10.877 10.4387C10.5084 10.3193 10.1763 10.108 9.91205 9.82467C9.71967 9.47756 9.65746 9.0732 9.73661 8.68432C9.78687 8.49766 9.87514 8.3234 9.9959 8.17245C10.1167 8.0215 10.2673 7.89713 10.4384 7.80712C15.0875 5.08782 19.6489 4.38607 24.0349 5.78958C26.1942 6.5078 28.1656 7.69977 29.8047 9.27823C31.4439 10.8567 32.7094 12.7817 33.5085 14.9124H39.3857C38.184 10.172 35.2871 6.03622 31.2427 3.28695C27.1983 0.537687 22.2868 -0.634505 17.4368 -0.00799665C12.5868 0.618511 8.13434 3.0003 4.92135 6.68704C1.70837 10.3738 -0.0425069 15.11 -0.000228394 20.0001C-0.000228394 20.7896 0.0874909 21.4913 0.0874909 22.2808H7.54363C7.82839 22.2647 8.11069 22.3415 8.34801 22.4997C8.58532 22.6579 8.76481 22.8889 8.85942 23.158C9.43235 25.0812 10.4553 26.8403 11.8434 28.2895C13.2316 29.7387 14.945 30.8363 16.8419 31.4913C18.723 32.0389 20.7002 32.1734 22.6382 31.8858C24.5761 31.5981 26.429 30.895 28.0699 29.8247C28.205 29.6894 28.3743 29.5934 28.5597 29.547C28.7452 29.5007 28.9398 29.5057 29.1226 29.5615C29.4911 29.6809 29.8232 29.8922 30.0875 30.1755C30.2799 30.5227 30.3421 30.927 30.2629 31.3159C30.2127 31.5026 30.1244 31.6768 30.0036 31.8278C29.8829 31.9787 29.7323 32.1031 29.5612 32.1931C26.917 33.9723 23.8008 34.9193 20.6138 34.9124C19.0386 34.9005 17.4732 34.6642 15.9647 34.2106C13.7963 33.5096 11.8162 32.3236 10.1747 30.7429C8.53315 29.1622 7.27338 27.2282 6.491 25.0878H0.701526C1.96964 29.7502 4.88277 33.796 8.90243 36.4771C12.9221 39.1583 17.7765 40.2936 22.5683 39.6732C27.3601 39.0529 31.7653 36.7188 34.9696 33.1023C38.174 29.4859 39.9608 24.8317 39.9998 20.0001C40.0161 19.268 39.9868 18.5356 39.9121 17.8071H32.5436C32.2445 17.7874 31.9563 17.6873 31.7093 17.5175C31.4623 17.3477 31.2657 17.1144 31.1401 16.8422Z"
									fill="white"
								/>
								<path
									d="M20.0841 28.7496C21.811 28.733 23.4944 28.2057 24.9222 27.2342C26.3501 26.2627 27.4585 24.8904 28.1078 23.2902C28.7572 21.6899 28.9185 19.9333 28.5715 18.2416C28.2244 16.5498 27.3845 14.9986 26.1575 13.7833C24.9305 12.568 23.3713 11.7429 21.6763 11.4121C19.9813 11.0812 18.2263 11.2593 16.6324 11.924C15.0384 12.5887 13.6768 13.7102 12.719 15.1472C11.7612 16.5843 11.2501 18.2726 11.25 19.9996C11.2499 21.1558 11.479 22.3005 11.924 23.3676C12.369 24.4347 13.021 25.4031 13.8425 26.2167C14.6639 27.0303 15.6385 27.6731 16.7098 28.1078C17.7811 28.5426 18.928 28.7607 20.0841 28.7496Z"
									fill="#120B48"
								/>
							</g>
							<defs>
								<clipPath id="clip0_597_4401">
									<rect
										width="40"
										height="40"
										fill="white"
									/>
								</clipPath>
							</defs>
						</svg>
						HelpMeOut
					</h1>

					<Link
						href="#"
						className="font-thin text-white tracking-wide"></Link>
					<Link
						href="#"
						className="font-thin text-white tracking-wide"></Link>
					<Link
						href="#"
						className="font-thin text-white tracking-wide"></Link>
				</section>
				<section className="flex flex-col gap-3">
					<h1 className="font-semibold mb-3 text-white tracking-wide">
						Menu
					</h1>
					<Link
						href="/"
						className="font-thin text-white tracking-wide">
						Home
					</Link>
					<Link
						href="/pages/video-repository"
						className="font-thin text-white tracking-wide">
						Converter
					</Link>
					<Link
						href="/#how-it-works"
						className="font-thin text-white tracking-wide">
						How It Works
					</Link>
				</section>
				<section className="flex flex-col gap-3">
					<h1 className="font-semibold mb-3 text-white tracking-wide">
						About Us
					</h1>
					<Link
						href="#"
						className="font-thin text-white tracking-wide">
						About
					</Link>
					<Link
						href="#"
						className="font-thin text-white tracking-wide">
						Contact Us
					</Link>
					<Link
						href="#"
						className="font-thin text-white tracking-wide">
						Privacy Policy
					</Link>
				</section>
				<section className="flex flex-col gap-3">
					<h1 className="font-semibold mb-3 text-white tracking-wide">
						Screen Record
					</h1>
					<Link
						href="/pages/video-repository"
						className="font-thin text-white tracking-wide">
						Browser Window
					</Link>
					<Link
						href="/pages/video-repository"
						className="font-thin text-white tracking-wide">
						Desktop
					</Link>
					<Link
						href="/pages/video-repository"
						className="font-thin text-white tracking-wide">
						Application
					</Link>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
