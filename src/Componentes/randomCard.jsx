import { useState } from 'react'
import users from '../data/users.json'
import App from '../App'


const RandomCard = () => {

    const [index, setIndex] = useState(0)
    
    const randomIndex = Math.floor(Math.random() * users.length) 
    
    const  Change = () => {
    setIndex(randomIndex)
    }



   return (
      <div>
            <div className='firstContainer'>
              <h1>{`${users[index]?.name.title} ${users[index]?.name.first} ${users[index]?.name.last}`}</h1>

              <img src={users[index].picture.large} alt="" />
            
              <ul className='dataList'>
                 <li>{users[index].email}</li>
                 <li>{users[index].phone}</li>
                 <li>{`${users[index].location.country} ${users[index].location.state} ${users[index].location.city}`}</li>
               </ul>
            </div>

            <div>
              <button onClick={Change}>
                siguiente
              </button>
            </div>

        </div>

      
      
   ) 

}

export default RandomCard