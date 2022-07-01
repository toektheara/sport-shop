import React from 'react'
import { a } from 'react-router-dom'
function  Navfooter() {
  return (
    <>
        <div className='container-fluid footer'>
           <di className='container box-footer'>

                <div className='boxf-1'>
                    <h1><a href='/'>PANADERIA</a></h1>
                    <p>Just like a perfectly baked pastry,
                       we created Panadería with special 
                       love – and it shows.</p>
                </div>
                <div className='boxf-2'>
                <h1>USEFUL Link</h1>
                <ul>
                <li><a href='/'><i className="fa fa-home"></i>: HOME</a></li>
                <li><a href='About'><i className="fa fa-user"></i>: ABOUT US</a></li>
                <li><a href='cake'><i className="fa fa-shopping-cart"></i>: SHOP</a></li>
                <li><a href='Category'><i className="fa fa-bread-slice"></i>: CAKE</a></li>
                </ul>
                </div>
                <div className='boxf-3'>
                    <h1>NEW</h1>
                    <div className='list-box'>
                       <img src='picture/Manu11.jfif'/>
                       <h4>BAKING HAPPY.</h4>
                       <p>MARCH 18, 2019</p>
                    </div>
                    <div className='list-box'>
                       <img src='picture/Man3.jfif'/>
                       <h4>BREADS and PASTRIES</h4>
                       <p>MARCH 18, 2019</p>
                    </div>
                </div>
                <div className='boxf-4'>
                    <h1>INSTAGRAME</h1>
                    <div className='ig-img'>
                    <img src='picture/ronaldo.jpg'/>
                    <img src='picture/manuprd1.jpg'/>
                    <img src='picture/Manulist.jpg'/>
                    <img src='picture/picreal.jpg'/>
                    </div>
                </div>
           </di>

           <div className='container social'>
           <ul>
               <li><i className="fa-brands fa-facebook-f"></i>:Facebook</li>
               <li><i className="fa-brands fa-instagram-square"></i>:INSTAGRAM</li>
               <li><i className="fa-brands fa-twitter"></i>:TWITER</li>
               <li><i className="fa-brands fa-pinterest"></i>:PINTEREST</li>
           </ul>
           </div>
        </div>
       
    </>
  )
}

export default Navfooter