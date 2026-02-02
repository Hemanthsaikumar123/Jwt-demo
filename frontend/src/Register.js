import { useState } from "react";
import api from "./api";

function Register({ setShowLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await api.post("/register", { email, password });
      alert("Registration successful. Please login.");
      setShowLogin(true);
    } catch (err) {
      alert("User already exists");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={register}>Register</button>

      <p onClick={() => setShowLogin(true)} style={{ cursor: "pointer" }}>
        Already have an account? Login
      </p>
    </div>
  );
}

export default Register;
