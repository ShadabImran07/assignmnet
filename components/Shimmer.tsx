import React from "react";

const ShimmerLoader = () => {
	return (
		<div className="grid grid-cols-3 gap-6">
			{Array.from({ length: 12 }).map((_, index) => (
				<div
					key={index}
					className="bg-white p-4 shadow-lg rounded-lg flex flex-col justify-between overflow-hidden relative"
				>
					{/* Shimmer Effect */}
					<div className="absolute inset-0 bg-gradient-to-r from-shimmer-dark via-shimmer-light to-shimmer-dark animate-shimmer"></div>

					<div className="flex flex-col items-center">
						<div className="bg-gray-200 rounded-full h-36 w-36 mb-4"></div>
						<div className="bg-gray-200 h-6 w-24 rounded mb-2"></div>
						<div className="bg-gray-200 h-4 w-32 rounded mb-4"></div>
						<div className="bg-gray-200 h-10 w-full rounded"></div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ShimmerLoader;
