import React from "react";

export default function DonatePage() {
  return (
    <div className="flex-1 bg-gray-300 rounded-xl pt-4 pb-18 px-10 my-20 w-1/4 mx-auto text-center">
      <h1 className="text-center text-4xl font-bold py-5">Donate</h1>
      <form className="flex flex-col">
        <div className="flex flex-col py-4">
          <label htmlFor="city">Name</label>
          <input type="text" className="rounded py-2" />
        </div>
        <div className="flex flex-col py-4">
          <label htmlFor="state" className="py-2">
            Email
          </label>
          <input type="email" className="rounded py-2" />
        </div>
        <div className="flex flex-col py-4">
          <label htmlFor="country" className="py-2">
            Password
          </label>
          <input type="password" className="rounded py-2" />
        </div>
        <div className="flex flex-col py-2">
          <button
            type="submit"
            className="rounded-lg bg-[#030712] text-white py-2 px-4"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
