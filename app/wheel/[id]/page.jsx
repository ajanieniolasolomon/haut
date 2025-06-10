


"use client";
import { useState, useRef, useCallback,useEffect } from "react";
import { useParams } from "next/navigation";
import useSound from 'use-sound';
import axios from "axios";
import Rive from '@rive-app/react-canvas';
import ErrorAnimation from '../../../components/Error'
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";

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
  const [playActive] = useSound('pop-down.mp3', {
    volume: 0.25,
  })


 const handleSpinFinish = (result) => {
    console.log(result);
    // Handle the result as needed
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

 



// The data you provided
const prizeData = 
 [
        {
            "id": "20431586-d6af-400f-9c5b-205848454347",
            "name": "A",
            "userId": "b1be8983-a09a-4248-9c85-e21dddbcb7f2",
            "quantity":6,
            "status": false,
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/telleibuz-dev.appspot.com/o/4a30741e-52df-4004-84b3-5fb2de0285e3-photo.jpg?alt=media",
            "createdAt": "2025-06-06T23:27:21.319Z",
            "updatedAt": "2025-06-06T23:27:21.319Z",
            "available": true
        },
        {
            "id": "00000000-0000-0000-0000-000000000000",
            "name": "No item won",
            "quantity": 0,
            "imageUrl": "",
            "status": false,
            "createdAt": "2025-06-09T14:23:56.982Z",
            "updatedAt": "2025-06-09T14:23:56.982Z",
            "userId": "b1be8983-a09a-4248-9c85-e21dddbcb7f2",
            "available": false
        },
        {
            "id": "587a96e2-e086-4117-87c4-b38e28f0ad15",
            "name": "B",
            "userId": "b1be8983-a09a-4248-9c85-e21dddbcb7f2",
            "quantity":9,
            "status": false,
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/telleibuz-dev.appspot.com/o/4a30741e-52df-4004-84b3-5fb2de0285e3-photo.jpg?alt=media",
            "createdAt": "2025-06-06T23:27:21.319Z",
            "updatedAt": "2025-06-06T23:27:21.319Z",
            "available": true
        },
        {
            "id": "00000000-0000-0000-0000-000000000000",
            "name": "No item won",
            "quantity": 0,
            "imageUrl": "",
            "status": false,
            "createdAt": "2025-06-09T14:23:56.982Z",
            "updatedAt": "2025-06-09T14:23:56.982Z",
            "userId": "b1be8983-a09a-4248-9c85-e21dddbcb7f2",
            "available": false
        },
        {
            "id": "cfedf727-77fb-4dc9-8e5b-4b420e649342",
            "name": "D",
            "userId": "b1be8983-a09a-4248-9c85-e21dddbcb7f2",
            "quantity":90,
            "status": false,
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/telleibuz-dev.appspot.com/o/4a30741e-52df-4004-84b3-5fb2de0285e3-photo.jpg?alt=media",
            "createdAt": "2025-06-06T23:27:21.319Z",
            "updatedAt": "2025-06-06T23:27:21.319Z",
            "available": true
        },
        {
            "id": "00000000-0000-0000-0000-000000000000",
            "name": "Retry again",
            "quantity": 0,
            "imageUrl": "",
            "status": false,
            "createdAt": "2025-06-09T14:23:56.982Z",
            "updatedAt": "2025-06-09T14:23:56.982Z",
            "userId": "b1be8983-a09a-4248-9c85-e21dddbcb7f2",
            "available": false
        },
        {
            "id": "60bf6b6d-f92c-482a-b555-6fe1ebea714b",
            "name": "C",
            "userId": "b1be8983-a09a-4248-9c85-e21dddbcb7f2",
             "quantity":0,
            "status": false,
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/telleibuz-dev.appspot.com/o/4a30741e-52df-4004-84b3-5fb2de0285e3-photo.jpg?alt=media",
            "createdAt": "2025-06-06T23:27:21.319Z",
            "updatedAt": "2025-06-06T23:27:21.319Z",
            "available": false
        },
        {
            "id": "00000000-0000-0000-0000-000000000000",
            "name": "No item won",
            "quantity": 0,
            "imageUrl": "",
            "status": false,
            "createdAt": "2025-06-09T14:23:56.982Z",
            "updatedAt": "2025-06-09T14:23:56.982Z",
            "userId": "b1be8983-a09a-4248-9c85-e21dddbcb7f2",
            "available": false
        }
    ]

    

    const onFinished = (winner) => {
    console.log(winner)
  }

//  const skinInput = useStateMachineInput(
//     rive,
//     STATE_MACHINE_NAME,
//     TRIGGER_NAME
//   );

  useEffect(() => {
    if (rive) {
      console.log("Rive ready");
      rive.play('Gem'); 
      rive.play('Shine'); 
    
 
   
    }
  }, [rive]);

  useEffect(() => {
    async function fetchBrands() {
      setError("");
      setLoading(true);
      console.log(rive);
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
        console.log(err)
        setStep('error')
      }finally {
        setLoading(false);
    //               if (rive) {
    //   rive.play('Gem'); // optional if not autoplay
    //    rive.play('Shine');
    // }
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



  const handleSubmit = async (e) => {
    e.preventDefault();
    playActive();
    navigator.vibrate(200);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setLoading(true);
// params: { userId: id == '1111' ? 'cd7c0130-9b18-414b-b597-d607806eb5a5' : id, email: email },
    try {
        //process.env.NEXT_PUBLIC_BASE_URL
    const api = 'https://million-app-iota.vercel.app';
      const { data } = await axios.get(
        `${api}/spinner/items`,
        {
          params: { userId: 'b1be8983-a09a-4248-9c85-e21dddbcb7f2', email: email },
        // params: { userId: id == '1111' ? 'cd7c0130-9b18-414b-b597-d607806eb5a5' : id, email: email },
        }
      );

      if (!data?.success || data?.statusCode !== 200) {
        throw new Error(data?.message || "Invalid server response");
      }

      console.log(data.data.length == 1);
       if (data.data.length == 1) {
  
         setDataList(data.data);
          setStep("result");
        

       }
       else if(data.data.length > 1){
        
         setStep("wheel");
       }else{
        //no wheel yet
       }
     

    //   if (data.data?.status === false) {
    //     setStep("prepare");
    //     setTerminal(data.data.terminal || "");
    //     setUserId(data.data.userId || "");
    //   } else {
    //     if (!data.data) throw new Error("No data received");
    //     setDataList([data.data]);
    
    //     timerRef.current = setTimeout(() => {
    //       openModal();
    //     }, 7000);
    //     setStep("result");
    //   }
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
    <div className="absolute inset-0 flex items-center justify-center bg-gray-500 dark:bg-gray-950 bg-opacity-50 dark:bg-opacity-60">
      {/* ^ Adjusted overlay for dark mode */}
      <div className="loader border-t-4 border-blue-500 dark:border-blue-400 rounded-full w-12 h-12 animate-spin"></div>
      {/* ^ Adjusted loader border for dark mode */}
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
          🎉 Spin to Win! Enter your email and give the wheel a spin for a chance to win exciting prizes! 🎁💫
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
                backgroundColor: brands['primaryColor'] + 'CC', // Opacity might need adjustment for dark bg
                color: brands['secondaryColor'],
              }}
              className="absolute left-0 top-0 block w-full h-[38px] rounded-[8px] transition-transform duration-100 ease-in-out translate-y-[6px] group-active:translate-y-[3px]"
              aria-hidden="true"
            ></span>
            <span
              style={{
                backgroundColor: brands['primaryColor'],
                color: brands['secondaryColor'],
              }}
              className="relative text-base block leading-none px-10 py-[10px] h-[38px] box-border rounded-[8px] transition-all duration-100 ease-in-out group-active:translate-y-[3px]"
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

      {/* <img src="" /> {dataList[0]} */}

      {
         dataList[0]['mode'] =='spinnerResult' && (
      <div className=" flex flex-col items-center justify-start w-full">
         <p className="mt-2 mb-3 text-xl font-semibold">Congratulation you won  <strong className="text-[#F3BE40]">{dataList[0]['item']['name']}</strong></p>
<div className="relative group w-[100px] h-[200px]">
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
      <p className="text-gray-300 mb-1">Click the "Spin" button to win a prize.</p>
      
      <SpinWheel wheelData={prizeData}  onItemSelected={handleSpinFinish} />
    </div>
     )}
  </div>
</div>
  );
}



