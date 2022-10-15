import {useParams} from 'react-router-dom';
import {React, useState} from 'react';

function Produit(props) {
    //let users = props.users ;
    console.log('produits => ',props.produits);
    const [counter, setCounter] = useState(0)

    const params = useParams();
    console.log('params ', params);
    const produit =  props.produits.find(item=> (item.id == params.id))
    console.log(produit);
    return (
        <div className='row'>
            <h1>{produit.productName}</h1>
            <div className='col-6'>
             <img src={produit.url} className="img-responsive" style={{width: '30vw', height: '40vw'}} />
             </div>
            <div className='col-6'>
                <p>
                    Money Honey : {produit.price}
                    <br/>
                    department : {produit.department}
                    <br/>
                    Color : {produit.color}
                    <br/>
                    Adjective : {produit.productAdjective}
                    <br/>
                    Material : {produit.productMaterial}
                    <br/>
                    product : {produit.product}
                </p> 
                <div>
                    <input value ={counter} />
                    <button onClick={()=> setCounter(counter+1)}>
                        +
                    </button>
                    <button onClick={()=> setCounter(counter-1)}>
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Produit;