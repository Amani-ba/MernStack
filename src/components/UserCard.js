import React from 'react';
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from 'react-router-dom';

const UserCard = ({UserData}) => {
    const navigate = useNavigate()
    console.log(UserData);
    return (
        <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{UserData.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Money Honey : {UserData.balance}
                    </Card.Subtitle>
                    <Card.Text>
                            Gender : {UserData.gender}
                            Company : {UserData.company}
                            Email : {UserData.email}
                            Age : {UserData.age}
                    </Card.Text>
                    <button onClick={()=> navigate('/user/'+UserData.id)}>
                    {/* to="`/user/${UserData.id}`" */}
                     
                        Card Link
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default UserCard;