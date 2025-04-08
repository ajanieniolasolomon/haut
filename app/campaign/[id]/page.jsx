"use client";
import { useState, useRef, useCallback,useEffect } from "react";
import { useParams } from "next/navigation";
import Webcam from "react-webcam";
import axios from "axios";
import { Camera, Sun, User, Wallpaper } from "lucide-react";


export default function SelfiePage() {
  const router = useParams();
  const { id } = router;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [dataList, setDataList] = useState([]);
  const webcamRef = useRef(null);
  const [terminal, setTerminal] = useState("");
  const [userId, setUserId] = useState("");
  const [brands, setBrands] = useState(null);



  useEffect(() => {
    async function fetchBrands() {
      setError("");
      setLoading(true);
      try{
        const res = await fetch('https://srv.demicare.skin/brand/by-user?userId='+id);
        const data = await res.json();
        if(data.data){
          setBrands(data.data);
          setStep('form')
        }else{
          setStep('error')
        }

       

      }catch(err){
        console.log(err)
        setStep('error')
      }finally {
        setLoading(false);
      }

    }

    fetchBrands();
  }, []);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const colors = [
    "bg-red-100 text-red-800",
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800",
    "bg-indigo-100 text-indigo-800",
    "bg-teal-100 text-teal-800",
  ];

  // Function to shuffle array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Shuffle colors array
  const shuffledColors = shuffleArray([...colors]);


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
      console.log(data.data.data)
      setDataList([data.data.data]);
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
          params: { userId: id == '1111' ? 'cd7c0130-9b18-414b-b597-d607806eb5a5' : id, email: email },
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



     <div className="w-full max-w-xl">


     {step === "" && (
       <>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
       </>

     )}


{step === "error" && (
       <>
          <div className="absolute inset-0 flex items-center justify-center">
         
          <h1 className="text-center text-lg mb-2 font-extrabold">
          <div className="bg-red-100 text-red-700 text-sm p-3 rounded-md mb-4">
          Hmm... it looks like the brand you're searching for doesn't exist at the moment. It might have been removed or the link could be incorrect
           </div>
         </h1>
        </div>
       </>

     )}
     


     {step === "form" && (
       <div className="flex flex-col items-center w-full max-w-xl  justify-center">
         {error && (
           <div className="bg-red-100 text-red-700 text-sm p-3 rounded-md mb-4">
             {error}
           </div>
         )}

         <img src=  {brands['logo']} height={'70'} width={'70'} />

         <h1 className="text-center text-sm mb-2 mt-1 font-extrabold">
         {brands['theme']}      
         </h1>


         <p className="text-md text-justify mb-5">
         Sign up with your email for a free AI-powered skin consultation with <b> {brands['brandName']}</b> .
         </p>
         <form onSubmit={handleSubmit} className="p-1 rounded shadow-sm w-full max-w-xl">
           <div className="mb-4">
             {/* <label htmlFor="email" className="block text-gray-700 font-light mb-2">
               Email Address
             </label> */}
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
             className={`w-full bg-[${brands['primaryColor']}] text-[${brands['secondaryColor']}] py-2 px-4  font-[200] rounded-full`}
           >
             Submit
           </button>
         </form>
       </div>
     )}

     {step === "prepare" && (
   
<div className="flex flex-col items-center justify-center min-h-screen  p-4">
   <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6">
     <h2 className="text-xl font-semibold text-center mb-4">📸 Capture for a FREE SKIN Analysis</h2>
     <div className="space-y-4">
       <div className="flex items-center gap-3">
         <Wallpaper className="w-6 h-6 text-blue-500" />
         <p className="text-gray-700">Use a <strong>plain background</strong>—no distractions behind you.</p>
       </div>
       <div className="flex items-center gap-3">
         <User className="w-6 h-6 text-green-500" />
         <p className="text-gray-700">Face the camera directly for a <strong>front view</strong>.</p>
       </div>
       <div className="flex items-center gap-3">
         <Camera className="w-6 h-6 text-purple-500" />
         <p className="text-gray-700">Keep the camera <strong>close-up</strong> to your face.</p>
       </div>
       <div className="flex items-center gap-3">
         <Sun className="w-6 h-6 text-yellow-500" />
         <p className="text-gray-700">Ensure <strong>good lighting</strong>—natural or bright indoor light.</p>
       </div>
       <button    onClick={() => setStep("capture")} className={`w-full mt-4 bg-[${brands['primaryColor']}] text-[${brands['secondaryColor']}] py-2 rounded-lg hover:bg-blue-600 transition`}>
         Start Skin Analysis
       </button>
     </div>
   </div>
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
           className={`mt-4 bg-[${brands['primaryColor']}] text-[${brands['secondaryColor']}] py-2 px-4 rounded `}
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
         <div className="bg-green-100 text-green-700 text-sm p-3 rounded-md mb-4">
         ✨ Your free skin consultation with {brands['brandName']} is complete! Below are your personalized results. To get your hands on the recommended products, feel free to contact <a href={`tel:${brands['contactMobile']}`} className="text-blue-500 underline">
  Call Us: {brands['contactMobile']}
</a> — they{'’'}ll be happy to assist you! 
         </div>
         {/* <h1 className="text-center mb-10 text-lg font-bold">
           Below Is Your Skin Concern and Product Recommendation
         </h1> */}
         <div className="max-w-lg mx-auto p-2 bg-white ">
           <h2 className="font-semibold text-lg mb-4">Skin Concerns</h2>
           <ul className="space-y-2">
             {dataList[0].skinConcerns?.map((concern, index) => (
               <li
                 key={index}
                 className={`p-3 rounded-md shadow-sm text-sm ${shuffledColors[index % shuffledColors.length]
                   }`}
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
               className=" p-4 rounded-lg shadow-sm mb-4"
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
               <h3 className="text-lg font-semibold">{product.name}</h3>
               {product.explanation && (
                 <h5 className="text-sm font-light">{product.explanation}</h5>
               )}
             </div>
           ))}
         </div>
       </>
     )}
   </div>


      

   
    </div>
  );
}