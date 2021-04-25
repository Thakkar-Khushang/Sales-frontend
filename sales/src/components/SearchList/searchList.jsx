import React,{useState,useEffect} from 'react';
import {useLocation} from "react-router-dom";
import SearchProducts from '../../Helpers/searchProducts'
import Product from '../Product/product'

const SearchList = () =>{
    const[loading,setLoading] = useState(true)
    const search = useLocation().search;
    const query = new URLSearchParams(search).get('q');
    const data = SearchProducts(query);
    useEffect(()=>{
        if(data.length===0){
            setLoading(false)
        }
    },[])
    if(!(loading || data.length===0)){
    return(
        <>
            <Product props={data}/>
        </>
    )
    }else{
        return(
            <div style={{display:"flex",justifyContent:"center"}}>
                <h1>Products not found</h1>
            </div>
        )
    }
}

export default SearchList