
import React from 'react'
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";

export default function ErrorAnimation() {

      const { rives,RiveComponent } = useRive({
     src:"/crying.riv", // Replace with your .riv file path
    autoplay: true,
     animations:'Splash',
     stateMachines:'State Machine 1', 
       layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center
    }),
     
     // Optional
     onLoadError: () => console.log("ERROR LOADING RIVE"),
    onLoad: () => console.log("LOADED RIVE"),
  });
  return (
    <RiveComponent style={{ width: "200px", height: "200px" }} />
  )
}

