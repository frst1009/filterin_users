import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [categories, setcategories] = useState([]);
    const [currentPage, setcurrentPage] =useState(1);

    useEffect(() => {
        axios.get('https://reqres.in/api/products'+id)
            .then(res => {
                setcategories(res.data.data);
            })
            .catch(err => {
                console.log('Err', err);
            })
    },[])

  return (
    <div>
<table>
    <thead>
        <tr>
            <td>id</td>
            <td>name</td>
            <td>year</td>
            <td>color</td>
            <td>value</td>
        </tr>
    </thead>
    <tbody>
        {
           categories && categories.map(item=>(
                <tr key={item.id}>
                <td >{item.id}</td>
                <td >{item.name}</td>
                <td >{item.year}</td>
                <td >{item.color}</td>
                <td >{item.pantone_value}</td>
                </tr>
            ))
        }
    </tbody>
</table>
<select name="opt" id="opt" onChange={}>
    <option value="">6</option>
    <option value="">12</option>
    <option value="">24</option>
</select>
    </div>
  )
}

export default Home