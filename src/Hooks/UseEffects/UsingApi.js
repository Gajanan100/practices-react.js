import React, { useEffect, useState } from "react";
import "./UsingApi.css";

export const UsingApi = () => {
  const [users, setUsers] = useState([]);
//   const [loading,setLoading]=useState(true)

  const ApiData = async () => {


    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`);

        setUsers(await response.json());
        
    } catch (error) {
        console.log("my error is"+error);
        
    }

    // console.log(response);
    // console.log(await response.json());
    // const data= await(response.json())
    // console.log(data);
  };

  useEffect(() => {
    ApiData();
  }, []);

  return (
    <div>
      <div className=" container-fluid ">
        <div className="row  justify-content-center flex-none">
          {users.map((value) => {
            return (
              <div className="col col-md-4 border border-1 me-2 " key={value.id}>
                <h2> "postId": {value.postId} </h2>
                <p>"id": {value.id}</p>
                <h4> "name":{value.name},</h4>
                <h3>"email":{value.email} ,</h3>
                <p>"body": {value.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
