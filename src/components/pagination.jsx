import React, { useState,useContext } from "react";
import Pagination from "react-js-pagination";
import {FetchItemsContext} from './itemsProvider';
require("../../node_modules/bootstrap-less/bootstrap/bootstrap.less");


 
 const Pagination1 =({nResults})=> {

  const [state, setState]=useState(1);
  const results=nResults;
 
     const {loadMore}= useContext(FetchItemsContext);
     console.log(`resultados en pagination results ${results}`); 
      
     

  const handlePageChange=(pageNumber) =>{
    
    console.log(`active page is ${pageNumber}`);
    loadMore(pageNumber-1);
    setState(pageNumber);
    
  }
 
  
    return (
      <div className="pagination">
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          hideDisabled
          activePage={state}
          itemsCountPerPage={50}
          totalItemsCount={results}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    );
  
}
 
export default Pagination1