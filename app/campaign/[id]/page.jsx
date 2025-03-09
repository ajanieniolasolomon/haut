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
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("form");
  const [imageSrc, setImageSrc] = useState(null);
  const [dataList, setDataList] = useState([]);
  const webcamRef = useRef(null);
  const [terminal, setTerminal] = useState("");
  const [userId, setUserId] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const uploadImage = async () => {
    setError("");
    setLoading(true);
    try {
      if (!imageSrc) {
        throw new Error("No image captured");
      }

      const response = await fetch(imageSrc);
      if (!response.ok) throw new Error("Failed to process image");
      const blob = await response.blob();

      const formData = new FormData();
      formData.append("file", blob);
      formData.append("email", email);
      formData.append("userId", userId);
      formData.append("terminalId", terminal);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/campaign/campaign-vision`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (!data?.data) throw new Error("Invalid response from server");
      setDataList([data.data]);
      setStep("result");
    } catch (error) {
      setError(
        error.response?.data?.message ||
        error.message ||
        "Failed to upload image"
      );
    } finally {
      setLoading(false);
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
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/campaign/find-by-email-id`,
        {
          params: { userId: id=='1111'?'cd7c0130-9b18-414b-b597-d607806eb5a5':id, email: email },
        }
      );

      if (!data?.success || data?.statusCode !== 200) {
        throw new Error(data?.message || "Invalid server response");
      }

      if (data.data?.status === false) {
        setStep("prepare");
        setTerminal(data.data.terminal || "");
        setUserId(data.data.userId || "");
      } else {
        if (!data.data) throw new Error("No data received");
        setDataList([data.data]);
        setStep("result");
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

  const capture = useCallback(() => {
    const capturedImage = webcamRef.current?.getScreenshot();
    if (capturedImage) {
      setImageSrc(capturedImage);
      setStep("captured");
    }
  }, [webcamRef]);

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
              Congratulations on you have been selected!
            </h1>
            <p className="text-sm text-justify mb-5">
              Congrats! You made it here!
              Sign up with your email to get access and RSVP to Urban Skin Rx Launch Event and
               your Skin Analysis for curated regimen and care package to be picked up at the event 😊!
            </p>
            <form onSubmit={handleSubmit} className="p-1 rounded shadow-sm">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-light mb-2">
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
          <div className="text-center bg-white p-8 rounded shadow-sm">
            <p className="text-lg mb-4">Prepare for your selfie!</p>
            <button
              onClick={() => setStep("capture")}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
            >
              Take Picture
            </button>
          </div>
        )}

        {step === "capture" && (
          <div className="text-center bg-white p-8 rounded shadow-sm">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="mx-auto rounded w-full h-auto"
              screenshotQuality={0.8}
              forceScreenshotSourceSize
            />
            <button
              onClick={capture}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Capture Photo
            </button>
          </div>
        )}

        {step === "captured" && (
          <div className="text-center bg-white p-8 rounded shadow-sm">
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Captured Selfie"
                className="mx-auto rounded mb-4 w-full h-auto"
              />
            )}
            <div className="flex justify-center space-x-4">
              <button
                onClick={uploadImage}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
              >
                Upload Photo
              </button>
              <button
                onClick={() => setStep("capture")}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
              >
                Retake Photo
              </button>
            </div>
          </div>
        )}

        {step === "result" && dataList[0] && (
          <>
            <h1 className="text-center mb-10 text-lg font-bold">
              Below Is Your Skin Concern and Product Recommendation
            </h1>
            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
              <h2 className="font-semibold text-lg mb-4">Skin Concerns</h2>
              <ul className="space-y-2">
                {dataList[0].skinConcerns?.map((concern, index) => (
                  <li
                    key={index}
                    className="p-3 bg-gray-100 rounded-md shadow-sm text-sm"
                  >
                    {concern.name}
                  </li>
                ))}
              </ul>

              <h2 className="text-lg font-semibold mt-6 mb-4">
                Recommended Product
              </h2>
              {dataList[0].productAnalysis?.map((product, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md mb-4"
                >
                  {product.imageUrl && (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-md mb-4"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/placeholder-image.jpg";
                      }}
                    />
                  )}
                  <h3 className="text-sm font-semibold">{product.name}</h3>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}