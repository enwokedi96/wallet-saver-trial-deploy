import React from "react";
import "./index.css";
import AliExpressColumn from "../AliExpressColumn";
import AmazonColumn from "../AmazonColumn";
import {AnimateAliExpressIcon, AnimateAmazonIcon} from "../AnimateIcons/index";

function ResultList(props) {
  let columnSize;
  let allResults;
  console.log(`options: ${props.searchOpt}`)

  // if user choice is to compare both online store items
  if (props.searchOpt==="compare"){
    columnSize = "col-6";
    allResults = (<div className="row">
                    <h2 className="page-heading"> Comparing Various Store Searches</h2>
                    
                    <div className={columnSize}>
                      <div className="svg-container">
                        <AnimateAliExpressIcon />
                      </div>
                      <h3 className="page-subheading"> AliExpress List </h3>
                      <AliExpressColumn results={props.results}/>
                    </div>

                    <div className={columnSize}>
                      <div className="svg-container">
                        <AnimateAmazonIcon />
                      </div>
                    <h3 className="page-subheading"> Amazon List </h3>
                      <AmazonColumn otherResults={props.otherResults}/>
                    </div>
                  </div>);
  }
  
  // if user choice of single-store search is aliexpress
  else if (props.searchOpt==="aliExpress"){
    columnSize = "col-12";
    allResults =  (<div className="row">
                    <h2> {props.searchOpt} Store Search Results </h2>
                    <div className={columnSize}>
                      <AliExpressColumn results={props.results}/>
                    </div>
                  </div>);
  }

  // if user choice of single-store search is aliexpress
  else if (props.searchOpt==="amazon"){
    columnSize = "col-12";
    allResults =  (<div className="row">
                    <h2> {props.searchOpt} Store Search Results </h2>
                    <div className={columnSize}>
                      <AmazonColumn otherResults={props.otherResults}/>
                    </div>
                  </div>);
  }

  return (
    <div className="container-fluid">{allResults}</div>
  );
}

export default ResultList;
