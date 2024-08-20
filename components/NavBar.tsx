import React from "react";
import Image from "next/image";
import logo from "../public/logo/e-nest-logo.png";

const NavBar = () => {
	return (
		<nav className="bg-white shadow-lg p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center">
					{/* <Image
						src="/logo/e-nest-logo.png"
						alt="E-NEST Logo"
						height={8}
						width={8}
						className="h-8 w-8 mr-3"
					/> */}
					<h1 className="text-xl font-bold text-purple-700">E-NEST</h1>
				</div>
				<ul className="flex space-x-6">
					<li>
						<a
							href="#"
							className="text-gray-700 hover:text-purple-500"
						>
							Program
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-gray-700 hover:text-purple-500"
						>
							Test Series
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-gray-700 hover:text-purple-500"
						>
							Skill Connect
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-gray-700 hover:text-purple-500"
						>
							Expert Connect
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-gray-700 hover:text-purple-500"
						>
							More
						</a>
					</li>
				</ul>
				<div className="flex items-center">
					<Image
						src="/logo/card-photo.avif"
						alt="User Avatar"
						height={8}
						width={8}
						className="h-8 w-8 rounded-full ml-4"
					/>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
