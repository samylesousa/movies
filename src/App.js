import './App.css';
import Botao from './components/botaoInicial';
import React, {useState} from 'react';
import Modal from './components/Modal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const filmes = [
    {id: 1, titulo: "Before Sunrise", data: "1995", imagem: "/filmes/before-sunrise.jpg"},
    {id: 2, titulo: "Fallen Angels", data: "1995", imagem: "/filmes/fallen-angels.jpg"},
    {id: 3, titulo: "The Power of the Dog", data: "2021", imagem: "/filmes/power-dog.jpg"},
    {id: 4, titulo: "Palo Alto", data: "2013", imagem: "/filmes/palo-alto.jpg"},
    {id: 5, titulo: "The Virgin Suicides", data: "1999", imagem: "/filmes/virgin-suicides.jpg"},
    {id: 6, titulo: "Sixteen Candles", data: "1984", imagem: "/filmes/sixteen-candles.jpg"},
    {id: 7, titulo: "The Breakfast Club", data: "1985", imagem: "/filmes/breakfast-club.jpg"},
    {id: 8, titulo: "Harold and Maude", data: "1971", imagem: "/filmes/harold-maude.jpg"},
  ]

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <div className="centered-content">
        <h1>Opções de Filmes Disponíveis</h1>
        <Botao texto="Clique aqui" onClick={openModal} />
      </div>


      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Filmes</h2>
        <p>Esses são os meus favoritos, escolha um deles para assistir!</p>
        <div className="poster-container">
          {filmes.map((filme) => (
            <div key={filme.id} className="poster-item">
              <img src={filme.imagem} alt={filme.titulo} className="poster-image" />
              <h3>{filme.titulo}</h3>
              <p>{filme.data}</p>
            </div>

          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
