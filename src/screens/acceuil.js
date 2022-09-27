import {React, useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom'


// Import components
import UserCard from '../components/UserCard';
import ProduitCard from '../components/ProduitCard';

 
function Acceuil(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [counter, setCounter] = useState(0)
    console.log(location);
    const users = props.users
    console.log('users => ',users);
    const produits = props.produits
    console.log('produits => ',produits);

    return (
        <div>
            Acceuil
           <button className='btn btn-primary' onClick={()=>navigate("/about")}>Send me to about</button>
            <br/>
            <div className='justify-content-center' style={{display:'flex', flexWrap:'wrap'}}>
             {/* {
                users.map(item => (
                    <UserCard UserData={item}/>
                ))
            }  */}

             {
                produits.map(item => (
                    <ProduitCard ProduitData={item}/>
                ))
            } 
            </div>
            <div>
                <input value ={counter} />
                <button onClick={()=> setCounter(counter+1)}>
                    +
                </button>
                <button onClick={()=> setCounter(counter-1)}>
                    -
                </button>
            </div>
           {/* 
           <button className='btn btn-primary' onClick={()=>navigate(-1)}>Send me to about</button> 
           */}
        </div>
    );
}

export default Acceuil;