import "./App.css";
import Carousel, { CarouselItem } from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem>
          {/* <div className="card">
            <div className="card-icon">

            </div>
            <div className="card-content">
              <h4>Card title</h4>
              <p>Lorem ipsum dolor sit amet consectetur, </p>
            </div>
          </div> */}
         item 1
        </CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
