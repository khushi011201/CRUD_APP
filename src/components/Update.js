import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../components/style.css';






function Update() {
    const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();



 const handleUpdate= (e)=>{
    e.preventDefault()
    axios.put(`https://654efc6d358230d8f0ccf039.mockapi.io/crud/${id}`,
    {
        name: name,
        email: email,
    })

    .then(() => {
        navigate("/read");
      });


 }


  useEffect(()=>{
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));


  },[]);


  return (
    <div>


       <div className="d-flex justify-content-between m-2">
        <h2 style={{ textAlign: "center", width: "100%" }}>Update your data</h2>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange ={(e) => setName(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange ={(e) => setEmail(e.target.value)}/>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
>
          Update
        </button>

        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </div>
  )
}

export default Update
