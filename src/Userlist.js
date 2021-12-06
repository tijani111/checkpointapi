import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import UserCard from './UserCard';
export default function UserList() {
    const [list,setList] = useState([]);
        useEffect(() => {
      
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setList(res.data))
            .catch(err => console.log(err))
          
        }, [])
            
         
    return (
        <div className="card">
       {list.map(el=><UserCard user={el}/>)}
   
        </div>
    );
}
