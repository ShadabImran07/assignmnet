// components/SearchBar.tsx

import React from "react";

interface SearchBarProps {
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ name, setName }) => {
	return (
		<div className="bg-purple-50 rounded-lg p-2">
			<div className="flex bg-white rounded-md shadow-sm p-2">
				<svg
					className="h-5 w-5 text-gray-400"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M10 20a8 8 0 100-16 8 8 0 000 16z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M21 21l-4.35-4.35"
					/>
				</svg>
				<input
					type="text"
					placeholder="Search By Name"
					name={name}
					onChange={(e) => setName(e.target.value)}
					className="ml-2 bg-transparent outline-none text-gray-600 w-full"
				/>
			</div>
		</div>
	);
};

export default SearchBar;
