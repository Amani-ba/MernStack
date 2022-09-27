import React from 'react';
import {useParams} from 'react-router-dom';
function Produit(props) {
    //let users = props.users ;
    console.log('produits => ',props.produits);

    const params = useParams();
    console.log('params ', params);
    const produit =  props.produits.find(item=> (item.id == params.id))
    console.log(produit);
    return (
        <div>
             <h1>
             {produit.productName}            </h1>
            <p>
            Money Honey : {produit.price}

            department : {produit.department}
                            Color : {produit.color}
                            Adjective : {produit.productAdjective}
                            Material : {produit.productMaterial}
                            product : {produit.product}
            </p> 
        </div>
    );
}

export default Produit;