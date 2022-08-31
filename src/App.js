import React from "react";
import Navbar from "./HomeNavBar";
import HomeContent from "./HomeContent";
//import Footer from "./HomeFooter";
//import LoginModal from "./HomeLogin"


export default function Home() {
  return (
    
      <div>
       
       <Navbar />
      <HomeContent/>
       {/* <Footer/>*/}
      </div>
  );
}