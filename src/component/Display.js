import React, { useState } from "react";
import Form from "./Form";
import ContactCardList from "./ContactCardList";

const Display = () => {
  const [newCard, setNewCard] = useState([]);

  const addNewCard = (cardInfo) => {
    setNewCard(newCard.concat(cardInfo));
  };

  return (
    <>
      <main className="main-body">
        <div className="display-container">
          <Form onSubmitNow={addNewCard}></Form>
          <ContactCardList newCard={newCard}></ContactCardList>
        </div>
      </main>
    </>
  );
};

export default Display;
