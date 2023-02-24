import React, { useState } from "react";
import SearchForm from "../../components/SearchTemplate";
import ResultList from "../../components/ResultLists";
// import API from "../../utils/API";
import AmazonAPI from "../../utils/Amazon API";
import AliExpressAPI from "../../utils/AliExpressAPI";
import "./index.css"
function SearchOnlineStores(props) {

  // max num items per column while comparing
  let fixed_num_items= 20;

  // states for input into search field
  const [search, setSearch] = useState("");
  // state for aliexpress output
  const [aliExResults, setaliExResults] = useState([]);
  // state for amazon output
  const [otherStoresResults, setotherStoresResults] = useState([]);

  const searchStores = query => {
    //const requests = API.search(query);
    // if user chooses to search aliexpress only
    if (query!=="" && props.searchOpt==='aliEx'){
      const API = AliExpressAPI;
      const requests = API.search(query);
      requests.then(res => {  
                    console.log(res);
                    setaliExResults(res.data.result.resultList)
                    })
      .catch(err => console.log(err));
    }

    // if user chooses to search amazon only
    else if (query!=="" && props.searchOpt==='amazon'){
      const API = AmazonAPI;
      const requests = API.search(query);
      requests.then(res => {  
        console.log(res);         
        setotherStoresResults(res.data.data.products)
      }).catch(err => console.log(err));
    }

    // if user chooses to search both and compare
    else if (query!=="" && props.searchOpt==='compare'){
      let API = AliExpressAPI;
      let requests = API.search(query);
      // first load ali column
      requests.then(res => {  
        const itemImages = [];
        for (let i=0; i<res.data.result.resultList.length; i++){
          if (i<=fixed_num_items){
              itemImages.push(res.data.result.resultList[i])}
        }
        setaliExResults(itemImages)
      }).catch(err => console.log(err));

      API = AmazonAPI;
      requests = API.search(query);
      // then load ama column
      requests.then(res => {  
        console.log(res); 
        const itemImages = [];
        // res.data.data.products.length
        for (let i=0; i<res.data.data.products.length; i++){
          if (i<=fixed_num_items){
            itemImages.push(res.data.data.products[i])}
        }
        setotherStoresResults(itemImages)
      }).catch(err => console.log(err));
    }
    else{console.log("No viable query entered yet...")}
  };

  const handleInputChange = event => {
    const value = event.target.value;
    setSearch(value);
  };

  // When the form is submitted, search the store APIs for current search item
  const handleFormSubmit = event => {
    event.preventDefault();
    searchStores(search);
  };

  return (
      <>
        {/* <form method="post" action="post" enctype="multipart/form-data">
          <input type="file" name="image" /><br /><br />
          <button type="submit" name="upload">Upload</button>
        </form> */}
        {/* <LandingPage/> */}
        <br/>
        <SearchForm
          search={search}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
        <ResultList 
            results={aliExResults} 
            otherResults = {otherStoresResults}
            searchOpt={props.searchOpt}
            />
        <br/> 
        <br/>
        <div className="horizontal-line"></div>
      </>
    );
  }

export default SearchOnlineStores;
