import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './get.css'
function GetUsers() {
  let [api, setApi] = useState([]);
  let [updateid, setUpdateId] = useState();
  let [newdata, setNewData] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3030/users/").then(res => setApi(res.data));
  }, []);
  console.log(api);

  function del(id) {
    axios.delete("http://localhost:3030/users/" + id).then(res => {
      console.log("this is res", res.data);
      setApi(prev => prev.filter(a => a.id !== id));
    });
    navigate("/");
  }

  function handleChange(e, id) {
    // setNewData(api.filter(a => a.id == id));
    // console.log(newdata, "after kajdfklajsddfjksh");
    const { name, value } = e.target;
    setNewData(prevdata => ({ ...prevdata, [name]: value }));
    console.log("This is new data", newdata);
  }

  function update(id) {
    axios.put("http://localhost:3030/users/" + id, newdata).then(res => {
      console.log("updation success");
      axios.get("http://localhost:3030/users/").then(res => {
        console.log("this is all data after updation");
        setApi(res.data);
        navigate("/");
        setUpdateId(null);
      });
    });
  }

  function addnew() {
    axios.post("http://localhost:3030/users", newdata).then(res => {
      console.log("new data added", newdata);
      axios.get("http://localhost:3030/users").then(res => setApi(res.data));
    });
  }

  return (
    <div>
      <table rules="all" border="2px" cellPadding={"10px"}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Update / Delete</th>
          </tr>
        </thead>
        <tbody>
          {api.map(a => {
            return (
              <tr key={a.id}>
                <td>{a.id}</td>
                {updateid === a.id ? (
                  <>
                    <td>
                      <input
                        onChange={e => handleChange(e, a.id)}
                        name="name"
                        type="text"
                        value={newdata.name}
                      />
                    </td>
                    <td>
                      <input
                        onChange={e => handleChange(e, a.id)}
                        type="text"
                        name="email"
                        value={newdata.email}
                      />
                    </td>
                    <td key={a.id}>
                      <button onClick={() => update(a.id)}>Save</button>
                      <button onClick={() => del(a.id)}>Delete</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{a.name}</td>
                    <td>{a.email}</td>
                    <td key={a.id}>
                      <button onClick={() => setUpdateId(a.id)}>Update</button>
                      <button onClick={() => del(a.id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            );
          })}
          <tr>
            <td colSpan={2}>
              <input
                onChange={e => handleChange(e)}
                type="text"
                placeholder="name"
                name="name"
              />
            </td>

            <td colSpan={2}>
              <input
                onChange={e => handleChange(e)}
                type="text"
                name="email"
                placeholder="email"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <button onClick={addnew} style={{ width: "100%" }}>
                add data
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GetUsers;
