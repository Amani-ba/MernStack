import React from 'react';
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from 'react-router-dom';

const ProduitCard = ({ProduitData}) => {
    const navigate = useNavigate()
    console.log(ProduitData);
    return (
        <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{ProduitData.productName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Money Honey : {ProduitData.price}
                    </Card.Subtitle>
                    <Card.Text>
                    department : {ProduitData.department}
                            Color : {ProduitData.color}
                            Adjective : {ProduitData.productAdjective}
                            Material : {ProduitData.productMaterial}
                            product : {ProduitData.product}
                    </Card.Text>
                    <button onClick={()=> navigate('/produit/'+ProduitData.id)}>
                    {/* to="`/user/${ProduitData.id}`" */}
                     
                        Card Link
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProduitCard;