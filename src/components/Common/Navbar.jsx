
function Navbar() {
    const total = 25000;
    const token = false;
    return (
        <nav className="bg-gray-800 flex p-4 text-white">
            <h1 className="font-bold">Pizzería Mamma Mía</h1>
            <ul className="mr-auto flex ml-4 space-x-4">
                <li><a href="/">Home</a></li>
                {token ? <li><a href="/about">Profile</a></li> : <li><a href="/login">Login</a></li>}
                {token ? <li><a href="/logout">Logout</a></li> : <li><a href="/register">Register</a></li>}
                <li><a href="/cart">Total: ${total.toLocaleString("es-CL")}</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;