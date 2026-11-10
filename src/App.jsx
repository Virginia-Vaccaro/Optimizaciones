import { useState } from "react";
import Greeting from "./Greeting";
import Button from "./Button";

const App = () => {
  const [name, setName] = useState("");
  const [book, setBook] = useState("");

  const handleReserve = () => {
    alert(`¡Libro ${book} reservado!`);
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tu nombre"
      />
      <input
        value={book}
        onChange={(e) => setBook(e.target.value)}
        placeholder="Libro deseado"
      />

      <Greeting name={name} />
      <Button onClick={handleReserve} />
    </div>
  );
};

export default App;
