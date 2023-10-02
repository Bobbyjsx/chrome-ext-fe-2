"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown() {
	return (
		//fixed top-16 w-56 text-right
		<div className=" w-56 text-right">
			<Menu
				as="div"
				className="inline-block text-left text-primary">
				<div>
					<Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-white px-4 py-2 text-sm font-medium   hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-opacity-75  text-primary ">
						<User className="text-zinc-700 fill-white/30 rounded-full mr-2  h-7 w-7" />{" "}
						John Mark
						<ChevronDownIcon
							className="ml-2 -mr-1 h-5 w-5 text-zinc-800 hover:text-zinc-700"
							aria-hidden="true"
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95">
					<Menu.Items className="absolute right-[7%] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
						<div className="px-1 py-1 ">
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active
												? "bg-violet-500 text-white"
												: "text-gray-900"
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
										Edit
									</button>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
function User(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
	);
}
