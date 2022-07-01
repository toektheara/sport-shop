import React from 'react'

const CategoryItem=(props)=> {
    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
          <div className="card p-4 list-menu " >
                <img src={props.img} className="card-img-top" />
                 <div className="card-body">
                   <h5 className="card-title">{props.title}</h5>
                   <p className="card-text">{props.price}$</p>
                   <p className="card-text">{props.desc}</p>
                    
                </div>
        </div>
      </div>
    )
}
export default CategoryItem;