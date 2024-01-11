import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "./home.css";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Erro ao obter dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const handleDetailsClick = (character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  console.log(selectedCharacter);
  return (
    <div className="container">
      <h2>Personagens de Rick and Morty</h2>
      <div className="row card-container">
        {characters.map((character) => (
          <div key={character.id} className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={character.image}
                className="card-img-top"
                alt={character.name}
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <Button
                  variant="primary"
                  onClick={() => handleDetailsClick(character)}
                >
                  Detalhes
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedCharacter && selectedCharacter.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedCharacter && (
            <>
              <div>
                <img
                  src={selectedCharacter.image}
                  className="img-fluid"
                  alt={selectedCharacter.name}
                />
                <p style={{ marginTop: "10px" }}>
                  Espécie: {selectedCharacter.species}
                </p>
                <p>Genêro: {selectedCharacter.gender}</p>
                <p>Dimensão: {selectedCharacter.location.name}</p>
                <p>Planeta: {selectedCharacter.origin.name}</p>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
