import './cart.css'

const Cart = ({cartData, setCartData, addCart}) => {
    return (
        <section className="cart">
            <div className="container">
              {
                cartData.map(item =>{
                    return <div key={item.id} className="cart-item">
                        <div className="cart-item-left">
                            <img src={item.image} alt="" />
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                       </div>
                       <div className="cart-item-right">
                           <button>-</button>
                           <span>{item.count}</span>
                           <button>+</button>
                       </div>
                       <p>price: ${item.price * item.count}</p>
                       <button>delete</button>
                </div>
                })
              }
            </div>
        </section>
    );
}

export default Cart;
