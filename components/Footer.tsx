import React from "react";

const Footer = () => {
	return (
		<>
			<footer className="bg-white text-gray-600 p-4 mt-4">
				<div className="container mx-auto flex justify-between">
					<div className="w-1/3">
						<h4 className="font-bold text-xl text-purple-700">E-NEST</h4>
						<p>
							Empowering Agri <br />
							and food technology
						</p>
					</div>
					<div className="w-1/3">
						<h4 className="font-bold text-purple-700">Quick Link</h4>
						<ul className="gap-2">
							<li>Program</li>
							<li>Test Series</li>
							<li>Skill Connect</li>
							<li>Expert Connect</li>
							<li>Study Abroad</li>
						</ul>
					</div>
					<div className="w-1/3">
						<h4 className="font-bold text-purple-700">Company</h4>
						<ul>
							<li>About us</li>
							<li>Why choose us</li>
							<li>Policies</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
					<div className="w-1/3">
						<h4 className="font-bold text-purple-700">Security</h4>
						<ul>
							<li>Report</li>
							<li>Trademark Notice</li>
							<li>Advertise with us</li>
							<li>Help & Support</li>
						</ul>
					</div>
					<div className="w-1/3">
						<h4 className="font-bold text-purple-700">Incubated by</h4>
						<ul>
							<li>MSME</li>
							<li>IIMA</li>
						</ul>
					</div>
				</div>
			</footer>
			<div className="text-center mt-4 bg-purple-700 text-white w-full p-2">
				<p>
					Copyrights &copy; 2024 AgriVision4U Pvt. Ltd. All rights reserved.
				</p>
			</div>
		</>
	);
};

export default Footer;
