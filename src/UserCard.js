import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
export default function UserCard({user}) {
    return (
        <div className="user">
             <Card style={{width:"18rem"},{backgroundColor:'grey'}}>
             
    <Card.Body>

    
    
      <h3> {user.name} </h3>
      <h3> {user.username} </h3>
      <Card.Title> {user.phone}</Card.Title>
      <Card.Title> {user.website}</Card.Title>
      <Card.Title> {user.email}</Card.Title>

    </Card.Body>
   
  </Card>
        </div>
    )
}
