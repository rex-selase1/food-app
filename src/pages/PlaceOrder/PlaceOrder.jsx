import "./PlaceOrder.css"
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"



const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form  className="placeorder">
      <div className="placeorder-left">
        <p className="title">
          Delivery Information
        </p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="Zip-Code"/>
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone Number" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Ghc {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Charges</p>
              <p>Ghc {getTotalCartAmount() === 0 ? 0 : 10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>Ghc {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10 }</p>
            </div>
          </div>
          <button onClick={()=>{
            navigate("/placeorder")
          }}>Proceed To Checkout</button>
        </div>
      </div>
    </form>
  )
}
export default PlaceOrder