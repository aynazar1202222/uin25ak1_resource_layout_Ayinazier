import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [inputname]: inputvalue }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    console.log("User registered:", user);
    navigate("/login");
  };

  return (
    <section>
      <h1>Register User</h1>
      <form>
        <label>
          E-post
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="JhonnyBravo@...."
          />
        </label>
        <label>
          Full Name
          <input
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Jhonny Bravo"
          />
        </label>
        <label>
          Username
          <input
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="Jhonny..."
          />
        </label>
        <label>
          Password
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="*"
          />
        </label>
        <button onClick={handleClick}>Register New Account</button>
      </form>
    </section>
  );
}
