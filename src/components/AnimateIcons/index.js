import React, { useEffect, useRef } from "react";
import SVGAnimate from "../SVGAnimate";
import "./index.css";
import { gsap } from "gsap";

// for aliexpress icon
function AnimateIcon(props) {

  const app = props.app;

  // ------------------ GSAP --------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      // # 1
      // gsap.to("[data-animate='rotate']", {
      //   rotation: 360,
      //   repeat: -1,
      //   repeatDelay: 1,
      //   yoyo: true
      // });
      
      // # 2
      gsap.from("[data-animate='move']", {
        x: 50,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      })

      gsap.to("[data-animate='move']", {
        x: -50,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      });

      // # 3
      gsap.from("[data-animate='reverse-move']", {
        x: -50,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      });

      gsap.to("[data-animate='reverse-move']", {
        x: 50,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      });
      
      // 4
      gsap.from("[data-animate='flag']", {xPercent: -10}) 
      gsap.to("[data-animate='flag']", { duration: 1.5, xPercent:10, 
              repeat:-1, yoyo: true, ease:'none' });
      
      // 5
      gsap.from("[data-animate='reverse-flag']", {xPercent: 10}) 
      gsap.to("[data-animate='reverse-flag']", { duration: 1.5, xPercent:-10, 
              repeat:-1, yoyo: true, ease:'none' });

    }, );// <- Scope!
    
    return () => ctx.revert();
  }, []);
  // -------------------------------------------
  return (
    <SVGAnimate
      children = {props.children}
      id = {props.id}
      anim = {props.anim}
    /> );
}

// for aliexpress icon(s)
const AnimateAliExpressIcon = () => {
    return <AnimateIcon children = {<img src="/myIcons/aliexpress.svg" alt=""/>}
            id = "aliexpress" anim = "move"/>
        }

const AnimateAliExpressLargeIcon = (props) =>{
  return <AnimateIcon
          children={<img id="aliExpress" className="img-fluid" 
            src="/myIcons/aliexpress-lrg.svg" alt="AliExpress Icon" 
            onClick={props.handleClick} />}
            id = "aliexpressXL" anim = "flag"
        />
}

// for amazon icon(s)
const AnimateAmazonIcon = () => {
  return <AnimateIcon children = {<img src="/myIcons/amazon.svg" alt=""/>}
          id = "amazon" anim = "reverse-move"/>
      }

const AnimateAmazonLargeIcon = (props) =>{
  return <AnimateIcon
          children={<img id="amazon" className="img-fluid" 
            src="/myIcons/amazon-lrg.svg" alt="Amazon Icon" 
            onClick={props.handleClick} />}
            id = "amazonXL" anim = "reverse-flag"
        />
}

export {AnimateAliExpressIcon, 
        AnimateAliExpressLargeIcon,
        AnimateAmazonIcon,
        AnimateAmazonLargeIcon};
