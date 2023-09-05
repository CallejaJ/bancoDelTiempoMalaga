import Carousel from "react-material-ui-carousel";
import CarouselSub from "../../components/Carousel/CarouselSub";
import { Sliders } from "../../components/Carousel/helper/Sliders";

function CarouselHome() {
  return (
    <Carousel>
      {Sliders.map((item) => (
        <CarouselSub key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselHome;