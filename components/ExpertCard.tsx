import React from "react";
import Image from "next/image";

interface ExpertCardProps {
	name: string;
	position: string;
	experience: string;
	topVoice: boolean;
}

const ExpertCard: React.FC<ExpertCardProps> = ({
	name,
	position,
	experience,
	topVoice,
}) => {
	const colorClass = "bg-purple-50";
	return (
		<>
			<div
				className={`relative rounded-lg shadow-md p-6 bg-white ${colorClass} overflow-hidden`}
			>
				{/* Wave Background */}
				<div
					className="absolute inset-x-0 top-0 h-40 bg-indigo-100 w-full "
					style={{ clipPath: "circle(73.6% at 50% 2%)" }}
				></div>

				{/* Top Voice Badge */}
				{topVoice && (
					<div className="absolute top-4 left-4 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 z-10">
						<Image
							src="/logo/start.png"
							alt="star"
							height={20}
							width={20}
							className="rounded-full"
						/>
						Top Voice
					</div>
				)}

				{/* Profile Image */}
				<div className="relative mt-12 ">
					<Image
						src="/logo/card-photo.avif"
						alt={name}
						height={140}
						width={140}
						className="rounded-full mx-auto mb-4 relative z-10 border-8 border-white"
					/>
				</div>

				{/* Name and Position */}
				<h2 className="text-lg font-semibold text-gray-600 text-center mb-2">
					{name}
				</h2>
				<p className="text-sm text-center text-gray-600 mb-4">{position}</p>

				{/* Experience */}
				<div className="border border-gray-700 rounded-full p-2 mx-10">
					<p className="text-center text-gray-600 text-sm">{experience}</p>
				</div>

				{/* Know More Button */}
				<button className="mt-4 w-full bg-purple-700 text-white py-2 rounded-full hover:bg-purple-800">
					Know More
				</button>
			</div>
		</>
	);
};

export default ExpertCard;
