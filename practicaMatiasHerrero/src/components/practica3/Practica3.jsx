import { useState } from "react";

const Practica3 = () => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (newValue.toLowerCase().includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    } else {
      setUsername(newValue);
    }
  };

  const handleRegister = () => {
    if (username.trim() === "" || username.toLowerCase().includes("o")) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Ingrese su nombre de usuario"
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>{username}</p>
    </div>
  );
};

export default Practica3;
