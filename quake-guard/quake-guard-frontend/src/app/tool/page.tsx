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
								className='rounded-lg bg-[#030712] text-white py-2 px-4'
							>
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className='p-4'></div>
				<div className='flex-1 bg-gray-300 rounded-xl p-4'>
					<h1 className='text-4xl font-bold py-5'>Statistics</h1>
					<div className='grid grid-cols-2'>
						<div className='py-4 text-2xl'>
							Count of Previous Earthquakes in the Area:
						</div>
						<div className='flex flex-col py-4'>
							{data ? data.count : "N/A"}
						</div>
						<div className='flex flex-col py-4'></div>
						<div className='flex flex-col py-4'></div>
						<div className='flex flex-col py-2'></div>
					</div>
				</div>
				<div className='p-4'></div>
				<div className='flex-1 bg-gray-300 rounded-xl p-4'></div>
				<div className='flex-1'></div>
			</div>
			<div className='p-10'></div>
		</div>
	);
}
