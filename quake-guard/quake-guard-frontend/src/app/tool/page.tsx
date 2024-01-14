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
		risk?: string;
		details?: string;
	}>({});

	const submitFunction = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoadState(LoadingState.LOADING);
		await fetch("http://localhost:8000/api", {
			method: "POST",
			body: JSON.stringify({
				city: city,
				region: state,
				country: country,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
		})
			.then((res) => res.json())
			.then((res) => {
				var new_data: {
					predicted_magnitude?: number;
					lat?: number;
					lng?: number;
					num_earthquakes?: number;
					avg_magnitude?: number;
					avg_depth?: number;
					highest_magnitude?: number;
					lowest_magnitude?: number;
					risk?: string;
					details?: string;
				} = {};
				new_data["predicted_magnitude"] = res["predicted_magnitude"];
				new_data["lat"] = res["lat"];
				new_data["lng"] = res["lng"];
				setData(new_data);

				console.log(res["predicted_magnitude"]);

				let predicted_magnitude: number = res["predicted_magnitude"];
				if (predicted_magnitude < 3.5) {
					new_data["risk"] = "Low";
					new_data["details"] =
						"Recorded on local seismographs, but generally not felt.";
				} else if (predicted_magnitude < 5.5) {
					new_data["risk"] = "Low";
					new_data["details"] =
						"Often felt, but rarely cause damage.";
				} else if (predicted_magnitude < 6) {
					new_data["risk"] = "Moderate";
					new_data["details"] =
						"At most slight damage to well-designed buildings. Can cause major damage to poorly constructed buildings over small regions.";
				} else if (predicted_magnitude < 7) {
					new_data["risk"] = "High";
					new_data["details"] =
						"Can cause damage to poorly constructed buildings and other structures in areas up to about 100 kilometers across where people live.";
				} else if (predicted_magnitude < 8) {
					new_data["risk"] = "High";
					new_data["details"] =
						"'Major' earthquake. Can cause serious damage over larger areas.";
				} else if (predicted_magnitude < 9) {
					new_data["risk"] = "High";
					new_data["details"] =
						"'Great' earthquake. Can cause serious damage and loss of life in areas several hundred kilometers across.";
				} else {
					new_data["risk"] = "High";
					new_data["details"] =
						"Rare great earthquake. Can cause major damage over a large region over 1000 km across.";
				}

				setLoadState(LoadingState.LOADED);
			});
	};

	return (
	<div className='flex-1 grid gap-4 bg-[url("/mountains.jpg")]'>
		<div className= "flex-1 flex flex-col">
			<div className='p-10'></div>
			<div className='flex-1 flex flex-row'>
			<div className="flex-1"></div>
				<div className= "flex-1 rounded-xl p-4 shadow-2xl backdrop-blur-sm bg-white/30 ...">
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
				<div className= "flex-1 rounded-xl p-4 shadow-2xl backdrop-blur-sm bg-white/30 ...">
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
				<div className= "flex-1 rounded-xl p-4 shadow-2xl backdrop-blur-sm bg-white/30 ...">
					<div className='py-5'>
						<h1 className='text-4xl font-bold'>Summary</h1>
					</div>
					<div className='grid grid-cols-2 text-md'>
						<div className='py-2'>Risk</div>
						<div className='flex flex-col py-2'>
							{data.risk
								? data.risk
								: "N/A"}
						</div>

						<div className='py-2'>Predicted Magnitude</div>
						<div className='flex flex-col py-2'>
							{data.predicted_magnitude
								? data.predicted_magnitude
								: "N/A"}
						</div>
						<div className='py-2'>Details</div>
						<div className='flex flex-col py-2'>
							{data.details ? data.details : "N/A"}
						</div>
					</div>
				</div>
				<div className='flex-1'></div>
			</div>
			<div className='p-10'></div>
		</div>
		</div>
	);
}
