import React from "react";

export default function AboutPage() {
	return (
		<div className='flex-auto grid grid-cols-2 gap-4 bg-gradient-to-b from-slate-300 from-10% from-stone-100 via-30% to-white to-90% ..."'>
			<div>
				<div className='bg-cover my-20 h-3/6 w-5/6 ml-24 rounded-2xl bg-[url("/quake3.jpeg")]'></div>
				<h1 className='text-3xl font-bold ml-24 mb-4 p-3 underline'>
					The Solution
				</h1 > 
				<p className ='ml-24 p-3 pb-4 mr-16'><i><strong>QuakeGuard</strong></i> relies on <strong>Earthquake API's</strong>, <strong>Pandas analysis</strong> and a <strong>machine learning model</strong> to accurately tell a user what is the chances that an earthquake will occur in their area, it's strength and the expected date it will happen.</p>
				<div>
					<p className="font-bold ml-24 p-3 pb-8">So... How are we <u>DIFFERENT</u>???</p>
				</div>
				<div>
					<p className='font-bold ml-24 px-2'>
						1. AI and Machine Learning Powered
					</p>
					<p className='ml-24 p-2 pb-8 mr-16'>
						Uses AI and Machine Learning predicting earthquakes with higher accuracy, enabling timely and informed decisions by authorities and communities!
					</p>
				</div>
				<div>
					<p className='font-bold ml-24 px-2'>
						2. Global Community & Support
					</p>
					<p className='ml-24 p-2 pb-8 mr-16'>
						Unlike traditional models, QuakeGuard involves an active amount of users to allocatively rationing resources to high-risk areas, helping the ones who most need it!
					</p>
					<p className='font-bold ml-24 px-2'>
						3. Hollistic Analysis
					</p>
					<p className='ml-24 p-2 mr-16'>
						Our analysis considers langitude and latitude, depth of earthquake, date and its Richter rating from a diverse dataset providing more accurate outputs and more comprehensive summary results! 
					</p>
				</div>
			</div>
			<div className='flex-1 p-4'>
				<div className='pb-4 p-4'>
					<h1 className='text-3xl font-bold py-4 ml-6 mt-1 underline'>
						The Product
					</h1>
					<p className='py-4 leading-relaxed ml-6 mr-24'>
						As rising condo and urban living is increasing, dangers due to earthquakes continue to rise. As such the need for a proactive and data driven earthquake risk prediction has never been more critical. Our initiative, <strong><i>QuakeGuard</i></strong>, harnesses <strong>Machine Learning</strong> capabilities to revolutionize earthquake risk assesment. QuakeGuard is committed in providing information to empowering authorities, conmmunities and first responders with actionable insights for resource allocation and prevention by geographical, longitudinal and latitudinal analysis.  
					</p>
				</div>
				<div className='pb-4 p-4 leading-relaxed'>
					<h1 className='text-3xl font-bold ml-6 underline'>
						The Inspiration
					</h1>
					<p className='py-4 leading-relaxed ml-6 mr-24'>
						Our inspiration for this project rose from the devestating earthquakes that struck Turkey recently. As environmental enthusiasts, we knew we wanted to help. Our goal was to make something new and exciting that combined elements we were familiar with such as <strong>Node.js</strong>, <strong>React and TailwindCSS</strong>, as well as elements we wanted to learn more about such as <strong>ML</strong>. And so began our journey to create an extraordinary hack that not only adresses a current problem but also paves the way for a brighter future. 
					</p>
				</div>
				<div className='bg-cover mt-20 mr-20 h-80 rounded-2xl bg-[url("/mockup3.jpg")] p-3 '></div>
			</div>
		</div>
	);
}
