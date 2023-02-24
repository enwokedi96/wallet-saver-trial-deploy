import React from "react";

function CalcDiscount(product_original_price, product_price){
    let discount;
    if (typeof product_original_price === 'string' && typeof product_price === 'string'){
         discount = ` (${Math.floor(((parseInt(product_original_price.slice(1)) - 
                            parseInt(product_price.slice(1))) * 100 /
                            parseInt(product_original_price.slice(1))
                            ))}% discount)`;
    }
    else {
         discount = ""; //" (no discount)"
    }
    return discount;
}

function AmazonColumn (props) {
    return (<ul className="list-group p-2">
        {/* real-time search data extractor 
        {props.otherResults.map(result => (
            <li className="list-group-item m-2" key={result.product_id}>
            <a target="_blank" href={result.product_title} >
            <div className="d-flex align-items-center mb-2">
            <img alt={result.product_id} className="img-fluid shrink" src={result.product_photos[0]} />
            <h4 className="m-2 item-heading">{result.product_title}</h4>
            </div></a>
            <strong>rating:</strong> {result.product_rating} <br/>
            <strong>price:</strong> ${result.offer.price+result.offer.tax} <br/>
            <strong>reviews:</strong> <a target="_blank" href={result.product_reviews_page_url}> Click here </a> 
            <strong>|</strong>
            <strong>Reviews:</strong> <a target="_blank" href={result.product_title}> Click here </a> 
            <br/>
            <strong>shipping:</strong> {`${result.offer.shipping}`} <br/>
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                View Description
            </button>
            <Modal 
                modal_title = "Product Description"
                modal_content = {result.product_description}
            /> 
            </li>*/}

        {/* Amazon Search Result Extractor */}
        {props.otherResults.map(result => (
            <li className="list-group-item m-2 item-content" key={result.asin}>
            <a target="_blank" href={result.product_url} >
            <div className="item-heading mb-2">
            <img alt={result.asin} className="img-fluid shrink" src={result.product_photo} />
            <h6 className="item-heading m-2">{result.product_title}</h6>
            </div></a>
            <strong className="property-heading">rating:</strong> <span className="badge badge-info">{`${result.product_star_rating}`}</span> <br/>
            <strong className="property-heading">price:</strong> {result.product_price + CalcDiscount(result.product_original_price,result.product_price)} <br/>
            <strong className="property-heading">Current Offers:</strong> {result.product_num_offers}<br/>
            <strong className="property-heading">Best Seller?:</strong> {`${result.is_best_seller}`} <br/>
            </li>
        )
        )}
  </ul>
  )
}

export default AmazonColumn;