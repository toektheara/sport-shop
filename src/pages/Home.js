import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Navfooter from '../components/Navfooter'
import { Link } from 'react-router-dom'
export class Home extends Component {

  render() {
    return (
      <>

        <Navbar/>
       {/* body */}
        <div className='container-fluid barkery'>
           <div className='box1'>
             <p></p>
           </div>  
           <div className='box2'>
               <div className='pic1'>
                  <img src='picture/ronaldo.jpg'/>
                  <img src='picture/manuprd1.jpg'/>
                  <img src='picture/Manulist.jpg'/>
                  <img src='picture/picreal.jpg'/>
               </div>
               <div className='pic2'>
                   <img src='picture/Realmadrid.jpg'/>
               </div>
           </div>  
           <div className='box3'>
            
           </div>          
        </div>
        <div className='container info'>
      
              <ul>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
              </ul>
              <h3>"Quality bread and pastries made to order: <br/>
                Beautiful Cake and Beautiful Occasions."</h3>
                <p>RANDY WOODS</p>          
        </div>
        <div className='container res'>
           <div className='bread'>
             <h2>Sport  lover</h2>
           </div>
           <div className='text'>
               <h2>TODAY’S SPECIAL BAKED FRESH FOR YOU</h2>
               <p>Lorem ipsum dolor sit amet, his convenire similique efficiendi et, et ius brute tation inermis,
                  movet labitur ea cum. Iusto civibus deseruisse.</p>
              <button>Read more</button>
           </div>

        </div>
        <div className='container show'>
              <div className='bread1'>
                 <h5><a href='/cake'>P S G</a></h5>
              </div>
              <div className='bread2'>
              <h5><a href='/cake'>MAN UTD</a></h5>
              </div>
              <div className='bread3'>
              <h5><a href='/cake'>REAL MADRID</a></h5>
              </div>
        </div>
        <h1>OUR SPECIALTIES</h1>
        <p>Lorem ipsum dolor sit amet, his convenire similique efficiendi et,</p>
        
        <div className='container process'>
            <div className='boxes1'>
            </div>
            <div className='boxes2'>
               <h2>HAVE YOU TRIED OUR NEW BROWNIES YET?</h2>
               <p>Duis sed odio sit amet nibh vulputate cursus . Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                   lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
               <button><Link to='/about'>Read more</Link></button>
            </div>
            <div className='boxes3'>
            <h2>HAVE YOU TRIED OUR NEW BROWNIES YET?</h2>
               <p>Duis sed odio sit amet nibh vulputate cursus . Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                   lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
               <button><Link to='/about'>Read more</Link></button>
            </div>
            <div className='boxes4'>
   
            </div>
        </div>
        <Navfooter/>
      </>
    )
  }
}

export default Home