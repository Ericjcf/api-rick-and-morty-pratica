import { useEffect, useState } from "react";
import CardStatus from "./Componentes/CardRick";
import "./App.css";

function App() {
  const temporario = useState([]);
  const [personagens, setPersonagens] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((response) => setPersonagens(response.results))
      .catch((err) => console.log(err));
  }, [pagina]);
  function proxima() {
    setPagina(pagina + 1);
  }
  function anterior() {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Container-cards">
          {personagens.map((personagem) => (
            // <div key={personagem.id}>
            //   Nome: {personagem.name} Status: {personagem.status}
            // </div>
            <CardStatus
              key={personagem.id}
              pName={personagem.name}
              pStatus={personagem.status}
              pImage={personagem.image}
            />
          ))}
        </div>
        <button onClick={() => anterior()}>anterior</button>
        <span> {pagina} </span>
        <button onClick={() => proxima()}>proxima</button>
      </header>
    </div>
  );
}

export default App;
