import React from "react";
import Item from "./item"
import Pagination1 from "./pagination";
const ItemList =({items,loading,nResults})=>{
  console.log(`resultados en itemlist ${nResults}`)
    return (
        <div className="container">
            {!items.length ? (
        <div>{loading ? <h1>loading</h1> : <h1>No items found</h1>}</div>
      ) : (
        <div>
          <h1>Items</h1>
          <div className="row">
            
              {items.map(item => (
                <div className="col-md-5 col-sm-6  col-lg-4 mb-4 card-deck">
                  <Item item={item} key={item.id} />
                </div> 
              ))}
            
          </div>
          
         <div className="d-flex justify-content-center">
         <Pagination1 nResults={nResults}/>
         </div>
        </div>
      )}
        </div>
    )

}
export default ItemList