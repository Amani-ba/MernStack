import React from 'react';
import {useParams} from 'react-router-dom';
function User(props) {
    //let users = props.users ;
    console.log('users => ',props.users);

    const params = useParams();
    console.log('params ', params);
    const user=  props.users.find(item=> (item.id == params.id))
    console.log(user);
    return (
        <div>
             <h1>
            {user.name}
            </h1>
            <p>
                Gender : {user.gender}<br/>
                Company : {user.company}<br/>
                Email : {user.email}<br/>
                Age : {user.age}
            </p> 
        </div>
    );
}

export default User;