

const Appfooter = () => {
  return (
     <header className="flex justify-around items-center h-20 bg-slate-50 border-b-2">
              <h1 className="text-3xl italic underline font-semibold">Shopping Cart</h1>
              <nav>
            <ul className="nav flex gap-10">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="products">Products</a>
                </li>
                <li>
                    <a href="/cart">Cart</a>
                </li>
            </ul>
             </nav>
        </header>
  )
}

export default Appfooter