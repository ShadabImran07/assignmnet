import React from "react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	// Generate an array of page numbers
	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	);

	// Handle page change
	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	return (
		<div className="flex items-center justify-center gap-2">
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className={`w-8 h-8 flex items-center justify-center border rounded-full ${
					currentPage === 1
						? "cursor-not-allowed opacity-50"
						: "cursor-pointer hover:bg-gray-200"
				} text-black`}
			>
				&lt;
			</button>

			{pageNumbers.map((page) => (
				<button
					key={page}
					onClick={() => handlePageChange(page)}
					className={`w-8 h-8 flex items-center justify-center border rounded-full ${
						page === currentPage
							? "bg-purple-500 text-white font-bold"
							: "bg-white text-black hover:bg-gray-100"
					}`}
				>
					{page}
				</button>
			))}

			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className={`w-8 h-8 flex items-center justify-center border border-black rounded-full ${
					currentPage === totalPages
						? "cursor-not-allowed opacity-50"
						: "cursor-pointer hover:bg-gray-200"
				} text-black`}
			>
				&gt;
			</button>
		</div>
	);
};

export default Pagination;
