import React,{createContext} from 'react'
export const FetchItemsContext =createContext({items:[]}) 
class ItemProvider extends React.Component{
    state ={
        items:[],
        search:'',
        nResults: 0

    }
    FetchItems = async (search)=>{
        const response =await (await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${search}`)).json()
            this.setState({items:response.results,search,nResults:response.paging.primary_results}) 
            //console.log(`resultados en items provider ${response.paging.total}`);
            console.log(response) 

    }

    loadMore =async(offset) =>{
        const response =await (await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${this.state.search}&offset=${50*offset}`)).json()
        this.setState({items:response.results,nResults:response.paging.primary_results})
    }
    render (){
        const fetchItems = this.FetchItems;
        const {items,nResults} = this.state;
        const {children} = this.props;
        const loadMore = this.loadMore;
        console.log(`resultados en itemsP render  ${nResults}`);
        return (

            <FetchItemsContext.Provider value={{fetchItems, items, loadMore,nResults}}>
                {children}    
            </FetchItemsContext.Provider>

        )

    }
 }
 
 export default ItemProvider