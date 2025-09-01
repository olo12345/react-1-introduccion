import { pizzaCart } from "../../assets/pizzas.js";
import { useState, useEffect } from "react";

function Cart() {
    const [cart, setCart] = useState(pizzaCart)
    const [total, setTotal] = useState(cart.reduce((total, pizza) => total + (pizza.price * pizza.count), 0))

    useEffect(() => {
        function calculateTotal() {
            setTotal(
                cart.reduce((totalTemp, pizza) => totalTemp + (pizza.price * pizza.count), 0)
            )
        }
        calculateTotal()
    }, [cart])

    function restarCount(id) {
        const index = cart.findIndex(pizza => pizza.id === id)
        if (cart[index].count === 1) {
            setCart(prevCart => prevCart.filter((pizza, i) => i !== index
            ))
            return
        }
        setCart(prevCart => prevCart.map((pizza, i) => {
            return i !== index ? pizza : { ...pizza, count: pizza.count - 1 }
        }
        ))
    }

    function sumarCount(id) {
        const index = cart.findIndex(pizza => pizza.id === id)
        setCart(prevCart => prevCart.map((pizza, i) => {
            return i !== index ? pizza : { ...pizza, count: pizza.count + 1 }
        }
        ))
    }

    const pizzaCartRender = cart.map((pizza) => (

        <div key={pizza.id} className="flex flex-row bg-white shadow-md rounded-lg m-2 mb-4 items-center">
            <img src={pizza.img} alt={pizza.name} className="h-16 object-cover rounded-2xl ml-2 my-2" />
            <h3 className="text-xl font-semibold mb-2 ml-4">{pizza.name}</h3>
            <div className="flex flex-row items-center ml-auto mr-10">
                <p className="price">Precio: ${pizza.price.toLocaleString("es-CL")}</p>
                <button id={pizza.id} onClick={(e) => restarCount(e.target.id)} className="bg-red-500 text-white mx-5 my-2 py-1 rounded-lg hover:bg-red-600 transition duration-300 w-16 h-16">-</button>
                <p className="">{pizza.count}</p>
                <button id={pizza.id} onClick={(e) => sumarCount(e.target.id)} className="bg-green-500 text-white mx-5 my-2 py-1 rounded-lg hover:bg-green-600 transition duration-300 w-16 h-16">+</button>
            </div>
        </div>
    ))

    return (
        <>
            <h2 className="text-4xl">Carrito de Compras</h2>
            <br />
            <h3 className="text-2xl">Detalles del pedido:</h3>
            <div className="cart">
                {pizzaCartRender}
            </div>
            <h3 className="ml-5 text-2xl"> Total: ${total}</h3>
            <button className="bg-blue-500 text-white mx-5 my-2 py-1 rounded-lg hover:bg-blue-600 transition duration-300 w-16 h-8">Pagar</button>
        </>
    )
}

export default Cart;