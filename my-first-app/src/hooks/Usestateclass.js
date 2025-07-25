import React, { useState } from "react";

function Usestateclass() {
  const [name, setname] = useState({ Fname: "", Lname: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.Fname}
          onChange={(e) => setname({ ...name, Fname: e.target.value })}
        ></input>
        <input
          type="text"
          value={name.Lname}
          onChange={(e) => setname({ ...name, Lname: e.target.value })}
        ></input>
      </form>
      <h1>your first name is :{name.Fname}</h1>
      <h1>your last name is :{name.Lname}</h1>
    </div>
  );
}

export default Usestateclass;
