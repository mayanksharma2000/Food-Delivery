import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
// import axios from 'axios'

const PlaceOrder = () => {

const {getTotalCartAmount} = useContext(StoreContext)
// ,token,food_list,cartItems,url

// const [data,setData] = useState({
//   firstName:"",
//   lastName:"",
//   email:"",
//   street:"",
//   city:"",
//   state:"",
//   zipcode:"",
//   country:"",
//   phone:""
// })

// const onChangeHandler = (event) => {
//   const name = event.target.name;
//   const value = event.target.value;
//   setData(data=>({...data,[name]:value}))
// }

  // const placeOrder = async (event) => {
  //   event.preventDefault();
  //   let orderItems = [];
  //   food_list.map((item)=>{
  //     if (cartItems[item._id] > 0) {
  //       let itemInfo ={ ...item };
  //       itemInfo["quantity"] = cartItems[item._id];
  //       orderItems.push(itemInfo);
  //     }
  //   });

  //   let orderData = {
  //     address:data,
  //     items:orderItems,
  //     amount:getTotalCartAmount()+2,
  //   };

  //   let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
  //   if (response.data.success) {
  //     const {session_url} = response.data;
  //     window.location.replace(session_url);
  //   }
  //   else{
  //     alert("Error hmm");
  //   }
  // };

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='phone' />
      </div>

      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder;
