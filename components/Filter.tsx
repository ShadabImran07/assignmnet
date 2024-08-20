import React, { useState } from "react";
import Slider from "react-slider";

interface filterProps {
	setCategory: React.Dispatch<React.SetStateAction<string[]>>;
	setExperience: React.Dispatch<React.SetStateAction<string[]>>;
	setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
	setRating: React.Dispatch<React.SetStateAction<number[]>>;
	category: string[];
	priceRange: number[];
	rating: number[];
	experience: string[];
}

const Filter: React.FC<filterProps> = ({
	setCategory,
	setExperience,
	setPriceRange,
	setRating,
	category,
	priceRange,
	rating,
	experience,
}) => {
	const [min, setMinValue] = useState(100);
	const [max, setMaxValue] = useState(20000);
	const [values, setValues] = useState([min, max]);

	const handleSliderChange = (newValues: number[]) => {
		setValues(newValues);
		setPriceRange(newValues);
	};

	const handleCheckboxChange = (category: string) => {
		setCategory(
			(prevState) =>
				prevState.includes(category)
					? prevState.filter((item) => item !== category) // Remove category if already selected
					: [...prevState, category] // Add category if not selected
		);
	};

	const handleExperienceChange = (experience: string) => {
		setExperience(
			(prevState) =>
				prevState.includes(experience)
					? prevState.filter((item) => item !== experience) // Remove category if already selected
					: [...prevState, experience] // Add category if not selected
		);
	};

	const handleRatingChange = (rating: number) => {
		setRating(
			(prevState) =>
				prevState.includes(rating)
					? prevState.filter((item) => item !== rating) // Remove category if already selected
					: [...prevState, rating] // Add category if not selected
		);
	};

	const percentage = (value: number) => ((value - min) / (max - min)) * 100;

	const getLabelPositionStyle = (value: number) => ({
		left: `${percentage(value)}%`,
		transform: "translateX(-50%)",
	});

	return (
		<aside className="w-full md:w-1/4 p-4 bg-white shadow-lg rounded-lg text-black divide-y divide-gray-300 h-auto md:h-[40%]">
			<h2 className="text-xl font-bold mb-4">Filter</h2>
			{/* Categories */}
			<div className="py-4">
				<h3 className="font-semibold mb-2 text-purple-700">Categories</h3>
				<ul>
					{["Agriculture", "Floriculture", "Aquaculture", "Horticulture"].map(
						(categorys) => (
							<li key={categorys}>
								<label className="flex items-center space-x-2">
									<input
										type="checkbox"
										checked={category.includes(categorys)}
										onChange={() => handleCheckboxChange(categorys)}
									/>
									<span>{categorys}</span>
								</label>
							</li>
						)
					)}
				</ul>
			</div>
			{/* Experience */}
			<div className="py-4">
				<h3 className="font-semibold mb-2 text-purple-700">Experience</h3>
				<ul>
					{["5+ Years", "10+ Years", "15+ Years", "20+ Years"].map((exp) => (
						<li key={exp}>
							<label className="flex items-center space-x-2">
								<input
									type="checkbox"
									checked={experience.includes(exp)}
									onChange={() => handleExperienceChange(exp)}
								/>
								<span>{exp}</span>
							</label>
						</li>
					))}
				</ul>
			</div>
			{/* Price Range */}
			<div className="p-4">
				<div className="flex justify-between items-center mb-10">
					<span className="text-sm font-semibold">Price range</span>
					<span className="text-xs text-gray-500">
						Average Price ₹{Math.round((values[0] + values[1]) / 2)}
					</span>
				</div>
				<div className="relative">
					<Slider
						className="relative h-4"
						thumbClassName="w-6 h-6 bg-purple-600 rounded-full border-2 border-white focus:outline-none"
						min={min}
						max={max}
						value={values}
						onChange={handleSliderChange}
						renderTrack={(props, state) => (
							<div
								{...props}
								className="h-1"
								style={{
									...props.style,
									background: `linear-gradient(
                  to right,
                  #e5e7eb 0%,
                  #e5e7eb ${percentage(values[0])}%,
                  #7c3aed ${percentage(values[0])}%,
                  #7c3aed ${percentage(values[1])}%,
                  #e5e7eb ${percentage(values[1])}%,
                  #e5e7eb 100%
                )`,
								}}
							/>
						)}
					/>
					<div
						className="absolute -top-8 transform -translate-x-1/2"
						style={getLabelPositionStyle(values[0])}
					>
						<div className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-sm">
							₹{values[0]}
						</div>
					</div>
					<div
						className="absolute -top-8 transform -translate-x-1/2"
						style={getLabelPositionStyle(values[1])}
					>
						<div className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-sm">
							₹{values[1]}
						</div>
					</div>
				</div>
			</div>
			{/* Ratings */}
			<div className="py-4">
				<h3 className="font-semibold mb-2 text-purple-700">Ratings</h3>
				<ul>
					{[5, 4, 3, 2, 1].map((stars) => (
						<li key={stars}>
							<label className="flex items-center space-x-2">
								<input
									type="checkbox"
									checked={rating.includes(stars)}
									onChange={() => handleRatingChange(stars)}
								/>
								<div className="flex">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											xmlns="http://www.w3.org/2000/svg"
											fill={i < stars ? "currentColor" : "none"}
											stroke="currentColor"
											strokeWidth={2}
											className={`w-5 h-5 ${
												i < stars ? "text-purple-700" : "text-gray-300"
											}`}
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 17.27l-5.18 2.73 1-5.73L2 9.24l5.81-.48L12 3.5l2.19 5.26 5.81.48-4.82 4.03 1 5.73L12 17.27z"
											/>
										</svg>
									))}
								</div>
							</label>
						</li>
					))}
				</ul>
			</div>
			{/* State */}
			<div className="py-4">
				<h3 className="font-semibold mb-2 text-purple-700">State</h3>
				<select className="w-full p-2 border rounded">
					<option>Select State</option>
				</select>
			</div>
		</aside>
	);
};

export default Filter;
