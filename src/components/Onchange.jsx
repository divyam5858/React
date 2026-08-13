import React, { useState } from 'react'

const Onchange = () => {
    const [name,setName]=useState('')
    const [quantity, setQuantity]=useState()
    const [comment,setComment] = useState('')
    const [payment, setPayment]=useState('')
    const [shipping,setShipping]=useState('')

    const handlenamechange =(e)=>{
        setName(e.target.value)
    }

    const handlequantity=(e)=>{
        setQuantity(e.target.value)
    }
    const handlecomment=(e)=>{
        setComment(e.target.value)
    }

    const handlepayment =(e)=>{
        setPayment(e.target.value)
    }

    const handleshipping=(e)=>{
        setShipping(e.target.value)
    }

  return (
    <div>
      <input value={name} placeholder='Fullname' onChange={handlenamechange}/>
      <p>{name}</p>

      <input type="number" value={quantity} onChange={handlequantity}/>
      <p>{quantity}</p>

      <textarea value={comment} placeholder='enter delivery instructions' onChange={handlecomment}></textarea>
      <p>{comment}</p>

      <select value={payment} onChange={handlepayment}>
        <option value="">select an option</option>
        <option value="Visa">Visa</option>
        <option value="Matercard">Matercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>{payment}</p>

      <label><input type="radio" value="pickup" 
      checked={shipping==="pickup"} onChange={handleshipping}/>pickup</label> <br />

      <label><input type="radio" value="delivery"
      checked={shipping==="delivery"} onChange={handleshipping}/>delivery</label>
      
      <p>{shipping}</p>
    </div>
  )
}

export default Onchange
