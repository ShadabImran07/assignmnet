import React from "react";
import ExpertCard from "./ExpertCard";

interface Expert {
	name: string;
	position: string;
	experience: string;
	categories: "Agriculture" | "Floriculture" | "Aquaculture" | "Horticulture";
	price: number;
	startRating: 1 | 2 | 3 | 4 | 5;
	topVoice: boolean;
}
interface ExpertListProps {
	data: Expert[];
}

const ExpertList: React.FC<ExpertListProps> = ({ data }) => {
	return (
		<>
			<div className="grid grid-cols-3 gap-6">
				{data.map((expert, index) => (
					<ExpertCard
						key={index}
						{...expert}
					/>
				))}
			</div>
		</>
	);
};

export default ExpertList;
