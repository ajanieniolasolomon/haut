


"use client";
import { useState, useRef, useCallback,useEffect } from "react";
import { useParams } from "next/navigation";
import useSound from 'use-sound';
import axios from "axios";
import Rive from '@rive-app/react-canvas';
import ErrorAnimation from '../../../components/Error';
import Confetti from 'react-confetti'
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";
import {useWindowSize, useTimeout} from 'react-use';
import SpinWheel from '../../../components/PrizeWheel';
export default function WheelPage() {
  const router = useParams();
  const { id } = router;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("");

  const [dataList, setDataList] = useState([]);

  const [userId, setUserId] = useState("");
  const [brands, setBrands] = useState(null);
  // const [playActive] = useSound('pop-down.mp3', {
  //   volume: 0.25,
  // })
const [resultspin, setresultspin] = useState(null);
  const { width, height } = useWindowSize()
  const [isComplete] = useTimeout(4000);

 const handleSpinFinish = (result) => {

    if(result?.name.toLowerCase()!='Retry again'.toLowerCase()){
      if(result?.available==false && result?.quantity==0){

loss(result);
      }else{
        if(result?.name.toLowerCase()=='no item won'.toLowerCase()){
loss(result);
        }else{
          win(result);
          
        }


      }

    }
 
  };

 


    const STATE_MACHINE_NAME = "State Machine";
  const TRIGGER_NAME = "Gem";
 const { rive,RiveComponent } = useRive({
     src:"/duolingo.riv", // Replace with your .riv file path
    autoplay: true,
    // animations:'Gem',
     stateMachines:STATE_MACHINE_NAME, 
       layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center
    }),
     
     // Optional
     onLoadError: () => console.log("ERROR LOADING RIVE"),
    onLoad: () => console.log("LOADED RIVE"),
  });

 



    




  useEffect(() => {
    if (rive) {
  
      rive.play('Gem'); 
      rive.play('Shine'); 
    
 
   
    }
  }, [rive]);

  useEffect(() => {
    async function fetchBrands() {
      setError("");
      setLoading(true);
  
      try{
        const ID =  id == '1111' ? 'cd7c0130-9b18-414b-b597-d607806eb5a5' : id
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/brand/by-user?userId=${ID}`);
        const data = await res.json();
        if(data.data){
        
          setBrands(data.data);
      
          setStep('form')
        }else{
          setStep('error')
        }

       

      }catch(err){
        
        setStep('error')
      }finally {
        setLoading(false);
    
      }

    }

    fetchBrands();
  }, []);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const colors = [
    "bg-red-100 text-black-800",
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

const loss = (result)=>{
  const api = process.env.NEXT_PUBLIC_BASE_URL;
      setError("");
    setLoading(true);
 return  fetch(`${api}/spinner/loss`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: email,
    userId: id
  })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); // assuming the server returns JSON
})
.then(data => {


   setLoading(false);
            setresultspin({...result,'mode':'noWin'});
             setStep('spinner-result');
})
.catch(error => {
  console.error('Error:', error);
   setError(
        error.response?.data?.message ||
        error.message ||
        "Network error. Please try again."
      );
   setLoading(false);
});

}

  

const win = (result)=>{
  const api = process.env.NEXT_PUBLIC_BASE_URL;
      setError("");
    setLoading(true);
 return  fetch(`${api}/spinner/win`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: email,
    itemId: result?.id,
    userId: id
  })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); // assuming the server returns JSON
})
.then(data => {


   setLoading(false);
            setresultspin({...result,'mode':'Win'});
             setStep('spinner-result');
})
.catch(error => {

   setError(
        error.response?.data?.message ||
        error.message ||
        "Network error. Please try again."
      );
   setLoading(false);
});

}

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setLoading(true);
// params: { userId: id == '1111' ? 'cd7c0130-9b18-414b-b597-d607806eb5a5' : id, email: email },
    try {
        //process.env.NEXT_PUBLIC_BASE_URL
    const api = process.env.NEXT_PUBLIC_BASE_URL;
      const { data } = await axios.get(
        `${api}/spinner/items`,
        {
          params: { userId: id, email: email },
     
        }
      );

      if (!data?.success || data?.statusCode !== 200) {
        throw new Error(data?.message || "Invalid server response");
      }

   
       if (data.data.length == 1) {
  
         setDataList(data.data);
          setStep("result");
        

       }
       else if(data.data.length > 1){
          setDataList(data.data);
         setStep("wheel");
       }else{
        //no wheel yet
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
  <div className="dark min-h-screen flex items-center justify-center p-4 relative bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

  {loading && (
<div className="fixed inset-0 flex items-center justify-center z-50">
  <div className="absolute inset-0 backdrop-blur-md bg-white/20 dark:bg-black/20" />
  <div className="loader border-t-4 border-blue-500 dark:border-blue-400 rounded-full w-12 h-12 animate-spin z-10" />
</div>
  )}

  <div className="w-full max-w-xl">


    {step === "error" && (
      <>
        <div className="absolute inset-0 flex items-center justify-center p-4"> {/* Added p-4 for spacing error message */}
          <h1 className="text-center text-lg mb-2 font-extrabold text-red-700 dark:text-red-400">
            {/* ^ Adjusted h1 text color directly for error */}
            <div className="bg-red-100 dark:bg-red-900 dark:bg-opacity-30 text-red-700 dark:text-red-300 text-sm p-3 rounded-md mb-4">
              {/* ^ Adjusted error message box for dark mode */}
              Hmm... it looks like the brand you{"'"}re searching for doesn{"'"}t exist at the moment. It might have been removed or the link could be incorrect
            </div>
          </h1>
        </div>
      </>
    )}


    {step === "form" && (
      <div className="flex flex-col items-center w-full max-w-xl justify-center p-5 ">
        {/* ^ Added background, padding, and shadow to form container for better visual in both modes */}
        {error && (
          <div className="bg-red-100 dark:bg-red-900 dark:bg-opacity-30 text-red-700 dark:text-red-300 text-sm p-3 rounded-md mb-4 w-full">
   
            {error}
          </div>
        )}
  <div className="flex flex-col items-center w-full max-w-xl justify-start p-2 ">
 <RiveComponent style={{ width: "200px", height: "200px" }} />
   </div>
 

        <p className="text-md text-justify mb-5 text-gray-600 dark:text-gray-400">
          {/* ^ Adjusted text color */}
        🎉 Spin the MICA Wheel to Win! Enter your email address for a chance to win exciting prizes! 🎁💫

        </p>
        <form onSubmit={handleSubmit} className="w-full"> {/* Removed redundant padding/shadow, handled by parent */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-400 dark:focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              // ^ Adjusted input for dark mode (border, bg, text, placeholder)
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="group relative block w-full focus:outline-none font-bold uppercase cursor-pointer text- tracking-wider"
          >
            {/* Button styling is primarily inline via `brands` object, may need separate logic for dark mode colors if desired */}
            <span
              style={{
                backgroundColor: '#EA7146'+ 'CC', // Opacity might need adjustment for dark bg
                color: brands['secondaryColor'],
              }}
              className="absolute left-0 top-0 block w-full h-[38px] rounded-[8px] transition-transform duration-100 ease-in-out translate-y-[6px] group-active:translate-y-[3px]"
              aria-hidden="true"
            ></span>
            <span
              style={{
                backgroundColor: '#EA7146',
                color: brands['secondaryColor'],
              }}
              className="relative text-base block  leading-none px-10 py-[10px] h-[38px] box-border rounded-[8px] transition-all duration-100 ease-in-out group-active:translate-y-[3px]"
            >
              GET STARTED
            </span>
          </button>
        </form>

        <p className="mt-10">Powered by <strong>{brands['brandName']}</strong></p>
      </div>
    )}

    {step === "result" && dataList[0] && (
      <div className="p-1  w-full"> 
<Confetti
 
    
      recycle={!isComplete()}
       numberOfPieces={300}
      gravity={0.2}
    />

      {
         dataList[0]['mode'] =='spinnerResult' && (
      <div className=" flex flex-col items-center justify-start w-full">
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2 style={{ fontSize: '2rem', color: '#F3BE40' }}>
        🎉 Congratulations! 🎊
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        You’ve just won big on the wheel! 🥳
      </p>
    
    </div>
    

<div className="relative group w-[100px] h-[200px] mt-8">
  <img

    src={dataList[0]['item']['imageUrl']}
    alt={dataList[0]['item']['name'] || "Item Image"}
    className="relative z-10 block w-full h-[70%] object-cover rounded-md transition-transform duration-300 ease-out group-hover:-translate-y-2"
  />
  <div
    className="absolute bottom-2 left-1/2 -translate-x-1/2 
               w-[70%] h-[10px]
               rounded-full
               blur-md
               transition-all duration-300 ease-out
               bg-black/30
               dark:bg-white/15
               group-hover:bg-black/40
               dark:group-hover:bg-white/20
               group-hover:blur-lg group-hover:w-[80%] group-hover:h-[12px] group-hover:bottom-1"
  ></div>
  
         <p className="mt-2 mb-3 text-center text-xl font-semibold"> <strong className="text-[#F3BE40]">{dataList[0]['item']['name']}</strong></p>

</div>
        </div>
         )
        
      }



      {
           dataList[0]['mode'] =='noWin' && (
            <div className=" flex flex-col items-center justify-start w-full">
           

 <ErrorAnimation />
         <p className="mt-2 mb-3 text-xl font-semibold">Better luck next time — no item won! </p>
         </div>
           )
      }




    
 

       
      </div>
    )}


     {step === "wheel" && (
     <div className="min-h-screen  flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Spin the Wheel!</h1>
      <p className="text-gray-300 mb-1">Click the Spin button to win a prize.</p>
      
      <SpinWheel wheelData={dataList}  onItemSelected={handleSpinFinish} />
    </div>
     )}

{step === "spinner-result" && resultspin['mode'] === 'Win' && (
  <div>
    

      <Confetti
 
    
      recycle={!isComplete()}
       numberOfPieces={300}
      gravity={0.2}
    />
       <div className=" flex flex-col items-center justify-start w-full">
         <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2 style={{ fontSize: '2rem', color: '#F3BE40' }}>
        🎉 Congratulations! 🎊
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        You’ve just won big on the wheel! 🥳💰
      </p>
    
    </div>
         {/* <p className="mt-2 mb-3 text-xl font-semibold">Congratulation you won  <strong className="text-[#F3BE40]">{resultspin['name']}</strong></p> */}
    
<div className="relative group w-[100px] h-[200px] mt-5">
           <img src={resultspin['imageUrl']} className="relative z-10 block w-full h-[70%] object-cover rounded-md transition-transform duration-300 ease-out group-hover:-translate-y-2" />
   
</div>
  <h3 style={{ fontWeight: 'bold', marginTop: '1px' }}>
        {resultspin['name']}
      </h3>
      
      </div>

  </div>
)}

           {step === "spinner-result" && resultspin['mode'] === 'noWin' && (

     <div className=" flex flex-col items-center justify-start w-full">
    <ErrorAnimation />
  <p className="mt-2 mb-3 text-xl font-semibold">Better luck next time — no item won! </p>
  
  </div>
)}

  </div>
</div>
  );
}



