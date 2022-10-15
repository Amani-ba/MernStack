import {React, useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom'

// Call a specifique selectore of state
import { useDispatch, useSelector} from 'react-redux'


// Import components
import ProduitCard from '../components/ProduitCard';
import { addOne,addNumber, getProducts, getOneProduct } from '../redux/counterSlice';
//import UserCard from '../components/UserCard';

 
function Acceuil(props) {


    const {number, products, errors, loading, product, errorsProduct, loadingProduct
    } = useSelector(state => state.counter)
    
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getProducts())
        dispatch(getOneProduct({id:1}))
    }, [dispatch]);

    console.log('number', number);
    console.log('products', products);
    console.log('errors', errors);
    console.log('loading', loading);


    
    console.log('Single Product', product);
    console.log('errorsProduct', errorsProduct);
    console.log('loadingProduct', loadingProduct);
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
           counter : {number}
           <button onClick={()=>{ dispatch(addNumber(2))}} >Add one</button>
        </div>
    );
}

export default Acceuil;