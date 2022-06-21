import Card from "../card/Card";

import './cardWrapper.scss';

const data = [
  {
    id: 1,
    disabled: false,
    eat: 'фуа-гра',
    weight: '0,5',
    composition: 'Печень утки разварная с артишоками.',
    portions: '10',
    gift: '',
    giftText: 'мышь в подарок',
    like: '',
  },
  {
    id: 2,
    disabled: false,
    eat: 'рыбой',
    weight: '2',
    composition: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    portions: '40',
    gift: '2',
    giftText: 'мыши в подарок',
    like: '',
  },
  {
    id: 3,
    disabled: true,
    eat: 'курой',
    weight: '5',
    composition: 'Филе из цыплят с трюфелями в бульоне.',
    portions: '100',
    gift: '5',
    giftText: 'мышей в подарок',
    like: 'заказчик доволен'
  }
];

const CardWrapper = () => {

  const elements = data.map(item => {
    return <Card key={item.id} data={item}/>
  })

  return (
    <div className="card-wrapper">
      {elements}
    </div>
  )
};

export default CardWrapper;