import React,{useState, useContext} from "react";
import ItemList from "./itemList";
import {FetchItemsContext} from './itemsProvider';
const SearchBar =()=>{
    const [search,setSearch]=useState('');
    const [loading,setLoading]=useState(false);
    const {fetchItems, items,nResults} = useContext(FetchItemsContext);
    return (
    <div>
        <nav className="navbar navbar-light bg-light">
        <div class="navbar-brand" >
    <img src="" width="30" height="30" class="d-inline-block align-top" alt=""></img>
    Mercados Steve
  </div>
        <form className="form-inline" onSubmit={e=>{
            e.preventDefault();
            setLoading(true);
            fetchItems(search);
        }}>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" value={search} onChange={e=>{
                setSearch(e.target.value);
            }} ></input>
        <button className="btn btn-outline-success my-2 my-sm-0">Buscar</button>
        </form>
    </nav>
    <ItemList items={items} loading={loading} nResults={nResults}/>
    </div>
    )
}//#fff159 ffe600 2d3277

export default SearchBar