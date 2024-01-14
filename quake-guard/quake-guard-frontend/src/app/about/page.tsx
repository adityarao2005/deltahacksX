import React from "react";

export default function AboutPage() {
	return (
		<div className='flex-1 grid grid-cols-2 gap-4 bg-gradient-to-b from-cyan-500 to-blue-500 py-4 px-20'>
			<div>
				<div className='h-80 rounded-2xl bg-gray-400 mb-4'></div>
				<h1 className='text-4xl font-bold text-gray-100 mb-4'>
					Solution
				</h1 > 
				<p className = 'text-gray-100'>QuakeGuard relies on Earthquake API's, Pandas analysis and a machine learning model to accurately tell a user what is the chances that an earthquake will occur in their area, it's strength and the expected date it will happen. Why are we different? </p>
				<div>
					<h1 className='text-3xl font-bold text-gray-100'>
						AI and Machine Learning Powered
					</h1>
					<p className='text-gray-100'>
						Uses AI and Machine Learning predicting earthquakes with higher accuracy, enabling timely and informed decisions by authorities and communities!
					</p>
				</div>
				<div>
					<h1 className='text-3xl font-bold text-gray-100'>
						Global Community & Support
					</h1>
					<p className='text-gray-100'>
						Unlike traditional models, QuakeGuard involves an active amount of users to allocatively rationing resources to high-risk areas, helping the ones who most need it!
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
						Our insipiration for this project rose from the devestating earthquakes that struck Turkey recently. As environmental enthusiasts, we knew we wanted to help. Our goal was to make something new and exciting that combined elements we were familiar with such as Node.js, React and TailwindCSS, as well as elements we wanted to learn more about such as ML. And so began our journey to create an extraordinary hack that not only adresses a current problem but also paves the way for a brighter future. 
					</p>
				</div>
				<div className='h-80 rounded-2xl bg-gray-400'></div>
			</div>
		</div>
	);
}
