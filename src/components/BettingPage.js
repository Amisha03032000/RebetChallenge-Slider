import React from "react";
import Header from "./Header";
import "../styles/BettingPage.css";
import NflStatus from "./NflStatus";
import MatchVs from "./MatchVs";
import Slider from "./Slider";



function BettingPage() {
 
  return (
    <div className="betting-page-container">
   
      <Header />
      <NflStatus />
      <MatchVs />
      <Slider />
     
    </div>
  );
}

export default BettingPage;
