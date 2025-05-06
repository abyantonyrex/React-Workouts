import React, { useEffect, useState } from 'react'
import './Television.css'
import { useLocation, useNavigate} from 'react-router-dom'
export const Product = () => {
  let location = useLocation()
  let param = new URLSearchParams(location.search)
  let searchName = param.get('userSearchName')
  let nav = useNavigate()

  useEffect(()=>{
    if(searchName && searchName.trim()!==""){
      const result = database.filter(Product => 
        Product.Name.toLowerCase().includes(searchName.toLowerCase())
      );
      setfilteredData(result)
    }else{
      setfilteredData(database)
    }
  },[searchName]);
     
   let [filteredData,setfilteredData] = useState([])

    let database = [
        {Name: 'Acer TV' , Desc: 'acer 139 cm (55 inches) I Pro Series 4K Ultra HD LED Smart Google TV AR55UDIGU2875AT (Black)', Price: '30,000', ShippingCost: 'free delivery', img:'/img/acer-Tv.png'},
        {Name: 'Hisense TV' , Desc: 'Hisense 139 cm (55 inches) E6N Series 4K Ultra HD Smart LED Google TV 55E6N (Black)', Price: '35,000', ShippingCost: '+$5 shipping', img:'/img/Hisense-Tv.png'},
        {Name: 'Lg TV' , Desc: 'LG 139 cm (55 inches) 4K Ultra HD Smart LED TV 55UR7500PSC (Dark Iron Gray)', Price: '40,000', ShippingCost: 'free delivery', img:'/img/Lg-Tv.png'},
        {Name: 'Samsung TV' , Desc: 'Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV UA55DUE70BKLXL (Black)', Price: '50,000', ShippingCost: '+$7 shipping', img:'/img/Samsung-Tv.png'},
        {Name: 'Tcl TV' , Desc: 'TCL 139 cm (55 inches) 4K Ultra HD Smart QLED Google TV 55P71B Pro (Black)', Price: '45,000', ShippingCost: 'free delivery', img:'/img/Tcl-Tv.png'},
        {Name: 'Vu TV' , Desc: 'Vu 139cm (55 inches) Vibe Series QLED 4K Google TV 55VIBE24 (Black)', Price: '32,000', ShippingCost: '+$8 shipping', img:'/img/Vw-Tv.png'}
    ]

    const CardTemplate = (props) => {
        return (
            <div className='container-card'>
                <img className='card-img' src={props.img} alt="" />
                <h2>{props.Name}</h2>
                <p>{props.Desc}</p>
                <p>Price Rs:    {props.Price}</p>
                <p>{props.ShippingCost}</p>
                <button class="btn btn-primary buynow-btn">Buy Now</button>
            </div>
        );
    }

  return (
    <div className='product-tv'>
      <div className='container'>

            {
            filteredData.length > 0 ? (
              filteredData.map((product, index) => (
                <CardTemplate key={index} {...product} />
              ))
            ) : (
              <h2 style={{ textAlign: 'center', color: 'gray' }}>No Data Found</h2>
            )}
            <button className=" back-btn" onClick={()=> nav('/')}>Back To Home</button>
      </div> 
    </div>
  )
}
