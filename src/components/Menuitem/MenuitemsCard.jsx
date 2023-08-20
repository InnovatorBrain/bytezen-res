import React from 'react'
import './Menuitem.css'

const MenuitemsCard = (props) => {
    return (
        <div className="Menuitem-card">
            <img className="Menuitem-img" src={props.image} alt="MenuCardVisiual"/>
            <div className="Menuitem-textBox">
                <div className=" Menuitem-textContent">
                    <h2 className="Menuitem-title">{props.title}</h2>
                    <span className="span">{props.price}</span>
                </div>
                <p className="Menuitem-p">{props.description}</p>
            </div>
        </div>
    )
}

export default MenuitemsCard