import React from "react";

const Header = () => {
	return (
		<header className="bg-white py-10 shadow-lg rounded-lg container mx-auto px-4 sm:px-6 lg:px-10 mt-10">
			<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-700 mb-4">
				Find your Expert
			</h1>
			<div className="flex flex-col lg:flex-row lg:w-[50%]">
				<p className="text-gray-600 text-sm sm:text-base lg:text-lg">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry’s standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
			</div>
		</header>
	);
};

export default Header;
