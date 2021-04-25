import React,{useState,useEffect} from 'react';
import {useLocation} from "react-router-dom";
import FilterProducts from '../../Helpers/filterProducts'
import Product from '../Product/product'

const FilterList = () =>{
    const[loading,setLoading] = useState(true)
    const search = useLocation().search;
    const filter = new URLSearchParams(search).get('f');
    const data = FilterProducts(filter);
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
                    <h1>Products not found..</h1>
                </div>
            )
}
}

export default FilterList