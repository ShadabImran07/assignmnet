const experts = [
	{
		name: "Chatur Ramalingam",
		position: "Prof. at FSSAI",
		experience: "10+ Years Experience",
		categories: "Aquaculture",
		price: 12000,
		startRating: 4,
		topVoice: true,
	},
	{
		name: "Aman Verma",
		position: "Senior Scientist at ICAR",
		experience: "5+ Years Experience",
		categories: "Floriculture",
		price: 8500,
		startRating: 3,
		topVoice: false,
	},
	{
		name: "Rohit Sharma",
		position: "Head of Research at NABL",
		experience: "15+ Years Experience",
		categories: "Agriculture",
		price: 15000,
		startRating: 5,
		topVoice: true,
	},
	{
		name: "Anjali Singh",
		position: "Lecturer at IARI",
		experience: "8+ Years Experience",
		categories: "Horticulture",
		price: 9000,
		startRating: 3,
		topVoice: false,
	},
	{
		name: "Sneha Gupta",
		position: "Consultant at WHO",
		experience: "12+ Years Experience",
		categories: "Floriculture",
		price: 14000,
		startRating: 4,
		topVoice: true,
	},
	{
		name: "Rahul Joshi",
		position: "Director at APEDA",
		experience: "20+ Years Experience",
		categories: "Agriculture",
		price: 18000,
		startRating: 5,
		topVoice: false,
	},
	{
		name: "Priya Desai",
		position: "Agronomist at KVK",
		experience: "6+ Years Experience",
		categories: "Aquaculture",
		price: 11000,
		startRating: 2,
		topVoice: false,
	},
	{
		name: "Vikram Kumar",
		position: "Researcher at CIMAP",
		experience: "7+ Years Experience",
		categories: "Horticulture",
		price: 13000,
		startRating: 4,
		topVoice: false,
	},
	{
		name: "Neha Patel",
		position: "Scientist at NBPGR",
		experience: "11+ Years Experience",
		categories: "Aquaculture",
		price: 10000,
		startRating: 3,
		topVoice: true,
	},
	{
		name: "Pooja Iyer",
		position: "Biotechnologist at DBT",
		experience: "9+ Years Experience",
		categories: "Agriculture",
		price: 9500,
		startRating: 4,
		topVoice: false,
	},
	{
		name: "Amit Roy",
		position: "Analyst at ICAR",
		experience: "10+ Years Experience",
		categories: "Horticulture",
		price: 11500,
		startRating: 3,
		topVoice: false,
	},
	{
		name: "Kiran Mehta",
		position: "Professor at IISER",
		experience: "14+ Years Experience",
		categories: "Aquaculture",
		price: 19000,
		startRating: 5,
		topVoice: false,
	},
	{
		name: "Sunil Chawla",
		position: "Research Lead at INSA",
		experience: "13+ Years Experience",
		categories: "Horticulture",
		price: 16500,
		startRating: 4,
		topVoice: true,
	},
	{
		name: "Ramesh Rao",
		position: "Advisor at FSSAI",
		experience: "16+ Years Experience",
		categories: "Agriculture",
		price: 14500,
		startRating: 5,
		topVoice: false,
	},
	{
		name: "Suresh Menon",
		position: "Consultant at FAO",
		experience: "18+ Years Experience",
		categories: "Floriculture",
		price: 12500,
		startRating: 3,
		topVoice: false,
	},
	{
		name: "Geeta Reddy",
		position: "Lecturer at TNAU",
		experience: "4+ Years Experience",
		categories: "Aquaculture",
		price: 10500,
		startRating: 2,
		topVoice: false,
	},
	{
		name: "Harish Kaur",
		position: "Advisor at ICAR",
		experience: "12+ Years Experience",
		categories: "Horticulture",
		price: 20000,
		startRating: 4,
		topVoice: false,
	},
	{
		name: "Mohan Das",
		position: "Director at NDRI",
		experience: "19+ Years Experience",
		categories: "Agriculture",
		price: 17000,
		startRating: 5,
		topVoice: true,
	},
	{
		name: "Vivek Anand",
		position: "Scientist at ICMR",
		experience: "5+ Years Experience",
		categories: "Floriculture",
		price: 8000,
		startRating: 3,
		topVoice: false,
	},
	{
		name: "Ajay Nair",
		position: "Researcher at CRIDA",
		experience: "9+ Years Experience",
		categories: "Aquaculture",
		price: 12000,
		startRating: 4,
		topVoice: false,
	},
	{
		name: "Meena Sharma",
		position: "Consultant at NABARD",
		experience: "7+ Years Experience",
		categories: "Floriculture",
		price: 14000,
		startRating: 4,
		topVoice: false,
	},
	{
		name: "Lata Kapoor",
		position: "Agronomist at ICAR",
		experience: "13+ Years Experience",
		categories: "Aquaculture",
		price: 16000,
		startRating: 5,
		topVoice: true,
	},
	{
		name: "Kunal Thakur",
		position: "Biotechnologist at DBT",
		experience: "10+ Years Experience",
		categories: "Horticulture",
		price: 12500,
		startRating: 3,
		topVoice: false,
	},
	{
		name: "Rita Chauhan",
		position: "Lecturer at MANAGE",
		experience: "6+ Years Experience",
		categories: "Agriculture",
		price: 9000,
		startRating: 2,
		topVoice: false,
	},
	{
		name: "Nisha Jain",
		position: "Advisor at NITI Aayog",
		experience: "17+ Years Experience",
		categories: "Aquaculture",
		price: 19000,
		startRating: 5,
		topVoice: false,
	},
	{
		name: "Rajesh Gupta",
		position: "Director at MoAFW",
		experience: "15+ Years Experience",
		categories: "Agriculture",
		price: 17500,
		startRating: 5,
		topVoice: false,
	},
	{
		name: "Shruti Deshmukh",
		position: "Researcher at NBRI",
		experience: "8+ Years Experience",
		categories: "Floriculture",
		price: 11500,
		startRating: 3,
		topVoice: false,
	},
	{
		name: "Alok Tiwari",
		position: "Senior Scientist at ICAR",
		experience: "20+ Years Experience",
		categories: "Horticulture",
		price: 20000,
		startRating: 5,
		topVoice: false,
	},
	{
		name: "Deepak Malik",
		position: "Consultant at FSSAI",
		experience: "11+ Years Experience",
		categories: "Agriculture",
		price: 13500,
		startRating: 4,
		topVoice: true,
	},
	{
		name: "Sakshi Khanna",
		position: "Research Lead at IARI",
		experience: "14+ Years Experience",
		categories: "Aquaculture",
		price: 15500,
		startRating: 4,
		topVoice: false,
	},
];

const filterExperts = (experts: any[], selectedFilters: string[]) => {
	// Convert filters to numeric ranges
	const filterRanges = selectedFilters
		.map((filter) => {
			const match = filter.match(/^(\d+)\+ Years$/);
			return match ? parseInt(match[1], 10) : null;
		})
		.filter(Number.isInteger);

	return experts.filter((expert) => {
		const match = expert.experience.match(/(\d+)\+ Years/);
		if (match) {
			const experienceYears = parseInt(match[1], 10);
			return filterRanges.some(
				(range) => range !== null && experienceYears >= range
			);
		}
		return false;
	});
};

export async function POST(req: Request): Promise<any> {
	const { page, category, experience, priceRange, rating, name } =
		await req.json();
	const pageSize = 10;
	const startIndex = (page - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const delay = (ms: number) =>
		new Promise((resolve) => setTimeout(resolve, ms));
	try {
		await delay(1000);
		let filteredExperts = experts;

		// Filter by name (case-insensitive)
		if (name) {
			filteredExperts = filteredExperts.filter((expert) =>
				expert.name.toLowerCase().includes(name.toLowerCase())
			);
		}

		// Filter by category (array of strings)
		if (category && category.length > 0) {
			filteredExperts = filteredExperts.filter((expert) =>
				category.includes(expert.categories)
			);
		}

		// Filter by experience (array of strings)
		if (experience && experience.length > 0) {
			filteredExperts = filterExperts(filteredExperts, experience);
		}

		// Filter by price range (min and max)
		if (priceRange && priceRange.length === 2) {
			const [minPrice, maxPrice] = priceRange;
			filteredExperts = filteredExperts.filter(
				(expert) => expert.price >= minPrice && expert.price <= maxPrice
			);
		}

		// Filter by rating (array of strings)
		if (rating && rating.length > 0) {
			filteredExperts = filteredExperts.filter((expert) =>
				rating.includes(expert.startRating)
			);
		}

		// Pagination logic
		const totalPages = Math.ceil(filteredExperts.length / pageSize);
		const result = filteredExperts.slice(startIndex, endIndex);
		return Response.json({ result, totalPages });
	} catch (error) {
		console.error("Error during POST request:", error);
	}
}
