import { useState } from 'react'
import users from '../data/users.json'
import App from '../App'


const RandomCard = () => {
    
    const [index, setIndex] = useState(0)
    
    const randomIndex = Math.floor(Math.random() * users.length)
    
    const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]

    const newColors = Math.floor(Math.random() * colors.length);
    const [indexColors, setColors] = useState(0)
    
    const  Change = () => {
    setIndex(randomIndex);
     
    setColors(newColors);
    }

   return (
      <div className='contenedor-general' style={{background:colors[indexColors]}} >
            <div className='firstContainer' style={{color:colors[indexColors]}}>
              <h1>{`${users[index]?.name.title} ${users[index]?.name.first} ${users[index]?.name.last}`}</h1>

              <div className='imagen'>
                 <img className='imagen-perfil' src={users[index].picture.large} alt="imagen"/>
              </div>
            
              <ul className='dataList'>
                  <li className='item'>
                     <img className='icon' style={{background:colors[indexColors]}} src="https://img.icons8.com/fluency/48/null/composing-mail.png" alt="icono"/>  
                     {users[index].email} 
                  </li>
                 
                  <li className='item'>
                     <img className='icon' style={{background:colors[indexColors]}} src="https://img.icons8.com/flat-round/64/null/phone.png" alt="icono"/>
                     {users[index].phone}
                  </li>
                  
                  <li className='item'> 
                     <img className='icon' style={{background:colors[indexColors]}} src="https://img.icons8.com/ios/50/null/marker-o.png" alt="icono"/>
                     {`${users[index].location.country} ${users[index].location.state} ${users[index].location.city}`}
                  </li>

               </ul>
            </div>

            <div>
              <button className='button' onClick={Change}>
                Next
              </button>
            </div>

        </div>

      
      
   ) 

}

export default RandomCard