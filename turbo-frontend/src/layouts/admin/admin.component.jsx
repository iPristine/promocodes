import React from "react";
import { Link, Redirect } from "react-router-dom";

import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";

import "./admin.style.sass";

export function Admin(props) {
    const {setUser, user} = props;
    const [offer, setOffer] = React.useState({name:'', title:'', description:'', image_link:'', promocode:''})
    const handleOffer=(newOffer)=>{
    setOffer({...offer, ...newOffer});
  } 
    const addOffer = ()=>{
        fetch('http://localhost/api/offers',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(offer)
        }).then(res => console.log('Addition offer status:', res.status))
    } 

  return (
    <div className="admin">
        {!user.isAdmin && <Redirect to='/' />}
      <Header />
      <div className="admin__content">
        <div className={'admin__create-offer'}>
            <p>Create offer</p>
            <input placeholder={"name"} value={offer.name} onChange={(e)=>handleOffer({name:e.target.value})} />
            <input placeholder={"title"} value={offer.title} onChange={(e)=>handleOffer({title:e.target.value})} />
            <input placeholder={"description"} value={offer.description} onChange={(e)=>handleOffer({description:e.target.value})} />
            <input placeholder={"image_link"} value={offer.image_link} onChange={(e)=>handleOffer({image_link:e.target.value})} />
            <input placeholder={"promocode"} value={offer.promocode} onChange={(e)=>handleOffer({promocode:e.target.value})} />
            <button onClick={addOffer} >Add</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
