"use client";

import Image from "next/image";
import React, { useEffect } from "react";

import type { NextPage } from "next";
import NavBar from "@/components/NavBar";
import Filter from "@/components/Filter";
import ExpertList from "@/components/ExpertList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import ShimmerLoader from "@/components/Shimmer";
import useDebounce from "@/hooks/useDebounce";

interface Expert {
	name: string;
	position: string;
	experience: string;
	categories: "Agriculture" | "Floriculture" | "Aquaculture" | "Horticulture";
	price: number;
	startRating: 1 | 2 | 3 | 4 | 5;
	topVoice: boolean;
}

const Home: NextPage = () => {
	const [data, setData] = React.useState<Expert[]>([]);
	const [totalPages, setTotalPages] = React.useState<number>(0);
	const [page, setPage] = React.useState(1);
	const [category, setCategory] = React.useState<string[]>([]);
	const [name, setName] = React.useState<string>("");
	const [experience, setExperience] = React.useState<string[]>([]);
	const [priceRange, setPriceRange] = React.useState<number[]>([]);
	const [rating, setRating] = React.useState<number[]>([]);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const debouncedSearch = useDebounce(name, 500);
	const debouncePriceSearch = useDebounce(priceRange, 500);

	React.useEffect(() => {
		const init = async () => {
			setIsLoading(true);
			const res = await fetch("/api/experts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					page,
					category,
					experience,
					priceRange: debouncePriceSearch,
					rating,
					name: debouncedSearch,
				}),
			});
			const data = await res.json();
			setData(data?.result);
			setTotalPages(data?.totalPages);
			setIsLoading(false);
		};
		init();
	}, [
		page,
		category,
		experience,
		debouncePriceSearch,
		rating,
		debouncedSearch,
	]);

	const handlePageChange = (page: number) => {
		setPage(page);
		// Fetch new data based on the page if necessary
	};

	return (
		<div className="bg-white min-h-screen">
			<div className="bg-purple-50 p-4">
				<NavBar />
				<Header />

				<div className="container flex justify-end items-center mt-5 mx-auto px-4 sm:px-6 lg:px-8">
					<SearchBar
						name={name}
						setName={setName}
					/>
				</div>

				<div className="container mx-auto flex flex-col lg:flex-row py-4 px-4 sm:px-6 lg:px-8">
					<Filter
						setCategory={setCategory}
						setExperience={setExperience}
						setPriceRange={setPriceRange}
						setRating={setRating}
						category={category}
						experience={experience}
						priceRange={priceRange}
						rating={rating}
					/>
					<div className="w-full lg:w-3/4 lg:pl-12 mt-4 lg:mt-0">
						{isLoading ? (
							<ShimmerLoader />
						) : data.length > 0 ? (
							<ExpertList data={data} />
						) : (
							<div className="font-bold text-purple-700 text-center mt-6 flex justify-center items-center">
								No Result Found
							</div>
						)}
					</div>
				</div>

				<div className="py-4 px-4 sm:px-6 lg:px-8">
					<Pagination
						currentPage={page}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
