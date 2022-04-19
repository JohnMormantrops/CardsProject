import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const handleLogin = async (setAuthUser, email, password, navigate) => {
  const data = {
    email,
    password,
  };
  try {
    const res = await fetch("http://localhost:3000/user/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status !== 200) {
      const { err } = await res.json();
      alert(err);
    } else {
      const { jwtToken } = await res.json();
      // console.log("HERE IS THE JWT")
      // console.log(jwtToken)
      localStorage.setItem("token", jwtToken);
      setAuthUser(jwtToken);
      navigate("/home");
    }
  } catch (error) {
    alert(error);
  }
};

const Login = ({ setAuthUser }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const setAuthUser = props.setAuthUser;
  //console.log(props)

  return (
    <div
      style={{
        marginTop: "150px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 className="heading">Already a member? Sign in!</h2>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={() => handleLogin(setAuthUser, email, password, navigate)}
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
