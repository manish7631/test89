import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
export const Home = () => {
  const [list, SetList] = useState([])

  console.log(list)
  useEffect(() => {
    GetEvent()
 
  }, [])
  const GetEvent = () => {
    axios.get("http://localhost:8080/orders").then(({ data }) => {
      SetList(data)
      console.log('data', data);
    }).catch((err) => { console.log('error', err) })
  }




  return (
    <div className="homepage">
      Welcome to Laptop service center. Please login to continue
 


      <table className="table" border = "1">
          <thead>
            <tr>
              <th>id</th>
              <th>problem</th>
              <th>owner_name</th>
              <th>brand</th>
              <th>cost</th>
              <th>status</th>
               
            </tr>
          </thead>
          <tbody className="tbody">

          {list.map((list) => {
  
            
            {/* populate all rows like below: */}
            return ( <tr  key={uuidv4()}  className="row">
              <td className="id">{list.id}</td>
              <td className="problem">{list.problem}</td>
              <td className="owner_name">{list.owner_name}</td>
              <td className="brand">{list.brand}</td>
              <td className="cost">{list.cost}</td>
              <td className="status">{list.status}</td>
              
            </tr>
           );
               })}
          </tbody>
        </table>
      




    </div>
  );
};
