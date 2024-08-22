import { useState } from "react";
import "./App.css";
import CitySelector from "./components/CitySelector";
import CityCard from "./components/CityCard";

function App() {
  const [card, setCard] = useState({
    name: "Токио",
    description:
      "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
    imageUrl:
      "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
    facts: [
      "Токио - самый населенный мегаполис в мире.",
      "Здесь расположена самая высокая башня в Японии - Токийская башня.",
      "В Токио проходят множество культурных событий и фестивалей.",
    ],
  });

  const setSelectedCard = (selectedCard) => {
    setCard(selectedCard);
  };

  return (
    <div className="container">
      <CitySelector selectedCard={card} setSelectedCard={setSelectedCard} />
      <CityCard {...card} />
    </div>
  );
}

export default App;
