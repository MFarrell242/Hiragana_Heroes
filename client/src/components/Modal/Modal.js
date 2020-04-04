import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
const customStyles = {
  content: {
    margin: " auto auto auto auto",
    height: "400px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

function ModalCard(props) {
  const { setSelectedCharacter, selectedCharacter } = props;
  let name = props.char;

  const [url, setUrl] = useState({
    src: `/images/hiragana/${selectedCharacter.name}.png`
  });

  function handleImgChange() {
    if (selectedCharacter.name === "blank") {
      return url.src;
    } else if (url.src === `/images/hiragana/${selectedCharacter.name}.png`) {
      setUrl({
        ...url,
        src: `/images/hiragana/${selectedCharacter.name}-so.PNG`
      });
    } else {
      setUrl({ src: `/images/hiragana/${selectedCharacter.name}.png` });
    }
  }

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      <Modal
        isOpen={Boolean(selectedCharacter)}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {selectedCharacter && (
          <React.Fragment>
            <img
              src={url.src}
              style={{ height: "min-content", width: "min-content" }}
            />
            <h2>
              Character Name: <strong>{selectedCharacter.name}</strong>
            </h2>
            <h2>
              Pronunciation: <strong>{selectedCharacter.sound}</strong>
            </h2>
            <button onClick={handleImgChange}>Stroke Order</button>
          </React.Fragment>
        )}
      </Modal>
    </div>
  );
}

export default ModalCard;
