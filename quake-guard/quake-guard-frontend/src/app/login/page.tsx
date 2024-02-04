"use client"
import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDx_yEgMRE5CWtqJF41jGryhVSEIXTi4Og",
    authDomain: "quakeguard-9eed0.firebaseapp.com",
    projectId: "quakeguard-9eed0",
    storageBucket: "quakeguard-9eed0.appspot.com",
    messagingSenderId: "1092836555088",
    appId: "1:1092836555088:web:6a972162aec37bf6295455",
    measurementId: "G-X523P2VHED"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Step 1: Authenticate user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Step 2: Perform additional checks against your database
      const userDocRef = collection(db, 'users'); // Replace 'users' with your collection name
      console.log(email);

      try {
        const querySnapshot = await getDocs(query(userDocRef, where('Email', '==', email)));

        if (querySnapshot.empty) {
          // User not found in the database
          console.error('User not found in the database.');
          return;
        }

        // Continue with your logic for handling the user data from the querySnapshot
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          // Do something with userData
        });

      } catch (error) {
        console.error('Error querying the database:', error);
      }

      // Additional checks or actions can be performed here
      // For example, you can access user data using querySnapshot.docs[0].data()
      // ...

      // Handle successful login, you can redirect or perform additional actions here
    } catch (error) {
      // Handle login error
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/quake3.jpeg')]">
      <div className='bg-gray-300 rounded-xl p-8 w-96 text-center shadow-2xl backdrop-blur-md bg-white/30'>
        <h1 className='text-4xl font-bold mb-8 text-[#030712]'>
          Relief Agency Login
        </h1>
        <div className='flex flex-col'>
          <div className='mb-4'>
            <label htmlFor='username' className='text-[#030712] text-lg font-semibold mb-2'>
              Email
            </label>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded border-2 border-[#030712] p-2 w-full focus:outline-none focus:border-[#030712]'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='text-[#030712] text-lg font-semibold mb-2'>
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='rounded border-2 border-[#030712] p-2 w-full focus:outline-none focus:border-[#030712]'
            />
          </div>
          <a href="/signup" className='mb-4'>
            Create an Account
          </a>
          <div className='flex justify-center'>
            <button
              type='button'
              onClick={handleLogin}
              className='rounded-lg bg-[#030712] text-white py-2 px-4 hover:bg-opacity-80 transition-all'
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;