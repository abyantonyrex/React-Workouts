import React, { useEffect, useState } from 'react'
import './HomePage.css'
import { useLocation, useNavigate } from 'react-router-dom'

const database = [
    {Name: 'Television', Desc: 'All Brands of Televison are Available', img:'/img/acer-Tv.png', location:'television'},
    {Name: 'Mens Clothes', Desc: 'All Brands of Mens Clothes are Available', img:'/img/mens/mens-main.jpg', location:'mensclothes'},
    {Name: 'Womens Clothes', Desc: 'All Brands of Womens Clothes are Available', img:'/img/womens/w-main.png'},
    {Name: 'Mobiles', Desc: 'All Brands of Mobiles are Available', img:'/img/mob/mob-main.png'},
    {Name: 'Laptops', Desc: 'All Brands of Laptops are Available', img:'/img/Laptop/laptop-main.png'},
    {Name: 'Tools', Desc: 'All Types of Tools are Available', img:'/img/Tool/tools-main.png'},
    {Name: 'Mobile Accessories', Desc: 'All Types of Mobile Accessories are Available', img:'/img/Mob-accs/mob-accs-main.png'},
    {Name: 'Other Accessories', Desc: 'All Types of Other Accessories are Available', img:'/img/other-accs/other-accs-main.png'}
]
export const HomePage = () => {
    const location = useLocation()
    const param = new URLSearchParams(location.search)
    const searchName = param.get('userSearchName')
    const nav = useNavigate()

    const [filteredData, setfilteredData] = useState([])


    useEffect(() => {
        if (searchName && searchName.trim() !== "") {
            const result = database.filter(Product => 
                Product.Name.toLowerCase().includes(searchName.toLowerCase())
            )
            setfilteredData(result)
        } else {
            setfilteredData(database)
        }
    }, [searchName])

    const CardTemplate = (props) => {
        return (
            <div className='container-card'>
                <img className='card-img' src={props.img} alt="" />
                <h2>{props.Name}</h2>
                <p>{props.Desc}</p>
                <button className="btn btn-primary buynow-btn" onClick={() => nav(props.location)}>Buy Now</button>
            </div>
        )
    }

    return (
        <div className='Home-Page'>
            <div className='container'>
                {
                    filteredData.length > 0 ? (
                        filteredData.map((product, index) => (
                            <CardTemplate key={index} {...product} />
                        ))
                    ) : (
                        <h2 style={{ textAlign: 'center', color: 'gray' }}>No Data Found</h2>
                    )
                }
            </div>
        </div>
    )
}
