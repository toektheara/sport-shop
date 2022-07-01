import React, { Component } from 'react'
import CategoryItem from './CartegoryItem'
import data from './data'
const CategoryCart =()=> {
        return (
            <div>
         <div className=" container">
            <div className="row justify-content-center">
            
                {data.cake.map((item , index)=>{
                    return(
                        <CategoryItem img={item.img} 
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        item={item}
                        key={index} />
                    )
                })}            
             </div> 
            </div> 
         
            </div>
        )
    }

export default CategoryCart
