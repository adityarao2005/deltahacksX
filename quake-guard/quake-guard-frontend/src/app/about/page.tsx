import React from "react";

export default function AboutPage() {
	return (
		<div className='flex-1 grid grid-cols-2 gap-4 bg-black'>
			<div>
				<div className='bg-cover mt-3 h-80 rounded-2xl bg-[url("/earthquake2.jpg")] mb-4'></div>
				<h1 className='text-4xl font-bold text-gray-100 mb-4'>
					Solution
				</h1 > 
				<p className = 'text-gray-100'>QuakeGuard relies on Earthquake APIs, Pandas analysis, and a machine learning model to accurately illustrate the odds of an earthquake occuring in the specified area, its strength, and the expected date that it will happen. Why are we different? </p>
				<div>
					<h1 className='text-3xl font-bold text-gray-100'>
						AI and Machine Learning Powered
					</h1>
					<p className='text-gray-100'>
						QuakeGuard uses AI and Machine Learning to predict earthquakes with higher accuracy, enabling timely and informed decisions by authorities and communities!
					</p>
				</div>
				<div>
					<h1 className='text-3xl font-bold text-gray-100'>
						Global Community & Support
					</h1>
					<p className='text-gray-100'>
						Unlike traditional models, QuakeGuard involves an active amount of users to allocatively rationing resources to high-risk areas, helping ones in need!
					</p>
					<h1 className='text-3xl font-bold text-gray-100'>
						Hollistic Analysis
					</h1>
					<p className='text-gray-100'>
						Our analysis considers langitude and latitude, depth of earthquake, date and its Richter rating from a diverse dataset providing more accurate outputs and more comprehensive summary results! 
					</p>
				</div>
			</div>
			<div className='flex-1'>
				<div className='pb-4'>
					<h1 className='text-3xl font-bold text-gray-100'>
						The Product
					</h1>
					<p className='text-gray-100'>
						As rising condo and urban living is increasing, dangers due to earthquakes continue to rise. As such the need for a proactive and data driven earthquake risk prediction has never been more critical. Our initiative, QuakeGuard, harnesses ML capabilities to revolunionize earthquake risk assesment. QuakeGuard is commited in providin information to empowering authorities, conmmunities and first responders with actionable insights for resource allocation and prevention by geographical, longitudinal and latitudinal analysis.  
					</p>
				</div>
				<div className='pb-4'>
					<h1 className='text-3xl font-bold text-gray-100'>
						The Inspiration
					</h1>
					<p className='text-gray-100'>
						Our inspiration for this project rose from the devestating earthquakes that struck Turkey recently. As environmental enthusiasts, we knew we wanted to help. Our goal was to make something new and exciting that combined elements we were familiar with such as Node.js, React and TailwindCSS, as well as elements we wanted to learn more about such as ML. And so began our journey to create an extraordinary hack that not only adresses a current problem but also paves the way for a brighter future. 
					</p>
				</div>
				<div className='bg-cover h-80 rounded-2xl bg-[url("/mockup3.jpg")] '></div>
			</div>
		</div>
	);
}
