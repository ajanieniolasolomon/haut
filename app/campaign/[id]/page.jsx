
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
           {step === "form" && brands && ( <motion.div key="form-step" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl flex flex-col items-center"> <motion.img initial={{scale:0.8, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.1, duration:0.4}} src={brands['logo']} alt={`${brands['brandName']} Logo`} className="mx-auto mb-5 h-24 w-24 object-contain rounded-lg shadow-md" /> <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">{brands['theme']}</h1> <p className="text-md text-gray-600 text-center mb-8">Sign up for a complimentary AI skin analysis by <b>{brands['brandName']}</b>.</p> {error && <motion.div initial={{opacity: 0, y: -10}} animate={{opacity:1, y:0}} className="w-full bg-red-50 text-red-700 border border-red-200 text-sm p-3.5 rounded-lg mb-4 shadow-sm">{error}</motion.div>}
            <form onSubmit={handleSubmit} className="w-full space-y-5"> <input type="email" id="email" className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm transition-all duration-150" style={{ borderColor: brands['primaryColor'], '--tw-ring-color': brands['primaryColor'] }} placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required /> <motion.button whileHover={{ scale: 1.02, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-3.5 px-4 font-semibold rounded-lg shadow-md transition-all duration-150 ease-out" style={{ backgroundColor: brands['primaryColor'], color: brands['secondaryColor'] }}> Continue to Skin Analysis </motion.button> </form> </motion.div> )}
           {step === "prepare" && brands && ( <motion.div key="prepare-step" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl"> <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">📸 Photo Guidelines</h2> <p className="text-center text-gray-600 mb-8">For the best AI analysis, please follow these tips:</p> <div className="space-y-4 mb-8"> {[{ icon: <Wallpaper size={22}/>, text: "Use a <strong>plain, light-colored background</strong>." }, { icon: <User size={22}/>, text: "Ensure your <strong>full face is visible</strong> and facing forward." }, { icon: <ZoomIn size={22}/>, text: "<strong>Position face close enough</strong> to nearly fill the oval guide." }, { icon: <Lightbulb size={22}/>, text: "Use <strong>bright, even, and soft lighting</strong>. Avoid shadows or direct glare." }, { icon: <Target size={22}/>, text: "<strong>Center your face</strong> within the on-screen oval." },].map((item, i) => ( <motion.div key={i} custom={i} variants={itemVariants} initial="hidden" animate="visible" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-200"> <div className="flex-shrink-0 text-2xl p-2 bg-white rounded-full shadow" style={{color: brands?.primaryColor || '#3B82F6'}}>{item.icon}</div> <p className="text-gray-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }}></p> </motion.div> ))} </div> <motion.button whileHover={{ scale: 1.02, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }} whileTap={{ scale: 0.98 }} onClick={() => setStep("capture")} style={{ backgroundColor: brands['primaryColor'], color: brands['secondaryColor'] }} className={`w-full py-3.5 font-semibold rounded-lg shadow-md transition-all duration-150 ease-out text-lg ${!areModelsLoaded ? 'opacity-60 cursor-wait' : ''}`} disabled={!areModelsLoaded}> {!areModelsLoaded ? "Initializing Camera..." : "Proceed to Camera"} </motion.button> </motion.div> )}
           {step === "capture" && brands && ( <motion.div key="capture-step" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="text-center bg-white p-6 sm:p-8 rounded-xl shadow-2xl"> <h2 className="text-2xl font-bold text-gray-800 mb-2">Capture Your Selfie</h2> <p className="text-sm text-gray-600 mb-4">Follow the on-screen guides for an optimal photo.</p> <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4"> <div className={`flex items-center justify-center p-2.5 rounded-lg text-xs min-h-[40px] border transition-all duration-200 ${!isLightSufficient ? 'bg-yellow-50 text-yellow-700 border-yellow-300' : 'bg-green-50 text-green-700 border-green-300'}`}> {!isLightSufficient ? <AlertTriangle className="w-4 h-4 mr-1.5 shrink-0" /> : <CheckCircle className="w-4 h-4 mr-1.5 shrink-0" />} <span className="leading-tight font-medium">{lightMessage}</span> </div> <div className={`flex items-center justify-center p-2.5 rounded-lg text-xs min-h-[40px] border transition-all duration-200 ${!isFaceDetectedAndWellPositioned ? 'bg-yellow-50 text-yellow-700 border-yellow-300' : 'bg-green-50 text-green-700 border-green-300'}`}> {!isFaceDetectedAndWellPositioned ? <AlertTriangle className="w-4 h-4 mr-1.5 shrink-0" /> : <CheckCircle className="w-4 h-4 mr-1.5 shrink-0" />} <span className="leading-tight font-medium">{faceDetectionMessage}</span> </div> </div> {captureAttemptError && ( <motion.div initial={{opacity:0}} animate={{opacity:1}} className="bg-red-50 text-red-700 text-xs p-2.5 rounded-lg mb-3 shadow-sm border border-red-200"> <AlertTriangle className="inline w-4 h-4 mr-1.5"/> {captureAttemptError} </motion.div> )} <div className="relative w-full max-w-xs sm:max-w-sm mx-auto aspect-[3/4] mb-5 shadow-lg rounded-full overflow-hidden"> <div className="absolute inset-0 bg-gray-800" style={{ clipPath: 'ellipse(48% 49.5% at 50% 50%)', border: `6px solid ${!canTakePicture ? 'rgba(234, 179, 8, 0.7)' : (brands?.primaryColor ? `${brands.primaryColor}B3` : 'rgba(59, 130, 246, 0.7)')}`, borderRadius: '50%'}}> <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className="w-full h-full object-cover scale-[1.03]" videoConstraints={{ facingMode: "user", width: { ideal: 720 }, height: { ideal: 960 } }} screenshotQuality={0.95} forceScreenshotSourceSize={false} mirrored={true}/> </div> </div> <motion.button whileHover={{ scale: canTakePicture ? 1.03 : 1, boxShadow: canTakePicture ? "0 4px 20px rgba(0,0,0,0.15)" : "none" }} whileTap={{ scale: canTakePicture ? 0.97 : 1 }} onClick={handleCapture} style={{ backgroundColor: canTakePicture ? brands['primaryColor'] : '#B0B0B0', color: canTakePicture ? brands['secondaryColor'] : '#F0F0F0', cursor: canTakePicture ? 'pointer' : 'not-allowed' }} className={`w-full py-3.5 px-6 font-semibold rounded-lg shadow-md transition-all duration-200 ease-out text-lg ${(!canTakePicture || isCapturingProcess) ? 'opacity-70' : ''}`} disabled={!canTakePicture || isCapturingProcess || !areModelsLoaded}> {isCapturingProcess ? "Processing..." : (areModelsLoaded ? <> <Camera size={22} className="inline mr-2.5" /> Take Photo </> : "Scanning with care, this may take around 90s 🤖")} </motion.button> </motion.div> )}
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