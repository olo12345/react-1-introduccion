import Header from "./Header";
import CardPizza from "./CardPizza";
import {pizzas} from "./../../assets/pizzas.js";

export default function Home() {

    const RenderPizzas = () => {
        return pizzas.map(pizza => (
            <CardPizza
                name={pizza.name}
                img={pizza.img}
                price={pizza.price}
                ingredients={pizza.ingredients}
                key={pizza.id}
            />
        ))
    }

    return (
        <div className="mx-auto w-full">
            <Header />
            <div className="gallery">
            <RenderPizzas />
            </div>

        </div>
    );
}