import React, { useEffect, useState } from "react";
import axios from "axios";
import dhoni from "./assets/images/dhoni.jpeg";
function Api() {
  let [players, setPlayers] = useState([]);
  let [keys, setKeys] = useState([]);
  let [button, setButton] = useState(false);
  useEffect(() => {
    //   let myApi = fetch("http://localhost:3030/players");
    //   myApi.then(data =>
    //     data.json().then(ans => {
    //       console.log(ans);
    //       setPlayers(ans);
    //     })
    //   );

    axios.get("http://localhost:3030/players").then(res => {
      console.log("res", res)
      console.log(res.data)
      setPlayers(res.data)
      setKeys(Object.keys(res.data[0]));
      console.log(Object.keys(res.data[0]));
    });
  }, []);

  return (
    <div>
      <center>
        <button onClick={() => setButton(!button)}>
          {button ? "hide" : "show"} Table
        </button>
      </center>
      {button && (
        <table
          className="table"
          border={"2px"}
          rules="all"
          cellPadding={"10px"}
        >
          <thead>
            <tr>
              {keys.map(a => {
                return <th>{a}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {players.map(a => {
              return (
                <tr key={a.name}>
                  <td>{a.name}</td>
                  <td>{a.age}</td>
                  <td>{a.desig}</td>
                  <td>{a.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <img src={dhoni} alt="" />
    </div>
  );
}

export default Api;
