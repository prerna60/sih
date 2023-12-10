import styled from "./app.module.css";
import Card from "./components/Card/Card";
import { cardData } from "./utils";

const App = () => {
  return (
    <div className={styled.wrapper}>
      {cardData.map((item) => (
        <Card
          title={item.title}
          subtitle={item.subtitle}
          img={item.img}
          key={item.id}
          borderColor={item.borderColor}
        />
      ))}
    </div>
  );
};

export default App;