import { useState } from "react"
import { useNavigate } from "react-router";
import React from "react";

const Register = ({setAuthUser}) => {
	let navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = async () => {
		const data = {
			email,
			password
		}
		try {
			const res = await fetch("http://localhost:3000/user/register", {
				mode: 'cors',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			
			if (res.status !== 200) {
				const { err } = await res.json();
				alert(err)
			} else {
				const { jwtToken } = await res.json();
				localStorage.setItem("token", jwtToken);
				setAuthUser(jwtToken)
				navigate("/home");
			}
		} catch (error) {
			alert(error);
		}
	}

	return (
		<div style={{marginTop: "150px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
			<h2 className="heading shadow">New User? Register here!</h2>		
			<div>
				<input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
			</div>
			<div>
				<input type="Password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
			</div>
			<button onClick={handleRegister}>register</button>
		</div>
	)
}

export default Register;