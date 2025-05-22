// "use client";
// import { useState, useRef, useCallback,useEffect } from "react";
// import { useParams } from "next/navigation";
// import Webcam from "react-webcam";
// import axios from "axios";
// import { Camera, Sun, User, Wallpaper } from "lucide-react";
// import Modal from '../../../components/Modal';

// export default function SelfiePage() {
//   const router = useParams();
//   const { id } = router;
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [step, setStep] = useState("");
//   const [imageSrc, setImageSrc] = useState(null);
//   const [dataList, setDataList] = useState([]);
//   const webcamRef = useRef(null);
//   const [terminal, setTerminal] = useState("");
//   const [userId, setUserId] = useState("");
//   const [brands, setBrands] = useState(null);
//   const timerRef = useRef(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);


//   useEffect(() => {
//     async function fetchBrands() {
//       setError("");
//       setLoading(true);
//       try{
//         const ID =  id == '1111' ? 'cd7c0130-9b18-414b-b597-d607806eb5a5' : id
//         const res = await fetch('https://srv.demicare.skin/brand/by-user?userId='+ID);
//         const data = await res.json();
//         if(data.data){
        
//           setBrands(data.data);
         
//           setStep('form')
//         }else{
//           setStep('error')
//         }

       

//       }catch(err){
//         console.log(err)
//         setStep('error')
//       }finally {
//         setLoading(false);
//       }

//     }

//     fetchBrands();
//   }, []);

//   const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
//   const colors = [
//     "bg-red-100 text-red-800",
//     "bg-blue-100 text-blue-800",
//     "bg-green-100 text-green-800",
//     "bg-yellow-100 text-yellow-800",
//     "bg-purple-100 text-purple-800",
//     "bg-pink-100 text-pink-800",
//     "bg-indigo-100 text-indigo-800",
//     "bg-teal-100 text-teal-800",
//   ];

//   // Function to shuffle array
//   const shuffleArray = (array) => {
//     return array.sort(() => Math.random() - 0.5);
//   };

//   // Shuffle colors array
//   const shuffledColors = shuffleArray([...colors]);


//   const uploadImage = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       if (!imageSrc) {
//         throw new Error("No image captured");
//       }

//       const response = await fetch(imageSrc);
//       if (!response.ok) throw new Error("Failed to process image");
//       const blob = await response.blob();

//       const formData = new FormData();
//       formData.append("file", blob);
//       formData.append("email", email);
//       formData.append("userId", userId);
//       formData.append("terminalId", terminal);

//       const { data } = await axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/campaign/campaign-vision`,
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       if (!data?.data) throw new Error("Invalid response from server");
//       console.log(data.data.data)
//       setDataList([data.data.data]);
   
//       timerRef.current = setTimeout(() => {
//         openModal();
//       }, 7000);
//     setStep("result");
      
//     } catch (error) {
//       setError(
//         error.response?.data?.message ||
//         error.message ||
//         "Failed to upload image"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     setError("");
//     setLoading(true);
// // params: { userId: id == '1111' ? 'cd7c0130-9b18-414b-b597-d607806eb5a5' : id, email: email },
//     try {
//       const { data } = await axios.get(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/campaign/find-by-email-id`,
//         {
//          // params: { userId: id, email: email },
//          params: { userId: id == '1111' ? 'cd7c0130-9b18-414b-b597-d607806eb5a5' : id, email: email },
//         }
//       );

//       if (!data?.success || data?.statusCode !== 200) {
//         throw new Error(data?.message || "Invalid server response");
//       }

//       if (data.data?.status === false) {
//         setStep("prepare");
//         setTerminal(data.data.terminal || "");
//         setUserId(data.data.userId || "");
//       } else {
//         if (!data.data) throw new Error("No data received");
//         setDataList([data.data]);
    
//         timerRef.current = setTimeout(() => {
//           openModal();
//         }, 7000);
//         setStep("result");
//       }
//     } catch (error) {
//       setError(
//         error.response?.data?.message ||
//         error.message ||
//         "Network error. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const capture = useCallback(() => {
//     const capturedImage = webcamRef.current?.getScreenshot();
//     if (capturedImage) {
//       setImageSrc(capturedImage);
//       setStep("captured");
//     }
//   }, [webcamRef]);

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 relative">
//       {loading && (
//         <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
//         </div>
//       )}



//      <div className="w-full max-w-xl">


//      {step === "" && (
//        <>
//           <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
//         </div>
//        </>

//      )}


// {step === "error" && (
//        <>
//           <div className="absolute inset-0 flex items-center justify-center">
         
//           <h1 className="text-center text-lg mb-2 font-extrabold">
//           <div className="bg-red-100 text-red-700 text-sm p-3 rounded-md mb-4">
//           Hmm... it looks like the brand you{"'"}re searching for doesn{"'"}t exist at the moment. It might have been removed or the link could be incorrect
//            </div>
//          </h1>
//         </div>
//        </>

//      )}
     


//      {step === "form" && (
//        <div className="flex flex-col items-center w-full max-w-xl  justify-center">
//          {error && (
//            <div className="bg-red-100 text-red-700 text-sm p-3 rounded-md mb-4">
//              {error}
//            </div>
//          )}

//          <img src=  {brands['logo']} height={'70'} width={'70'} />

//          <h1 className="text-center text-sm mb-2 mt-1 font-extrabold">
//          {brands['theme']}      
//          </h1>


//          <p className="text-md text-justify mb-5">
//          Sign up with your email for a free AI-powered skin consultation with <b> {brands['brandName']}</b> .
//          </p>
//          <form onSubmit={handleSubmit} className="p-1 rounded shadow-sm w-full max-w-xl">
//            <div className="mb-4">
//              {/* <label htmlFor="email" className="block text-gray-700 font-light mb-2">
//                Email Address
//              </label> */}
//              <input
//                type="email"
//                id="email"
//                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                placeholder="Enter your email"
//                value={email}
//                onChange={(e) => setEmail(e.target.value)}
//                required
//              />

//            </div>
           
//            <button
//              type="submit"
//              className={`w-full py-2 px-4  font-[200] rounded-full`}
//              style={{
//               backgroundColor: brands['primaryColor'],
//               color: brands['secondaryColor'],
//             }}
//           >
//              Submit 
//            </button>
//          </form>
//        </div>
//      )}

//      {step === "prepare" && (
   
// <div className="flex flex-col items-center justify-center min-h-screen  p-4">
//    <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6">
//      <h2 className="text-xl font-semibold text-center mb-4">📸 Capture for a FREE SKIN Analysis</h2>
//      <div className="space-y-4">
//        <div className="flex items-center gap-3">
//          <Wallpaper className="w-6 h-6 text-blue-500" />
//          <p className="text-gray-700">Use a <strong>plain background</strong>—no distractions behind you.</p>
//        </div>
//        <div className="flex items-center gap-3">
//          <User className="w-6 h-6 text-green-500" />
//          <p className="text-gray-700">Face the camera directly for a <strong>front view</strong>.</p>
//        </div>
//        <div className="flex items-center gap-3">
//          <Camera className="w-6 h-6 text-purple-500" />
//          <p className="text-gray-700">Keep the camera <strong>close-up</strong> to your face.</p>
//        </div>
//        <div className="flex items-center gap-3">
//          <Sun className="w-6 h-6 text-yellow-500" />
//          <p className="text-gray-700">Ensure <strong>good lighting</strong>—natural or bright indoor light.</p>
//        </div>
//        <button    onClick={() => setStep("capture")}
//           style={{
//             backgroundColor: brands['primaryColor'],
//             color: brands['secondaryColor'],
//           }}
       
//        className={`w-full mt-4  py-2 rounded-lg hover:bg-blue-600 transition`}>
//          Start Skin Analysis
//        </button>
//      </div>
//    </div>
//  </div>
    
//      )}

//      {step === "capture" && (
//        <div className="text-center bg-white p-8 rounded shadow-sm">
//          <Webcam
//            audio={false}
//            ref={webcamRef}
//            screenshotFormat="image/jpeg"
//            className="mx-auto rounded w-full h-auto"
//            screenshotQuality={0.8}
//            forceScreenshotSourceSize
//          />
//          <button
//            onClick={capture}

//            style={{
//             backgroundColor: brands['primaryColor'],
//             color: brands['secondaryColor'],
//           }}
//            className={`mt-4 py-2 px-4 rounded `}
//          >
//            Capture Photo
//          </button>
//        </div>
//      )}

//      {step === "captured" && (
//        <div className="text-center bg-white p-8 rounded shadow-sm">
//          {imageSrc && (
//            <img
//              src={imageSrc}
//              alt="Captured Selfie"
//              className="mx-auto rounded mb-4 w-full h-auto"
//            />
//          )}
//          <div className="flex justify-center space-x-4">
//            <button
//              onClick={uploadImage}
//              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
//            >
//              Upload Photo
//            </button>
//            <button
//              onClick={() => setStep("capture")}
//              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
//            >
//              Retake Photo
//            </button>
//          </div>
//        </div>
//      )}

//      {step === "result" && dataList[0] && (
//        <>
//          <div className="bg-green-100 text-green-700 text-sm p-3 rounded-md mb-4">
//          ✨ Your free skin consultation with {brands['brandName']} is complete! Below are your personalized results. To get your hands on the recommended products, feel free to contact <a href={`tel:${brands['contactMobile']}`} className="text-blue-500 underline">
//   Call Us: {brands['contactMobile']}
// </a> — they{'’'}ll be happy to assist you! 
//          </div>
//          {/* <h1 className="text-center mb-10 text-lg font-bold">
//            Below Is Your Skin Concern and Product Recommendation
//          </h1> */}
//          <div className="max-w-lg mx-auto p-2 bg-white ">
//            <h2 className="font-semibold text-lg mb-4">Skin Concerns</h2>
//            <ul className="space-y-2">
//              {dataList[0].skinConcerns?.map((concern, index) => (
//                <li
//                  key={index}
//                  className={`p-3 rounded-md shadow-sm text-sm ${shuffledColors[index % shuffledColors.length]
//                    }`}
//                >
//                  {concern.name}
//                </li>
//              ))}
//            </ul>

//            <h2 className="text-lg font-semibold mt-6 mb-4">
//              Recommended Product
//            </h2>
//            {dataList[0].productAnalysis?.map((product, index) => (
//              <div
//                key={index}
//                className=" p-4 rounded-lg shadow-sm mb-4"
//              >
//                {product.imageUrl && (
//                  <img
//                    src={product.imageUrl}
//                    alt={product.name}
//                    className="w-full h-48 object-cover rounded-md mb-4"
//                    onError={(e) => {
//                      e.target.onerror = null;
//                      e.target.src = "/placeholder-image.jpg";
//                    }}
//                  />
//                )}
//                <h3 className="text-lg font-semibold">{product.name}</h3>
//                {product.explanation && (
//                  <h5 className="text-sm font-light">{product.explanation}</h5>
//                )}
//              </div>
//            ))}
//          </div>
//        </>
//      )}
//    </div>


      

//    <Modal isOpen={isModalOpen} onClose={closeModal}>
//     <div className="flex flex-row  justify-between ">
//  <h2 className="text-md font-bold mb-4">🌟 Get Personalized Skincare on the Go!</h2>
//  <button
//   className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-700"
//   onClick={closeModal}
// >
//   &times;
// </button>

//     </div>
       
//         <p className="mb-2">Your skin analysis is just the beginning.
// Download the <b>Demicare</b> App on iOS for daily skincare tips, personalized routines, and real-time progress tracking.
// Take the next step toward healthier skin — anytime, anywhere..</p>
// <a target="_blank" aria-label="Download on the iOS App Store"
//               className="rounded-2xl border-4  flex items-center w-[30%] h-[50px]  bg-white text-gray-900 hover:bg-gray-50"
//               href="https://apps.apple.com/ng/app/demicare/id6478509541">
//               <svg width="100%"   className=" drop-shadow-md" viewBox="0 0 132 43" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path
//                   d="M23.6933 20.6294C23.7069 19.575 23.987 18.5412 24.5075 17.6241C25.028 16.707 25.772 15.9365 26.6703 15.3842C26.0997 14.5692 25.3468 13.8984 24.4716 13.4252C23.5963 12.9521 22.6228 12.6895 21.6283 12.6584C19.507 12.4357 17.4504 13.9278 16.3694 13.9278C15.2674 13.9278 13.603 12.6805 11.8108 12.7174C10.6515 12.7548 9.52166 13.0919 8.53139 13.6959C7.54113 14.2998 6.72419 15.1499 6.16017 16.1635C3.71702 20.3935 5.53939 26.6102 7.87976 30.0295C9.05071 31.7038 10.4192 33.574 12.2099 33.5077C13.9621 33.435 14.6166 32.3904 16.7317 32.3904C18.8272 32.3904 19.4412 33.5077 21.2682 33.4656C23.1484 33.435 24.3331 31.7838 25.463 30.0936C26.3043 28.9006 26.9517 27.5821 27.3812 26.1869C26.2888 25.7249 25.3566 24.9515 24.7008 23.9632C24.045 22.975 23.6946 21.8155 23.6933 20.6294Z"
//                   fill="black"></path>
//                 <path
//                   d="M20.2424 10.4097C21.2677 9.17897 21.7727 7.5971 21.6504 6C20.0842 6.16451 18.6374 6.91308 17.5983 8.09657C17.0903 8.67474 16.7012 9.34736 16.4533 10.076C16.2054 10.8046 16.1035 11.575 16.1535 12.343C16.9369 12.3511 17.7119 12.1813 18.4202 11.8464C19.1285 11.5115 19.7515 11.0203 20.2424 10.4097Z"
//                   fill="black"></path>
//                 <path
//                   d="M44.7162 29.4369H38.9659L37.585 33.5144H35.1494L40.596 18.4287H43.1264L48.573 33.5144H46.0959L44.7162 29.4369ZM39.5615 27.5554H44.1195L41.8725 20.9379H41.8096L39.5615 27.5554Z"
//                   fill="black"></path>
//                 <path
//                   d="M60.3355 28.016C60.3355 31.4339 58.5062 33.6298 55.7456 33.6298C55.0462 33.6664 54.3507 33.5053 53.7387 33.165C53.1267 32.8246 52.6229 32.3189 52.285 31.7055H52.2327V37.1532H49.9751V22.516H52.1604V24.3454H52.2019C52.5553 23.735 53.0677 23.2318 53.6844 22.8894C54.301 22.547 54.999 22.3782 55.704 22.401C58.4955 22.401 60.3355 24.6076 60.3355 28.016ZM58.015 28.016C58.015 25.7892 56.8643 24.3252 55.1085 24.3252C53.3835 24.3252 52.2233 25.82 52.2233 28.016C52.2233 30.2321 53.3835 31.7162 55.1085 31.7162C56.8643 31.7162 58.015 30.2629 58.015 28.016Z"
//                   fill="black"></path>
//                 <path
//                   d="M72.4416 28.016C72.4416 31.4339 70.6117 33.6298 67.851 33.6298C67.1517 33.6664 66.4562 33.5053 65.8442 33.165C65.2322 32.8246 64.7284 32.3189 64.3904 31.7055H64.3382V37.1532H62.0806V22.516H64.2658V24.3454H64.3074C64.6608 23.735 65.1731 23.2318 65.7898 22.8894C66.4065 22.547 67.1045 22.3782 67.8095 22.401C70.601 22.401 72.4416 24.6076 72.4416 28.016ZM70.1205 28.016C70.1205 25.7892 68.9698 24.3252 67.214 24.3252C65.489 24.3252 64.3287 25.82 64.3287 28.016C64.3287 30.2321 65.489 31.7162 67.214 31.7162C68.9698 31.7162 70.1205 30.2629 70.1205 28.016Z"
//                   fill="black"></path>
//                 <path
//                   d="M80.4414 29.3112C80.6087 30.8072 82.062 31.7895 84.048 31.7895C85.9509 31.7895 87.3199 30.8072 87.3199 29.4583C87.3199 28.2874 86.4942 27.5862 84.5391 27.1057L82.584 26.6348C79.8139 25.9657 78.5279 24.6702 78.5279 22.5679C78.5279 19.9651 80.7962 18.1772 84.0159 18.1772C87.2048 18.1772 89.3901 19.9651 89.4637 22.5679H87.1847C87.0482 21.0625 85.8037 20.1537 83.9851 20.1537C82.1664 20.1537 80.9219 21.0731 80.9219 22.4113C80.9219 23.4779 81.7168 24.1055 83.6612 24.5859L85.3233 24.994C88.4185 25.726 89.7033 26.9693 89.7033 29.1759C89.7033 31.9982 87.4563 33.7659 83.8806 33.7659C80.5351 33.7659 78.2763 32.0397 78.1304 29.3111L80.4414 29.3112Z"
//                   fill="black"></path>
//                 <path
//                   d="M94.578 19.9131V22.5159H96.6695V24.3038H94.578V30.3672C94.578 31.3092 94.9967 31.7481 95.9162 31.7481C96.1645 31.7438 96.4124 31.7264 96.6588 31.6959V33.4731C96.2454 33.5503 95.8253 33.5853 95.4048 33.5775C93.1781 33.5775 92.3096 32.7411 92.3096 30.608V24.3038H90.7104V22.5159H92.3096V19.9131H94.578Z"
//                   fill="black"></path>
//                 <path
//                   d="M97.8794 28.0155C97.8794 24.555 99.9175 22.3804 103.096 22.3804C106.285 22.3804 108.313 24.5549 108.313 28.0155C108.313 31.4856 106.295 33.6507 103.096 33.6507C99.8974 33.6507 97.8794 31.4856 97.8794 28.0155ZM106.013 28.0155C106.013 25.6417 104.925 24.2406 103.096 24.2406C101.266 24.2406 100.179 25.6523 100.179 28.0155C100.179 30.3989 101.266 31.7893 103.096 31.7893C104.925 31.7893 106.013 30.3989 106.013 28.0155Z"
//                   fill="black"></path>
//                 <path
//                   d="M110.175 22.5159H112.328V24.388H112.38C112.526 23.8033 112.868 23.2866 113.35 22.9247C113.832 22.5628 114.424 22.3778 115.026 22.4008C115.286 22.3999 115.545 22.4282 115.799 22.4851V24.5968C115.471 24.4964 115.128 24.4503 114.785 24.4604C114.457 24.447 114.13 24.5049 113.827 24.6299C113.523 24.7549 113.25 24.944 113.027 25.1844C112.803 25.4249 112.634 25.7108 112.532 26.0226C112.429 26.3344 112.395 26.6647 112.432 26.9908V33.5146H110.175L110.175 22.5159Z"
//                   fill="black"></path>
//                 <path
//                   d="M126.209 30.2839C125.905 32.2805 123.96 33.6507 121.473 33.6507C118.273 33.6507 116.287 31.507 116.287 28.0677C116.287 24.6178 118.284 22.3804 121.378 22.3804C124.421 22.3804 126.334 24.4707 126.334 27.8056V28.5791H118.566V28.7155C118.53 29.1203 118.581 29.528 118.715 29.9117C118.849 30.2954 119.063 30.6463 119.342 30.9409C119.622 31.2356 119.962 31.4673 120.338 31.6207C120.714 31.7742 121.119 31.8458 121.525 31.8308C122.058 31.8808 122.594 31.7573 123.051 31.4785C123.509 31.1998 123.864 30.7808 124.065 30.2838L126.209 30.2839ZM118.577 27.0012H124.076C124.096 26.6373 124.041 26.273 123.913 25.9314C123.786 25.5898 123.59 25.2782 123.337 25.016C123.083 24.7539 122.778 24.547 122.441 24.4082C122.104 24.2695 121.742 24.2019 121.378 24.2097C121.01 24.2075 120.646 24.2782 120.305 24.4176C119.965 24.557 119.656 24.7623 119.396 25.0219C119.135 25.2814 118.929 25.5899 118.788 25.9297C118.648 26.2694 118.576 26.6336 118.577 27.0012Z"
//                   fill="black"></path>
//                 <path
//                   d="M39.2794 7.07317C39.7527 7.0392 40.2277 7.11071 40.67 7.28252C41.1123 7.45434 41.511 7.72218 41.8373 8.06674C42.1636 8.41129 42.4093 8.82397 42.5568 9.275C42.7043 9.72603 42.7499 10.2042 42.6902 10.6749C42.6902 12.9907 41.4386 14.3218 39.2794 14.3218H36.6611V7.07317H39.2794ZM37.787 13.2967H39.1537C39.4919 13.3169 39.8303 13.2615 40.1444 13.1344C40.4585 13.0073 40.7403 12.8118 40.9693 12.5621C41.1983 12.3123 41.3687 12.0147 41.4681 11.6908C41.5676 11.3669 41.5935 11.0249 41.5441 10.6897C41.59 10.3558 41.5613 10.016 41.4604 9.69443C41.3594 9.37291 41.1886 9.07771 40.9601 8.82997C40.7316 8.58223 40.4512 8.38809 40.1389 8.26146C39.8266 8.13483 39.4901 8.07885 39.1537 8.09752H37.787V13.2967Z"
//                   fill="black"></path>
//                 <path
//                   d="M43.9619 11.5844C43.9275 11.2249 43.9686 10.8622 44.0826 10.5195C44.1966 10.1769 44.381 9.8618 44.6239 9.59456C44.8668 9.32732 45.1629 9.1138 45.4931 8.96768C45.8234 8.82157 46.1805 8.74609 46.5416 8.74609C46.9028 8.74609 47.2599 8.82157 47.5902 8.96768C47.9204 9.1138 48.2165 9.32732 48.4594 9.59456C48.7023 9.8618 48.8866 10.1769 49.0006 10.5195C49.1146 10.8622 49.1557 11.2249 49.1214 11.5844C49.1564 11.9442 49.1158 12.3075 49.0021 12.6507C48.8884 12.9939 48.7041 13.3095 48.4612 13.5773C48.2182 13.8451 47.9219 14.059 47.5913 14.2055C47.2608 14.3519 46.9032 14.4275 46.5416 14.4275C46.1801 14.4275 45.8225 14.3519 45.4919 14.2055C45.1613 14.059 44.8651 13.8451 44.6221 13.5773C44.3791 13.3095 44.1949 12.9939 44.0812 12.6507C43.9675 12.3075 43.9269 11.9442 43.9619 11.5844ZM48.0109 11.5844C48.0109 10.3986 47.4782 9.70521 46.5434 9.70521C45.605 9.70521 45.0771 10.3986 45.0771 11.5844C45.0771 12.7797 45.605 13.4677 46.5434 13.4677C47.4783 13.4677 48.0109 12.7749 48.0109 11.5844Z"
//                   fill="black"></path>
//                 <path
//                   d="M55.9797 14.3218H54.8598L53.7292 10.293H53.6438L52.518 14.3218H51.4087L49.9009 8.85156H50.9959L51.9758 13.0257H52.0565L53.1812 8.85156H54.2168L55.3415 13.0257H55.4269L56.4021 8.85156H57.4817L55.9797 14.3218Z"
//                   fill="black"></path>
//                 <path
//                   d="M58.75 8.8517H59.7892V9.7207H59.8699C60.0068 9.40859 60.2376 9.14695 60.5302 8.97225C60.8228 8.79755 61.1627 8.7185 61.5023 8.74611C61.7685 8.7261 62.0358 8.76623 62.2843 8.86353C62.5329 8.96083 62.7563 9.11281 62.9382 9.30821C63.12 9.50361 63.2556 9.73741 63.3348 9.99231C63.414 10.2472 63.4348 10.5167 63.3958 10.7807V14.3219H62.3162V11.0518C62.3162 10.1727 61.9342 9.73554 61.1358 9.73554C60.955 9.72712 60.7746 9.75788 60.6069 9.8257C60.4392 9.89352 60.2881 9.99681 60.1641 10.1285C60.04 10.2601 59.9459 10.4171 59.8882 10.5885C59.8304 10.76 59.8104 10.9419 59.8296 11.1218V14.322H58.75L58.75 8.8517Z"
//                   fill="black"></path>
//                 <path d="M65.1157 6.71631H66.1953V14.322H65.1157V6.71631Z" fill="black"></path>
//                 <path
//                   d="M67.6958 11.5845C67.6614 11.225 67.7026 10.8622 67.8166 10.5196C67.9306 10.1769 68.115 9.86182 68.3579 9.59458C68.6008 9.32733 68.8969 9.1138 69.2272 8.96769C69.5575 8.82157 69.9146 8.74609 70.2758 8.74609C70.6369 8.74609 70.9941 8.82157 71.3244 8.96769C71.6547 9.1138 71.9507 9.32733 72.1937 9.59458C72.4366 9.86182 72.621 10.1769 72.735 10.5196C72.849 10.8622 72.8902 11.225 72.8558 11.5845C72.8908 11.9444 72.8501 12.3076 72.7364 12.6508C72.6227 12.994 72.4384 13.3096 72.1954 13.5774C71.9524 13.8451 71.6561 14.0591 71.3255 14.2055C70.9949 14.352 70.6374 14.4276 70.2758 14.4276C69.9142 14.4276 69.5566 14.352 69.2261 14.2055C68.8955 14.0591 68.5991 13.8451 68.3562 13.5774C68.1132 13.3096 67.9289 12.994 67.8152 12.6508C67.7014 12.3076 67.6608 11.9444 67.6958 11.5845ZM71.7448 11.5845C71.7448 10.3987 71.2121 9.70531 70.2773 9.70531C69.3389 9.70531 68.811 10.3987 68.811 11.5845C68.811 12.7798 69.3389 13.4678 70.2773 13.4678C71.2121 13.4678 71.7448 12.775 71.7448 11.5845Z"
//                   fill="black"></path>
//                 <path
//                   d="M73.9927 12.7749C73.9927 11.7903 74.7258 11.2226 76.0273 11.1419L77.509 11.0565V10.5843C77.509 10.0066 77.127 9.68034 76.3891 9.68034C75.7864 9.68034 75.3689 9.9016 75.249 10.2884H74.2038C74.3142 9.34876 75.198 8.74609 76.4389 8.74609C77.8104 8.74609 78.5839 9.42883 78.5839 10.5843V14.3219H77.5446V13.5532H77.4592C77.2858 13.8289 77.0424 14.0538 76.7537 14.2046C76.465 14.3555 76.1415 14.4271 75.8161 14.4121C75.5865 14.436 75.3544 14.4115 75.1348 14.3402C74.9152 14.2688 74.713 14.1523 74.5412 13.9981C74.3694 13.8438 74.2318 13.6553 74.1373 13.4446C74.0429 13.2339 73.9936 13.0058 73.9927 12.7749ZM77.509 12.3075V11.8502L76.1732 11.9356C75.4199 11.986 75.0782 12.2423 75.0782 12.7245C75.0782 13.2168 75.5053 13.5033 76.0926 13.5033C76.2646 13.5208 76.4384 13.5034 76.6037 13.4523C76.7689 13.4011 76.9221 13.3173 77.0543 13.2057C77.1865 13.0941 77.2948 12.9571 77.3729 12.8028C77.4511 12.6485 77.4973 12.4801 77.509 12.3075Z"
//                   fill="black"></path>
//                 <path
//                   d="M80.0029 11.5845C80.0029 9.85601 80.8915 8.76101 82.2736 8.76101C82.6155 8.74525 82.9548 8.82714 83.2518 8.99708C83.5489 9.16703 83.7914 9.41802 83.9511 9.72072H84.0318V6.71631H85.1114V14.322H84.0769V13.4578H83.9915C83.8194 13.7584 83.5684 14.0063 83.2656 14.1745C82.9628 14.3427 82.6198 14.4249 82.2736 14.4122C80.882 14.4122 80.0029 13.3172 80.0029 11.5845ZM81.1181 11.5845C81.1181 12.7448 81.6651 13.443 82.5797 13.443C83.4896 13.443 84.052 12.7347 84.052 11.5893C84.052 10.4492 83.4837 9.73085 82.5797 9.73085C81.6709 9.73085 81.1181 10.4338 81.1181 11.5845Z"
//                   fill="black"></path>
//                 <path
//                   d="M89.5776 11.5844C89.5432 11.2249 89.5844 10.8622 89.6984 10.5195C89.8124 10.1769 89.9967 9.8618 90.2396 9.59456C90.4825 9.32732 90.7786 9.1138 91.1088 8.96768C91.4391 8.82157 91.7962 8.74609 92.1574 8.74609C92.5185 8.74609 92.8756 8.82157 93.2059 8.96768C93.5361 9.1138 93.8322 9.32732 94.0751 9.59456C94.318 9.8618 94.5023 10.1769 94.6163 10.5195C94.7303 10.8622 94.7715 11.2249 94.7371 11.5844C94.7721 11.9442 94.7315 12.3075 94.6178 12.6507C94.5041 12.9939 94.3198 13.3095 94.0769 13.5773C93.8339 13.8451 93.5376 14.059 93.2071 14.2055C92.8765 14.3519 92.5189 14.4275 92.1574 14.4275C91.7958 14.4275 91.4382 14.3519 91.1076 14.2055C90.7771 14.059 90.4808 13.8451 90.2378 13.5773C89.9949 13.3095 89.8106 12.9939 89.6969 12.6507C89.5832 12.3075 89.5426 11.9442 89.5776 11.5844ZM93.6266 11.5844C93.6266 10.3986 93.094 9.70521 92.1591 9.70521C91.2207 9.70521 90.6928 10.3986 90.6928 11.5844C90.6928 12.7797 91.2208 13.4677 92.1591 13.4677C93.094 13.4677 93.6266 12.7749 93.6266 11.5844Z"
//                   fill="black"></path>
//                 <path
//                   d="M96.186 8.8517H97.2253V9.7207H97.306C97.4428 9.40859 97.6736 9.14695 97.9663 8.97225C98.2589 8.79755 98.5987 8.7185 98.9384 8.74611C99.2045 8.7261 99.4718 8.76623 99.7204 8.86353C99.9689 8.96083 100.192 9.11281 100.374 9.30821C100.556 9.50361 100.692 9.73741 100.771 9.99231C100.85 10.2472 100.871 10.5167 100.832 10.7807V14.3219H99.7522V11.0518C99.7522 10.1727 99.3702 9.73554 98.5718 9.73554C98.3911 9.72712 98.2107 9.75788 98.043 9.8257C97.8752 9.89352 97.7242 9.99681 97.6001 10.1285C97.4761 10.2601 97.3819 10.4171 97.3242 10.5885C97.2665 10.76 97.2465 10.9419 97.2656 11.1218V14.322H96.186V8.8517Z"
//                   fill="black"></path>
//                 <path
//                   d="M106.932 7.48975V8.87659H108.117V9.78594H106.932V12.5988C106.932 13.1718 107.168 13.4227 107.705 13.4227C107.843 13.4223 107.98 13.4139 108.117 13.3978V14.297C107.923 14.3317 107.726 14.3502 107.53 14.3522C106.329 14.3522 105.851 13.9299 105.851 12.8752V9.78589H104.982V8.87654H105.851V7.48975H106.932Z"
//                   fill="black"></path>
//                 <path
//                   d="M109.592 6.71631H110.662V9.73084H110.747C110.891 9.41581 111.128 9.15269 111.426 8.97733C111.725 8.80197 112.07 8.72291 112.415 8.75091C112.68 8.7365 112.945 8.78071 113.19 8.88038C113.436 8.98004 113.657 9.13271 113.837 9.32749C114.017 9.52228 114.152 9.75437 114.231 10.0072C114.311 10.2601 114.334 10.5274 114.299 10.7902V14.322H113.219V11.0566C113.219 10.1828 112.812 9.74031 112.049 9.74031C111.863 9.7251 111.677 9.7506 111.502 9.81505C111.327 9.87951 111.169 9.98134 111.038 10.1134C110.906 10.2455 110.806 10.4047 110.742 10.5798C110.679 10.7549 110.655 10.9417 110.671 11.1272V14.322H109.592L109.592 6.71631Z"
//                   fill="black"></path>
//                 <path
//                   d="M120.594 12.845C120.447 13.345 120.129 13.7774 119.696 14.0667C119.263 14.3561 118.742 14.4838 118.224 14.4276C117.863 14.4371 117.505 14.3681 117.174 14.2253C116.843 14.0826 116.547 13.8694 116.307 13.6008C116.066 13.3322 115.887 13.0144 115.782 12.6696C115.676 12.3248 115.647 11.9612 115.697 11.6041C115.649 11.2459 115.678 10.8815 115.783 10.5357C115.888 10.1899 116.066 9.87064 116.306 9.59964C116.545 9.32865 116.839 9.1122 117.169 8.96496C117.5 8.81771 117.857 8.7431 118.219 8.74619C119.741 8.74619 120.659 9.78608 120.659 11.5038V11.8805H116.796V11.941C116.78 12.1418 116.805 12.3438 116.87 12.5343C116.936 12.7247 117.041 12.8993 117.178 13.0468C117.315 13.1944 117.482 13.3116 117.667 13.3911C117.852 13.4705 118.052 13.5104 118.253 13.5082C118.511 13.5392 118.773 13.4927 119.005 13.3746C119.237 13.2565 119.428 13.0721 119.555 12.845L120.594 12.845ZM116.796 11.0821H119.559C119.573 10.8985 119.548 10.7141 119.486 10.5407C119.424 10.3674 119.327 10.2088 119.2 10.0754C119.073 9.94193 118.92 9.83647 118.75 9.7658C118.58 9.69513 118.397 9.6608 118.213 9.66502C118.026 9.66267 117.841 9.69773 117.668 9.76812C117.495 9.83851 117.338 9.94282 117.206 10.0749C117.074 10.207 116.97 10.3641 116.899 10.5371C116.829 10.7101 116.794 10.8954 116.796 11.0821Z"
//                   fill="black"></path>
//               </svg></a>
 
//       </Modal>
//     </div>
//   );
// }
"use client";
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import Webcam from "react-webcam";
import axios from "axios";
import { 
    Camera, Sun, User, Wallpaper, X, Lightbulb, AlertTriangle, Target, ZoomIn, 
    CheckCircle, RotateCcw, UploadCloud, Info, PhoneOutgoing, ShoppingBag, ShieldCheck, Sparkles 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as faceapi from 'face-api.js';

const MODEL_URL = '/models';
const FACE_SIZE_THRESHOLD_PERCENT = 0.35;
const FACE_CENTER_TOLERANCE_PERCENT = 0.18;
const MAX_MODAL_DISPLAYS = 2;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 backdrop-blur-sm"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg relative"
        onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  }),
};

const getConcernIcon = (concernName) => {
    const name = concernName.toLowerCase();
    if (name.includes("acne") || name.includes("pimple")) return <Sparkles size={20} className="text-red-500" />;
    if (name.includes("dryness") || name.includes("dehydration")) return <Info size={20} className="text-blue-500" />;
    if (name.includes("wrinkle") || name.includes("aging")) return <ShieldCheck size={20} className="text-purple-500" />;
    if (name.includes("redness") || name.includes("sensitivity")) return <AlertTriangle size={20} className="text-orange-500" />;
    return <Info size={20} className="text-gray-500" />;
};


export default function SelfiePage() {
  const params = useParams();
  const { id } = params;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [dataList, setDataList] = useState([]);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [terminal, setTerminal] = useState("");
  const [userId, setUserId] = useState("");
  const [brands, setBrands] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDisplayCount, setModalDisplayCount] = useState(0);
  
  const [lightMessage, setLightMessage] = useState("Checking lighting...");
  const [isLightSufficient, setIsLightSufficient] = useState(false);
  const BRIGHTNESS_THRESHOLD = 110;

  const [areModelsLoaded, setAreModelsLoaded] = useState(false);
  const [faceDetectionMessage, setFaceDetectionMessage] = useState("Detecting face...");
  const [isFaceDetectedAndWellPositioned, setIsFaceDetectedAndWellPositioned] = useState(false);
  
  const [isCapturingProcess, setIsCapturingProcess] = useState(false);
  const [captureAttemptError, setCaptureAttemptError] = useState("");

  const openModal = () => {
      if (modalDisplayCount < MAX_MODAL_DISPLAYS) {
          setIsModalOpen(true);
      }
  };
  const closeModal = () => {
      setIsModalOpen(false);
      setModalDisplayCount(prevCount => prevCount + 1);
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } },
    exit: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.3, ease: [0.5, 0, 0.75, 0] } },
  };

  useEffect(() => {
    const storedModalCount = localStorage.getItem('demicareModalDisplayCount');
    if (storedModalCount) {
        setModalDisplayCount(parseInt(storedModalCount, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('demicareModalDisplayCount', modalDisplayCount.toString());
  }, [modalDisplayCount]);


  useEffect(() => {
    const loadFaceApiModels = async () => {
      try { await Promise.all([ faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL) ]); setAreModelsLoaded(true); } 
      catch (err) { console.error("Error loading FaceAPI models:", err); setError("Could not load face detection models. Please refresh."); }
    };
    loadFaceApiModels();
  }, []);

  useEffect(() => {
    async function fetchBrands() {
      setError(""); setLoading(true); setStep('loading-brands');
      try {
        const effectiveID = id === '1111' ? 'cd7c0130-9b18-414b-b597-d607806eb5a5' : id;
        const res = await fetch(`https://srv.demicare.skin/brand/by-user?userId=${effectiveID}`);
        const data = await res.json();
        if (data.data) { setBrands(data.data); setStep('form'); } 
        else { setStep('error'); setError(data.message || "Brand not found."); }
      } catch (err) { setError("Could not fetch brand details."); setStep('error'); } 
      finally { setLoading(false); }
    }
    if (id) fetchBrands();
  }, [id]);

  useEffect(() => {
    let modalTimerId;
    if (step === "result" && dataList.length > 0 && !isModalOpen && modalDisplayCount < MAX_MODAL_DISPLAYS) {
      modalTimerId = setTimeout(() => { if (step === "result") openModal(); }, 7000);
    }
    return () => { if (modalTimerId) clearTimeout(modalTimerId); };
  }, [step, dataList, isModalOpen, modalDisplayCount]);

  useEffect(() => {
    let animationFrameId; let initTimeoutId;
    const analyzeFrame = async () => {
      if (!webcamRef.current || !webcamRef.current.video || webcamRef.current.video.readyState < 3 || !canvasRef.current || !areModelsLoaded) { if (step === "capture") animationFrameId = requestAnimationFrame(analyzeFrame); return; }
      const video = webcamRef.current.video; const tempCanvas = canvasRef.current; const ctx = tempCanvas.getContext('2d', { willReadFrequently: true });
      if (tempCanvas.width !== (video.videoWidth / 4) || tempCanvas.height !== (video.videoHeight / 4)) { tempCanvas.width = video.videoWidth > 0 ? Math.max(50, video.videoWidth / 4) : 100; tempCanvas.height = video.videoHeight > 0 ? Math.max(50, video.videoHeight / 4) : 100; }
      if (tempCanvas.width === 0 || tempCanvas.height === 0) { if (step === "capture") animationFrameId = requestAnimationFrame(analyzeFrame); return; }
      ctx.drawImage(video, 0, 0, tempCanvas.width, tempCanvas.height);
      let currentLightSufficient = false;
      try {
        const imageData = ctx.getImageData(0, 0, tempCanvas.width, tempCanvas.height); const data = imageData.data; let totalLuminance = 0; let pixelCount = 0;
        for (let i = 0; i < data.length; i += 4) { totalLuminance += (0.299 * data[i] + 0.587 * data[i+1] + 0.114 * data[i+2]); pixelCount++; }
        if (pixelCount > 0) { const avgLuminance = totalLuminance / pixelCount; if (avgLuminance >= BRIGHTNESS_THRESHOLD) { setLightMessage(`Lighting: Good (${avgLuminance.toFixed(0)})`); currentLightSufficient = true; } else { setLightMessage(`Lighting: Needs Improvement (Current: ${avgLuminance.toFixed(0)} / Target: ${BRIGHTNESS_THRESHOLD})`); currentLightSufficient = false; } }
      } catch (e) { setLightMessage("Error checking light."); currentLightSufficient = false;} setIsLightSufficient(currentLightSufficient);
      let currentFaceOk = false;
      if (currentLightSufficient) {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions({ inputSize: 224, scoreThreshold: 0.5 }));
        if (detections.length === 1) {
          const detectedFace = detections[0].box; const videoWidth = video.videoWidth; const videoHeight = video.videoHeight; const faceWidthPercent = detectedFace.width / videoWidth; const isCloseEnough = faceWidthPercent >= FACE_SIZE_THRESHOLD_PERCENT;
          const faceCenterX = detectedFace.x + detectedFace.width / 2; const faceCenterY = detectedFace.y + detectedFace.height / 2; const videoCenterX = videoWidth / 2; const videoCenterY = videoHeight / 2;
          const isHorizontallyCentered = Math.abs(faceCenterX - videoCenterX) < (videoWidth * FACE_CENTER_TOLERANCE_PERCENT); const isVerticallyCentered = Math.abs(faceCenterY - videoCenterY) < (videoHeight * FACE_CENTER_TOLERANCE_PERCENT);
          if (!isCloseEnough) setFaceDetectionMessage("Position: Move Closer"); else if (!isHorizontallyCentered || !isVerticallyCentered) setFaceDetectionMessage("Position: Center Face"); else { setFaceDetectionMessage("Position: Perfect!"); currentFaceOk = true; }
        } else if (detections.length > 1) setFaceDetectionMessage("Position: Multiple Faces"); else setFaceDetectionMessage("Position: No Face Detected");
      } else setFaceDetectionMessage("Position: Check Lighting First"); setIsFaceDetectedAndWellPositioned(currentFaceOk);
      if (step === "capture") animationFrameId = requestAnimationFrame(analyzeFrame);
    };
    if (step === "capture" && areModelsLoaded) {
      setLightMessage("Initializing checks..."); setFaceDetectionMessage(""); setIsLightSufficient(false); setIsFaceDetectedAndWellPositioned(false); setCaptureAttemptError("");
      initTimeoutId = setTimeout(() => { if (step === "capture") animationFrameId = requestAnimationFrame(analyzeFrame); }, 1200);
    } else if (step === "capture" && !areModelsLoaded) { setLightMessage("Loading camera system..."); setFaceDetectionMessage(""); }
    return () => { clearTimeout(initTimeoutId); cancelAnimationFrame(animationFrameId); };
  }, [step, areModelsLoaded, BRIGHTNESS_THRESHOLD]);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const colors = useMemo(() => [ "bg-red-50 text-red-700 border-red-200", "bg-blue-50 text-blue-700 border-blue-200", "bg-green-50 text-green-700 border-green-200", "bg-yellow-50 text-yellow-700 border-yellow-200", "bg-purple-50 text-purple-700 border-purple-200", "bg-pink-50 text-pink-700 border-pink-200", "bg-indigo-50 text-indigo-700 border-indigo-200", "bg-teal-50 text-teal-700 border-teal-200", ], []);
  const shuffledColors = useMemo(() => { const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5); return shuffleArray(colors); }, [colors]);

  const uploadImage = async () => {
    setError(""); setLoading(true);
    try {
      if (!imageSrc) throw new Error("No image captured"); const response = await fetch(imageSrc); if (!response.ok) throw new Error("Failed to process image blob"); const blob = await response.blob();
      const formData = new FormData(); formData.append("file", blob, "selfie.jpg"); formData.append("email", email); formData.append("userId", userId); formData.append("terminalId", terminal);
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/campaign/campaign-vision`, formData, { headers: { "Content-Type": "multipart/form-data" } });
      if (!data?.data?.data) throw new Error(data?.message || "Invalid analysis response"); setDataList([data.data.data]); setStep("result");
    } catch (error) { setError(error.response?.data?.message || error.message || "Upload failed."); } finally { setLoading(false); }
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); if (!validateEmail(email)) { setError("Valid email required."); return; }
    setError(""); setLoading(true);
    try {
      const effectiveID = id === '1111' ? 'cd7c0130-9b18-414b-b597-d607806eb5a5' : id;
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/campaign/find-by-email-id`, { params: { userId: effectiveID, email: email } });
      if (!data?.success || data?.statusCode !== 200) throw new Error(data?.message || "Email check failed.");
      if (data.data?.status === false) { setStep("prepare"); setTerminal(data.data.terminal || ""); setUserId(data.data.userId || ""); } 
      else { if (!data.data) throw new Error("No existing analysis data."); setDataList([data.data]); setStep("result"); }
    } catch (error) { setError(error.response?.data?.message || error.message || "Network error."); } finally { setLoading(false); }
  };

  const handleCapture = useCallback(async () => {
    if (!webcamRef.current || !isLightSufficient || !isFaceDetectedAndWellPositioned) { setCaptureAttemptError("Ensure lighting and face position are optimal."); return; }
    setIsCapturingProcess(true); setCaptureAttemptError(""); const capturedImage = webcamRef.current?.getScreenshot({width: 720, height: 960});
    if (capturedImage) { setImageSrc(capturedImage); setStep("captured"); } else { setCaptureAttemptError("Could not capture image. Please try again."); }
    setIsCapturingProcess(false);
  }, [webcamRef, isLightSufficient, isFaceDetectedAndWellPositioned]);

  const renderLoading = () => ( <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-[100] backdrop-blur-sm"> <div className="p-4 bg-white rounded-lg shadow-xl flex items-center space-x-3"> <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div> <span className="text-gray-700">Processing...</span> </div> </div> );
  const canTakePicture = isLightSufficient && isFaceDetectedAndWellPositioned && areModelsLoaded;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-100 to-gray-200 relative overflow-hidden font-sans">
      {loading && renderLoading()} <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <div className="w-full max-w-lg relative">
        <AnimatePresence mode="wait">
           {step === "" && ( <motion.div key="initial-empty" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="h-64" /> )}
           {step === "loading-brands" && ( <motion.div key="loading-brands-indicator" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="text-center p-8"> <p className="text-gray-600 mt-4 text-lg">Loading Brand...</p> </motion.div> )}
           {step === "error" && ( <motion.div key={brands ? "error-with-brand" : "generic-error"} variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl text-center"> {brands && <img src={brands['logo']} alt={`${brands['brandName']} Logo`} className="mx-auto mb-5 h-20 w-20 object-contain rounded-md shadow-sm" />} {!brands && <AlertTriangle size={52} className="mx-auto mb-5 text-red-500" />} <h1 className="text-2xl font-semibold text-gray-800 mb-4">Oops! Something Went Wrong</h1> <div className="bg-red-50 text-red-700 border border-red-200 text-sm p-4 rounded-lg mb-6"> {error || "An unexpected error occurred."} </div> {brands && <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.97}} onClick={() => { setError(""); setStep('form'); }} className="w-full py-3 px-4 font-semibold rounded-lg transition-all duration-150 ease-out" style={{ backgroundColor: brands['primaryColor'], color: brands['secondaryColor']}}> <RotateCcw size={18} className="inline mr-2"/> Try Again </motion.button>} </motion.div> )}
           {step === "form" && brands && ( <motion.div key="form-step" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl flex flex-col items-center"> <motion.img initial={{scale:0.8, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.1, duration:0.4}} src={brands['logo']} alt={`${brands['brandName']} Logo`} className="mx-auto mb-5 h-24 w-24 object-contain rounded-lg shadow-md" /> <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">{brands['theme']}</h1> <p className="text-md text-gray-600 text-center mb-8">Sign up for a complimentary AI skin analysis by <b>{brands['brandName']}</b>.</p> {error && <motion.div initial={{opacity: 0, y: -10}} animate={{opacity:1, y:0}} className="w-full bg-red-50 text-red-700 border border-red-200 text-sm p-3.5 rounded-lg mb-4 shadow-sm">{error}</motion.div>} <form onSubmit={handleSubmit} className="w-full space-y-5"> <input type="email" id="email" className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm transition-all duration-150" style={{ borderColor: brands['primaryColor'], '--tw-ring-color': brands['primaryColor'] }} placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required /> <motion.button whileHover={{ scale: 1.02, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-3.5 px-4 font-semibold rounded-lg shadow-md transition-all duration-150 ease-out" style={{ backgroundColor: brands['primaryColor'], color: brands['secondaryColor'] }}> Continue to Skin Analysis </motion.button> </form> </motion.div> )}
           {step === "prepare" && brands && ( <motion.div key="prepare-step" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl"> <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">📸 Photo Guidelines</h2> <p className="text-center text-gray-600 mb-8">For the best AI analysis, please follow these tips:</p> <div className="space-y-4 mb-8"> {[{ icon: <Wallpaper size={22}/>, text: "Use a <strong>plain, light-colored background</strong>." }, { icon: <User size={22}/>, text: "Ensure your <strong>full face is visible</strong> and facing forward." }, { icon: <ZoomIn size={22}/>, text: "<strong>Position face close enough</strong> to nearly fill the oval guide." }, { icon: <Lightbulb size={22}/>, text: "Use <strong>bright, even, and soft lighting</strong>. Avoid shadows or direct glare." }, { icon: <Target size={22}/>, text: "<strong>Center your face</strong> within the on-screen oval." },].map((item, i) => ( <motion.div key={i} custom={i} variants={itemVariants} initial="hidden" animate="visible" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-200"> <div className="flex-shrink-0 text-2xl p-2 bg-white rounded-full shadow" style={{color: brands?.primaryColor || '#3B82F6'}}>{item.icon}</div> <p className="text-gray-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }}></p> </motion.div> ))} </div> <motion.button whileHover={{ scale: 1.02, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }} whileTap={{ scale: 0.98 }} onClick={() => setStep("capture")} style={{ backgroundColor: brands['primaryColor'], color: brands['secondaryColor'] }} className={`w-full py-3.5 font-semibold rounded-lg shadow-md transition-all duration-150 ease-out text-lg ${!areModelsLoaded ? 'opacity-60 cursor-wait' : ''}`} disabled={!areModelsLoaded}> {!areModelsLoaded ? "Initializing Camera..." : "Proceed to Camera"} </motion.button> </motion.div> )}
           {step === "capture" && brands && ( <motion.div key="capture-step" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="text-center bg-white p-6 sm:p-8 rounded-xl shadow-2xl"> <h2 className="text-2xl font-bold text-gray-800 mb-2">Capture Your Selfie</h2> <p className="text-sm text-gray-600 mb-4">Follow the on-screen guides for an optimal photo.</p> <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4"> <div className={`flex items-center justify-center p-2.5 rounded-lg text-xs min-h-[40px] border transition-all duration-200 ${!isLightSufficient ? 'bg-yellow-50 text-yellow-700 border-yellow-300' : 'bg-green-50 text-green-700 border-green-300'}`}> {!isLightSufficient ? <AlertTriangle className="w-4 h-4 mr-1.5 shrink-0" /> : <CheckCircle className="w-4 h-4 mr-1.5 shrink-0" />} <span className="leading-tight font-medium">{lightMessage}</span> </div> <div className={`flex items-center justify-center p-2.5 rounded-lg text-xs min-h-[40px] border transition-all duration-200 ${!isFaceDetectedAndWellPositioned ? 'bg-yellow-50 text-yellow-700 border-yellow-300' : 'bg-green-50 text-green-700 border-green-300'}`}> {!isFaceDetectedAndWellPositioned ? <AlertTriangle className="w-4 h-4 mr-1.5 shrink-0" /> : <CheckCircle className="w-4 h-4 mr-1.5 shrink-0" />} <span className="leading-tight font-medium">{faceDetectionMessage}</span> </div> </div> {captureAttemptError && ( <motion.div initial={{opacity:0}} animate={{opacity:1}} className="bg-red-50 text-red-700 text-xs p-2.5 rounded-lg mb-3 shadow-sm border border-red-200"> <AlertTriangle className="inline w-4 h-4 mr-1.5"/> {captureAttemptError} </motion.div> )} <div className="relative w-full max-w-xs sm:max-w-sm mx-auto aspect-[3/4] mb-5 shadow-lg rounded-full overflow-hidden"> <div className="absolute inset-0 bg-gray-800" style={{ clipPath: 'ellipse(48% 49.5% at 50% 50%)', border: `6px solid ${!canTakePicture ? 'rgba(234, 179, 8, 0.7)' : (brands?.primaryColor ? `${brands.primaryColor}B3` : 'rgba(59, 130, 246, 0.7)')}`, borderRadius: '50%'}}> <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className="w-full h-full object-cover scale-[1.03]" videoConstraints={{ facingMode: "user", width: { ideal: 720 }, height: { ideal: 960 } }} screenshotQuality={0.95} forceScreenshotSourceSize={false} mirrored={true}/> </div> </div> <motion.button whileHover={{ scale: canTakePicture ? 1.03 : 1, boxShadow: canTakePicture ? "0 4px 20px rgba(0,0,0,0.15)" : "none" }} whileTap={{ scale: canTakePicture ? 0.97 : 1 }} onClick={handleCapture} style={{ backgroundColor: canTakePicture ? brands['primaryColor'] : '#B0B0B0', color: canTakePicture ? brands['secondaryColor'] : '#F0F0F0', cursor: canTakePicture ? 'pointer' : 'not-allowed' }} className={`w-full py-3.5 px-6 font-semibold rounded-lg shadow-md transition-all duration-200 ease-out text-lg ${(!canTakePicture || isCapturingProcess) ? 'opacity-70' : ''}`} disabled={!canTakePicture || isCapturingProcess || !areModelsLoaded}> {isCapturingProcess ? "Processing..." : (areModelsLoaded ? <> <Camera size={22} className="inline mr-2.5" /> Take Photo </> : "Loading System...")} </motion.button> </motion.div> )}
           {step === "captured" && brands && imageSrc && ( <motion.div key="captured-step" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="text-center bg-white p-6 sm:p-10 rounded-xl shadow-2xl"> <h2 className="text-2xl font-bold text-gray-800 mb-5">Confirm Your Selfie</h2> <motion.div initial={{scale: 0.8, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay: 0.1, duration: 0.4}} className="mx-auto mb-8 w-full max-w-[280px] aspect-[3/4] rounded-full overflow-hidden shadow-xl border-4 border-white"> <img src={imageSrc} alt="Captured Selfie" className="w-full h-full object-cover" style={{ clipPath: 'ellipse(48% 49.5% at 50% 50%)'}}/> </motion.div> <div className="flex flex-col sm:flex-row justify-center gap-4"> <motion.button whileHover={{ scale: 1.03, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }} whileTap={{ scale: 0.97 }} onClick={uploadImage} className="flex-1 py-3 px-6 font-semibold rounded-lg shadow-md transition-all duration-150 ease-out bg-green-500 text-white hover:bg-green-600"> <UploadCloud size={20} className="inline mr-2"/> Looks Good, Upload </motion.button> <motion.button whileHover={{ scale: 1.03, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }} whileTap={{ scale: 0.97 }} onClick={() => { setImageSrc(null); setStep("capture"); setIsLightSufficient(false); setIsFaceDetectedAndWellPositioned(false); setCaptureAttemptError("");}} className="flex-1 py-3 px-6 font-semibold rounded-lg shadow-md transition-all duration-150 ease-out bg-gray-500 text-white hover:bg-gray-600"> <RotateCcw size={20} className="inline mr-2"/> Retake Photo </motion.button> </div> </motion.div> )}
           {step === "result" && brands && dataList[0] && ( <motion.div key="result-step" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="bg-gradient-to-br from-gray-50 to-slate-100 p-5 sm:p-8  w-full"> <div className="text-center mb-8"> <motion.div initial={{scale:0.5, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.1, duration:0.5, type:"spring", stiffness:150}}> <CheckCircle strokeWidth={1.5} className="mx-auto text-green-500 mb-3 h-16 w-16 bg-green-100 p-3 rounded-full shadow-lg"/> </motion.div> <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Analysis Complete!</h2> <p className="text-gray-600 mt-2 text-md"> Your personalized skin insights from <strong>{brands['brandName']}</strong> are ready. </p> </div> <div className="mb-10 p-4 sm:p-5 rounded-xl shadow-lg border" style={{backgroundColor: `${brands['primaryColor']}0D`, borderColor: `${brands['primaryColor']}33`}}> <div className="flex items-center"> <PhoneOutgoing size={28} className="mr-4 shrink-0" style={{color: brands['primaryColor']}}/> <div> <h3 className="font-semibold text-lg" style={{color: brands['primaryColor']}}>Ready for Your Products?</h3> <p className="text-sm mt-0.5" style={{color: `${brands['primaryColor']}E6`}}> Contact us at <a href={`tel:${brands['contactMobile']}`} className="font-bold underline hover:opacity-80 transition-opacity">{brands['contactMobile']}</a> to get started. </p> </div> </div> </div> <div className="mb-10"> <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-5 tracking-tight flex items-center"> <Info size={24} className="mr-3 text-blue-600"/> Your Key Skin Concerns </h3> <div className="space-y-3"> {dataList[0].skinConcerns?.map((concern, index) => ( <motion.div key={index} custom={index} variants={itemVariants} initial="hidden" animate="visible" className={`flex items-center p-4 rounded-xl shadow-md border transition-all hover:shadow-lg hover:border-transparent ${shuffledColors[index % shuffledColors.length].replace('bg-','bg-opacity-80 ')}`}> <div className="mr-3 p-2 bg-white rounded-full shadow-inner"> {getConcernIcon(concern.name)} </div> <span className="font-medium text-sm sm:text-md">{concern.name}</span> </motion.div> ))} </div> </div> <div> <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mt-8 mb-6 tracking-tight flex items-center"> <ShoppingBag size={24} className="mr-3 text-purple-600"/> Recommended Products </h3> <div className="grid grid-cols-1 md:grid-cols-1 gap-6"> {dataList[0].productAnalysis?.map((product, index) => ( <motion.div key={index} custom={index + (dataList[0].skinConcerns?.length || 0)} variants={itemVariants} initial="hidden" animate="visible" className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-200 flex flex-col sm:flex-row"> {product.imageUrl && ( <div className="w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden"> <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src = `https://via.placeholder.com/300x300/E0E7FF/4F46E5?text=${encodeURIComponent(product.name)}`; }} /> </div> )} <div className="p-5 sm:p-6 flex-1"> <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1.5">{product.name}</h4> {product.explanation && ( <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 sm:line-clamp-none">{product.explanation}</p> )} </div> </motion.div> ))} </div> </div> </motion.div> )}
        </AnimatePresence>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="text-center">
            <motion.img initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1, type:"spring", stiffness:120}} src="/demicarelogo.svg" alt="Demicare App" className="w-20 h-20 mx-auto mb-4 "/>
            <h2 className="text-xl font-bold text-gray-800 mb-3">🌟 Enhance Your Skincare Journey!</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
            Your skin analysis is just the first step. Download the <b>Demicare</b> App on iOS for daily personalized tips, advanced routine tracking, and to connect with skincare professionals.
            </p>
            <motion.a whileHover={{scale:1.05, y:-2}} whileTap={{scale:0.95}} target="_blank" rel="noopener noreferrer" aria-label="Download Demicare on iOS" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 h-[50px] bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-150 ease-out shadow-md hover:shadow-lg font-semibold" href="https://apps.apple.com/ng/app/demicare/id6478509541">
            <svg className="w-5 h-5 mr-2.5 fill-current" viewBox="0 0 24 24"><path d="M19.5,0H4.5A4.5,4.5,0,0,0,0,4.5v15A4.5,4.5,0,0,0,4.5,24h15A4.5,4.5,0,0,0,24,19.5V4.5A4.5,4.5,0,0,0,19.5,0ZM15.98,16.84a1.07,1.07,0,0,1-.83.46,1,1,0,0,1-.77-.34,2.44,2.44,0,0,0-1.87-1,2.38,2.38,0,0,0-1.83,1,.94.94,0,0,1-.77.34,1,1,0,0,1-.83-.46A1.2,1.2,0,0,1,9.22,16c.3-.47.78-1,1.5-1a2.36,2.36,0,0,1,1.83,1,2.44,2.44,0,0,1,1.87-1c.72,0,1.2.53,1.5,1A1.2,1.2,0,0,1,15.98,16.84ZM12,4.6A3.6,3.6,0,1,1,8.4,8.2,3.6,3.6,0,0,1,12,4.6Z"/></svg>
            Download on the App Store
            </motion.a>
        </div>
      </Modal>
    </div>
  );
}