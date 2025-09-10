import { useState } from "react";

function App() {
  const [user, setUser] = useState({ fullname: "", username: "", password: "" });
  const [resdata, setResData] = useState(null); 

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:5001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      setResData(data);
      console.log(data, resdata);
    } catch (err) {
      console.error("fetch error: ", err);
    }
  }

  return (
    <div className="bg-orange-100 p-12">
      <h1 className="text-3xl mb-6 text-center">Register User</h1>
      <div className="flex flex-col">
        <form className="flex flex-col" onSubmit={submitHandler}>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="FullName"
            className="bg-white rounded m-2 px-3 py-2"
            value={user.fullname}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            className="bg-white rounded m-2 px-3 py-2"
            value={user.username}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="bg-white rounded m-2 px-3 py-2"
            value={user.password}
            onChange={changeHandler}
          />
          <input
            type="submit"
            value="Register"
            className="border py-2 rounded hover:bg-white"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
