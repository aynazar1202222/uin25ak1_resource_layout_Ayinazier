import { useEffect, useState } from "react";

export default function Login({ storageUser, setSignedIn, signedIn }) {
  const [userLogin, setUserLogin] = useState([]);
  const [error, setError] = useState();

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUserLogin((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const existingUser = JSON.parse(storageUser);
    const exists =
      userLogin.username === existingUser.username &&
      userLogin.password === existingUser.password;
    console.log(exists);
    exists
      ? setSignedIn(ture)
      : setError("Bruker navn eller password stemmer ikke");

    sessionStorage.setItem("Login", true);
  };

  return (
    <section>
      <h1>Logg in</h1>
      <form>
        Bruker navn
        <label>
          <input
            type="text"
            placeholder="Aynazar..."
            name="username"
            onChange={handleChange}
          />
        </label>
        <label>
          Passord
          <input
            type="passeword"
            placeholder="*********"
            name="password"
            onChange={handleChange}
          />
        </label>
        <button onClick={handleClick}>Logg inn</button>
      </form>
      {error}
    </section>
  );
}
