"use client";
import { useState, useRef, useCallback } from "react";
import { useParams } from "next/navigation";
import Webcam from "react-webcam";
import axios from "axios";

export default function SelfiePage() {
  const router = useParams();
  const { id } = router;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Global loading state
  const [step, setStep] = useState("form"); // steps: form, prepare, capture, captured, result
  const [imageSrc, setImageSrc] = useState(null);
  const [dataList, setDataList] = useState([]);
  const webcamRef = useRef(null);
  const [terminal, setTerminal] = useState("");
  const [userId, setuserId] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);



  const uploadImage = async () => {
    setLoading(true);
    try {
      const blob = await fetch(imageSrc).then((res) => res.blob());
      const formData = new FormData();
      formData.append('file', blob);
      formData.append('email', email);
      formData.append('userId', userId);
      formData.append('terminalId', terminal);
      // Replace '/api/upload' with your actual API endpoint
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/campaign/campaign-vision`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setDataList([response.data.data.id]);
      setStep("result");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Sorry Something went wrong')
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/campaign/find-by-email-id?userId=${id}&email=${encodeURIComponent(email)}`
      );

      if (response.data.success && response.data.statusCode === 200) {
        if (response.data.data.status === false) {
          setStep("prepare");
          setTerminal(response.data.data.terminal)
          setuserId(response.data.data.userId)
        } else {
          console.log(response.data.data)
          setDataList([response.data.data]);
          setStep("result");
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again.");
    }
    setLoading(false);
  };

  const capture = useCallback(() => {
    const capturedImage = webcamRef.current.getScreenshot();
    setImageSrc(capturedImage);
    setStep('captured');
  }, [webcamRef]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}
      <div className=" w-full max-w-md">
        {step === "form" && (
          <>
            <h1 className="text-center mb-10 fs-5 fw-bolder">Please ensure you enter a valid email address</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-sm">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-2 px-4 transition-colors duration-300 hover:bg-primary text-white font-[200] rounded-full"

              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </>
        )}



        {step === "prepare" && (
          <div className="text-center bg-white p-8 rounded shadow-sm ">
            <p className="text-lg mb-4">Prepare for your selfie!</p>
            <button
              onClick={() => setStep('capture')}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
            >
              Take Picture
            </button>
          </div>
        )}


        {step === 'capture' && (
          <div className="text-center bg-white p-8 rounded shadow-sm">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="mx-auto rounded"
            />
            <button
              onClick={capture}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Capture Photo
            </button>
          </div>
        )}

        {step === 'captured' && (
          <div className="text-center bg-white p-8 rounded shadow-sm">
            <img src={imageSrc} alt="Captured Selfie" className="mx-auto rounded mb-4" />
            <div className="flex justify-center space-x-4">
              <button
                onClick={uploadImage}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
              >
                Upload Photo
              </button>
              <button
                onClick={() => setStep('capture')}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
              >
                Retake Photo
              </button>
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* Skin Concerns */}
            <h2 className=" font-semibold fs-5 mb-4">Skin Concerns</h2>
            <ul className="space-y-2">
              {dataList[0].skinConcerns.map((concern, index) => (
                <li key={index} className="p-3 bg-gray-100 rounded-md shadow-sm">
                  {concern.name}
                </li>
              ))}
            </ul>

            {/* Product Analysis */}
            <h2 className=" fs-5 font-semibold mt-6 mb-4">Recommended Product</h2>
            {dataList[0].productAnalysis.map((product, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="fs-5 font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-700 mt-2">{product.explanation}</p>
              </div>
            ))}
          </div>

        )}
      </div>
    </div>
  );
}