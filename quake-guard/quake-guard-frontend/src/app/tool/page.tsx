"use client";
import React, { useState } from "react";

// States
enum LoadingState {
	UNLOADED,
	LOADING,
	LOADED,
}

// Components
export default function ToolPage() {
	// City, State, Country
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [country, setCountry] = useState("");

	// Loading state
	const [loadState, setLoadState] = useState(LoadingState.UNLOADED);
	const [data, setData] = useState<{
		num_earthquakes?: number;
		avg_magnitude?: number;
		avg_depth?: number;
		highest_magnitude?: number;
		lowest_magnitude?: number;
		lat?: number;
		lng?: number;
		predicted_magnitude?: number;
	}>({});

	const submitFunction = async (e: React.FormEvent<HTMLFormElement>) => {};

	return (
		<div className='flex-1 flex flex-col'>
			<div className='p-10'></div>
			<div className='flex-1 flex flex-row'>
				<div className='flex-1'></div>
				<div className='flex-1 bg-gray-300 rounded-xl p-4'>
					<h1 className='text-4xl font-bold py-5'>Location</h1>
					<form className='flex flex-col' onSubmit={submitFunction}>
						<div className='flex flex-col py-4'>
							<label htmlFor='city'>City</label>
							<input
								type='text'
								name='city'
								id='city'
								className='rounded py-2'
								value={city}
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>
						<div className='flex flex-col py-4'>
							<label htmlFor='state' className='py-2'>
								State
							</label>
							<input
								type='text'
								name='state'
								id='state'
								className='rounded py-2'
								value={state}
								onChange={(e) => setState(e.target.value)}
							/>
						</div>
						<div className='flex flex-col py-4'>
							<label htmlFor='country' className='py-2'>
								Country
							</label>
							<input
								type='text'
								name='country'
								id='country'
								className='rounded py-2'
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							/>
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
				<div className='flex-1 bg-gray-300 rounded-xl p-4'>
					<div className='py-5'>
						<h1 className='text-4xl font-bold'>Statistics</h1>(of
						nearby Area)
					</div>
					<div className='grid grid-cols-2 text-md'>
						<div className='py-2'>
							Count of Previous Earthquakes
						</div>
						<div className='flex flex-col py-2'>
							{data.num_earthquakes
								? data.num_earthquakes
								: "N/A"}
						</div>

						<div className='py-2'>
							Average Magnitude of Previous Earthquakes
						</div>
						<div className='flex flex-col py-2'>
							{data.avg_magnitude ? data.avg_magnitude : "N/A"}
						</div>
						<div className='py-2'>Average Depth</div>
						<div className='flex flex-col py-2'>
							{data.avg_depth ? data.avg_depth : "N/A"}
						</div>

						<div className='py-2'>Lowest Magnitude</div>
						<div className='flex flex-col py-2'>
							{data.lowest_magnitude
								? data.lowest_magnitude
								: "N/A"}
						</div>

						<div className='py-2'>Highest Magnitude</div>
						<div className='flex flex-col py-2'>
							{data.highest_magnitude
								? data.highest_magnitude
								: "N/A"}
						</div>

						<div className='py-2'>Latitude</div>
						<div className='py-2'>
							{data.lat ? data.lat : "N/A"}
						</div>

						<div className='py-2'>Longitude</div>
						<div className='py-2'>
							{data.lng ? data.lng : "N/A"}
						</div>
					</div>
				</div>
				<div className='p-4'></div>
				<div className='flex-1 bg-gray-300 rounded-xl p-4'>
					<div className='py-5'>
						<h1 className='text-4xl font-bold'>Summary</h1>
					</div>
					<div className='grid grid-cols-2 text-md'>
						<div className='py-2'>Risk</div>
						<div className='flex flex-col py-2'>
							{data.num_earthquakes
								? data.num_earthquakes
								: "N/A"}
						</div>

						<div className='py-2'>Predicted Magnitude</div>
						<div className='flex flex-col py-2'>
							{data.avg_magnitude
								? data.predicted_magnitude
								: "N/A"}
						</div>
						<div className='py-2'>When we predict</div>
						<div className='flex flex-col py-2'>
							{data.avg_depth ? data.avg_depth : "N/A"}
						</div>

					</div>
				</div>
				<div className='flex-1'></div>
			</div>
			<div className='p-10'></div>
		</div>
	);
}
