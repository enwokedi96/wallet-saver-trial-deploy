import React from "react";
import "./index.css"

function AliExpressColumn (props) {
    return (<ul className="list-group p-2">
        {props.results.map(result => (
            <li className="list-group-item m-2" key={result.item.itemId}>
            <a target="_blank" href={"https://es.aliexpress.com/item/"+result.item.itemId+".html"} >
            <div className="item-heading mb-2">
            <img alt={result.item.itemId} className="img-fluid shrink" src={result.item.image} />
            <h6 className="m-2 item-heading">{result.item.title}</h6>
            </div></a>
            <strong className="property-heading">rating:</strong> <span className="badge badge-info">{`${result.item.averageStarRate}`}</span> <br/>
            <strong className="property-heading">price:</strong> ${result.item.sku.def.promotionPrice} <br/>
            <strong className="property-heading">number of sales:</strong> {result.item.sales} <br/>
            <strong className="property-heading">freeShipping:</strong> {`${result.delivery.freeShipping}`} <br/>
            </li>
        )
        )}
  </ul>
  )
}

export default AliExpressColumn;