import React from 'react';

import { Header } from '../../components/header/header.component';
import { Footer } from '../../components/footer/footer.component';
import { New } from '../../components/new/new.component';

import { MainRepository } from './main.repository';
import './main.style.sass';

const mainRepository = new MainRepository();

export function Main(props) {
  const [offers, setOffers] = React.useState([]);
  React.useEffect(() => {
    mainRepository.getOffers().then(setOffers);
  }, []);
  console.log(offers)
  return (
    <div className="main">
      <Header user={props.user}/>
      <div className="main__content">
        <div className="main__title">
        {!offers.length ? <div className="main__title_top">К сожалению промокодов нет в наличии</div>:<div className="main__title_top">Лучшие промокоды </div>}
        </div>
        {offers.map((offer, index) => (
          <New
            key={index}
            name={offer.name}
            title={offer.title}
            image_link={offer.image_link}
            description={offer.description}
            promocode={props.user.isAutorized && `${offer.promocode}${props.user.id}`}
  
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
