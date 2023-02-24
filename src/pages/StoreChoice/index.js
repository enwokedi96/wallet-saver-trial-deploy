import React, { useState, useEffect } from "react";
import "./index.css"
import { AnimateAliExpressLargeIcon, AnimateAmazonLargeIcon } from "../../components/AnimateIcons";
import { useNavigate   } from "react-router-dom";

function ChooseStore (props) {

    let choice;
    const navigate = useNavigate();
    const [isStoreChosen, setisStoreChosen] = useState(false);
    const [searchOpt, setSearchOpt] = useState("");

    const handleClick = e => {
        e.preventDefault();
        choice = e.target.id;
        console.log(`User choose ${choice}.`);
        setSearchOpt(choice);
        setisStoreChosen(true);
      }

    useEffect(() => {
        // Checking if store is clicked
        if (!isStoreChosen) {
          console.log("waiting on user...")
        } else {
          navigate("/search/stores/"+searchOpt);
        }
      }, [navigate, isStoreChosen, searchOpt]);

    return (
        <div className="container-fluid">
            <br/>
            <div className="row">
                <h3 className="text-center">Select an Online Store </h3>
                <div className="col-md-6 col-sm-12">
                <div className="logos d-flex justify-content-center">
                  <AnimateAliExpressLargeIcon handleClick={handleClick}/>
                </div>
                </div>
                <div className="col-md-6 col-sm-12">
                <div className="logos d-flex justify-content-center">
                    <AnimateAmazonLargeIcon handleClick={handleClick}/>
                </div>
                </div>
            </div>
            {/* or just compare stuffs...? */}
            <div className="row">
              <div className="col-12">
                <h4 className="text-center">Or Click Below To Compare Between Stores</h4>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" 
                        id="compare" onClick={handleClick}>
                            Compare Stores!
                    </button>
                  </div>
                  <br/> 
                  <br/>
                  <div className="horizontal-line"></div>
              </div>
            </div>
        </div>
    )
}

export default ChooseStore;