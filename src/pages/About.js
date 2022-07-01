import React from 'react'
import Navbar from '../components/Navbar'
import Navfooter from '../components/Navfooter'
export default function About() {
  return (
    <>
        <Navbar/>
        <div className='container-fluid ad'>
           <div className='empty'>
         
           </div>
           <div className='ad-pic'>
            
           </div>
           <div className='empty'>
              
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
        <div className='container detail'>
              <div className='box-pic'>
                 <div className='txt-title'>
                    <h1>TODAY’S SPECIAL</h1>
                    <p>Manchester United</p>
                 </div>
                 <div className='under-pic'>
                    <img src='picture/ManuB2.jpg' />
                 </div>
              </div>
              <div className='box-txt'>
                 <div className='txt-text'>
                    <p><span id='lb'>B</span>e mel dico temporibus, ex mel error utamur nusquam. Usu invenire percipitur cotidieque cu.
                        Vis perfecto moderatius comprehensam et, blandit lucilius duo an, et euismod placerat vis.
                         Eam debitis appareat no, mei justo referrentur an. Noster vivendum persecuti ea ius. Scripta 
                         constituam quo et. Prima decore ocurreret mei ex, meis vitae est ad. Nec in decore offendit referrentur,
                          ut cum admodum temporibus, ad vim ridens postulant. Probatus mediocrem neglegentur ut ius, ne quo facilisis
                           quaerendum. Eum fierent erroribus theophrastus et.

                     </p>
                 </div>
                 <div className='txt-about'>
                     <h2>QUALITY BREADS AND PASTRY</h2>
                     <p>Novum nominavi instructior eos ne, id invidunt mediocrem mei. Cum sint complectitur ad, te vix nibh vocibus consetetur.
                         Has et sale civibus recteque, vitae quaestio te nam. Usu no copiosae apeirian. Zril bonorum euripidis per et.
                          Ridens lobortis pro at.</p>
                 </div>
              </div>
        </div>
        
      <Navfooter/>
    </>
  )
}
