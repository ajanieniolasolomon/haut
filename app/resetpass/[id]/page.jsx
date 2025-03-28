"use client";
import { useState, useRef, useCallback } from "react";
import { useParams } from "next/navigation";
import Webcam from "react-webcam";
import axios from "axios";
import { Camera, Sun, User, Wallpaper } from "lucide-react";

export default function RestPassword() {
  const router = useParams();
  const { id } = router;
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("form");



  const handleSubmit = async (e) => {
    e.preventDefault();
 

    setError("");
    setLoading(true);

   

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/btc/auth/changepassword`,
        {
            token: id,
            password: password
          },
        {
            headers: {
              'Content-Type': 'application/json'
            }
          }
      );

if(data.success==true){
    setStep("prepare");
}else{
    throw new Error(data?.message || "Invalid server response");
}
  

    } catch (error) {
      setError(
        error.response?.data?.message ||
        error.message ||
        "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      <div className="w-full max-w-md">


        {step === "form" && (
          <>
            {error && (
              <div className="bg-red-100 text-red-700 text-sm p-3 rounded-md mb-4">
                {error}
              </div>
            )}

            <h1 className="text-center text-lg mb-2 font-extrabold">
          Change password
            </h1>


            <p className="text-sm text-center mb-5">
          Please update your password.
            </p>
            <form onSubmit={handleSubmit} className="p-1 rounded shadow-sm">
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-light mb-2">
                 Change Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-2 px-4 transition-colors duration-300 hover:bg-primary font-[200] rounded-full"
              >
                Submit
              </button>
            </form>
          </>
        )}

        {step === "prepare" && (
      
<div className="border-l-4 border-green-500 text-green-700 p-4 ">
      <h2 className="text-lg font-semibold">Password Updated Successfully</h2>
      <p className="text-sm">Your password has been changed. Please use your new password to log in.</p>
    </div>
       
        )}

       
      </div>
    </div>
  );
}