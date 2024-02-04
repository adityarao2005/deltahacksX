"use client";
import React, { useState } from "react";
import { LineChart } from "@/components/Chart";

// States
enum LoadingState {
	UNLOADED,
	LOADING,
	LOADED,
}
const PickTwoScreen: React.FC = () => {
	const [showToolPage, setShowToolPage] = useState(false);
  
	const handleGoToMapClick = () => {
	  window.location.href = '/tool/graph';
	};
  
	const handleCheckEarthquakeDataClick = () => {
	  setShowToolPage(true);
	};
  
	return (
	  <div className="flex flex-col items-center justify-center h-screen bg-[url('/mountains.jpg')]">
		{showToolPage ? (
		  <ToolPage />
		) : (
		  <div className="flex-1 flex">
			<div
			  onClick={handleGoToMapClick}
			  className="bg-gray-300 rounded-lg p-6 m-20 flex-1 flex flex-col items-center justify-center shadow-2xl backdrop-blur-md bg-white/30"
			>
			  
			  <h1 className="text-3xl font-bold text-center">Go to Map</h1>
			  <img src = "/compass2.png" width = "300" height = "400" /> 
			</div>
			<div
			  onClick={handleCheckEarthquakeDataClick}
			  className="bg-gray-300 rounded-lg p-6 m-20 flex-1 flex flex-col items-center justify-center shadow-2xl backdrop-blur-md bg-white/30"
			>
			  <h1 className="text-3xl font-bold text-center pb-2">Check Earthquake Data</h1>
			  <img src = "/magnifying.png" width = "250" height = "250"/> 
			</div>
		  </div>
		)}
	  </div>
	);
  };
  
  export default PickTwoScreen;
// Components
function ToolPage() {
	// City, State, Country
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [country, setCountry] = useState("");
	const [timespan, setTimespan] = useState("1 week");

	
	const callback = () => {
		// Validate input
		if (city == "" || state == "" || country == "") {
			alert("Please enter a place City, State, and Country must be filled out");
			return;
		}

		

		fetch("http://localhost:8000/api/generate_map", {
			method: "POST",
			body: JSON.stringify({
			}),
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
		})
			.then((res) => res.json())
			.then((res) => {
			});
	};

	// Loading state
	const [loadState, setLoadState] = useState(LoadingState.UNLOADED);
	const submitFunction = () => {};

	// Example data for Line Chart 1 (Temperature)
	const depth_data = {
		datasets: [
			{
				label: "Depth Data",
				data: [
					{
						x: "2021-11-06 23:39:30",
						y: 12,
					},
					{
						x: "2021-11-07 01:00:28",
						y: 155,
					},
					{
						x: "2021-11-07 09:00:28",
						y: 30,
					},
				],
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};
	const mag_data = {
		datasets: [
			{
				label: "Magnitude Data",
				data: [
					{
						x: "2021-11-06 23:39:30",
						y: 8,
					},
					{
						x: "2021-11-07 01:00:28",
						y: 9,
					},
					{
						x: "2021-11-07 09:00:28",
						y: 5,
					},
				],
				borderColor: "rgb(15, 40, 244)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};

	return (
		<div className='flex-1 relative bg-[url("/mountains.jpg")]'>
			<div
				className={
					"inset-0 absolute h-full z-20 backdrop-blur-sm bg-white/30 " +
					(loadState == LoadingState.LOADING ? "block" : "hidden")
				}
			>
				<div className='flex flex-row h-full'>
					<div className='flex-1' />
					<div className='flex flex-col h-full pt-10 z-10'>
						<div className='shadow-2xl backdrop-blur-sm bg-gray-400/2 rounded-xl p-4'>
							<h1 className='text-4xl font-bold py-5 text-center'>
								This may take a minute...
							</h1>
							<p>
								Quite literally if you chose the extended option
							</p>
							<button
								type='button'
								className='inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed'
								disabled
							>
								<svg
									className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
								>
									<circle
										className='opacity-25'
										cx='12'
										cy='12'
										r='10'
										stroke='currentColor'
										strokeWidth='4'
									></circle>
									<path
										className='opacity-75'
										fill='currentColor'
										d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
									></path>
								</svg>
								Processing...
							</button>
						</div>
					</div>
					<div className='flex-1' />
				</div>
			</div>

			<div className='flex flex-col h-full inset-0 z-10'>
				<div className='p-10'></div>
				<div className='flex-1 flex flex-row'>
					<div className='flex-1'></div>
					<div className='flex-1 rounded-xl p-4 shadow-2xl backdrop-blur-sm bg-white/30 z-10'>
						<h1 className='text-4xl font-bold py-5'>Location</h1>
						<form
							className='flex flex-col'
							onSubmit={submitFunction}
						>
							<div className='flex flex-col py-3'>
								<label htmlFor='city'>City</label>
								<input
									type='text'
									name='city'
									id='city'
									className='rounded p-2'
									value={city}
									onChange={(e) => setCity(e.target.value)}
								/>
							</div>
							<div className='flex flex-col py-3'>
								<label htmlFor='state' className='py-2'>
									State
								</label>
								<input
									type='text'
									name='state'
									id='state'
									className='rounded p-2'
									value={state}
									onChange={(e) => setState(e.target.value)}
								/>
							</div>
							<div className='flex flex-col py-3'>
								<label htmlFor='country' className='py-2'>
									Country
								</label>
								<input
									type='text'
									name='country'
									id='country'
									className='rounded p-2'
									value={country}
									onChange={(e) => setCountry(e.target.value)}
								/>
							</div>
							<div className='flex flex-col py-3'>
								<label htmlFor='country' className='py-2'>
									Timespan
								</label>
								<select
									name='country'
									id='country'
									className='rounded py-2 '
									value={timespan}
									onChange={(e) => setTimespan(e.target.value)}
								>
									<option value='1 week'>1 week</option>
									<option value='2 weeks'>2 weeks</option>
									<option value='1 month'>1 month</option>
									<option value='2 months'>2 months</option>
									<option value='1 year'>1 year</option>
								</select>
							</div>
							<div className='flex flex-col py-2'>
								<button
									type='submit'
									className='rounded-lg bg-black hover:bg-gray-700 text-white py-2 px-4'
								>
									Submit
								</button>
							</div>
						</form>
					</div>
					<div className='p-4'></div>
					<div className='flex-1 rounded-xl p-4 shadow-2xl backdrop-blur-sm bg-white/30 z-10'>
						<div className='py-5'>
							<h1 className='text-3xl font-bold'>
								Chart Summary
							</h1>
							<LineChart
								magnitudeData={mag_data}
								depthData={depth_data}
							/>
						</div>
					</div>
					<div className='p-4'></div>
					<div className='flex-1 rounded-xl p-4 shadow-2xl backdrop-blur-sm bg-white/30 z-10'>
						<div className='py-5'>
							<h1 className='text-4xl font-bold'>Summary</h1>
						</div>
						<div className='grid grid-cols-2 text-md'></div>
					</div>
					<div className='flex-1'></div>
				</div>
				<div className='p-10'></div>
			</div>
		</div>
	);
}
