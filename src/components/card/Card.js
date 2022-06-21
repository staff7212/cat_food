
import {useState} from 'react';

import "./card.scss";
import cat from "../../resources/cat.png"

const Card = ({data}) => {

  const [selected, setSelected] = useState(false);
  const [hoverCard, setHoverCard] = useState(false);

  const toggleSelected = () => {
    setSelected(selected => !selected);
    setHoverCard(false)
  };

  const onShowTittle = () => {
    if (!selected) return;
    setHoverCard(true)
  };

  const onHideTittle = () => {
    if (!selected) return;
    setHoverCard(false)
  };

  const clazz = data.disabled ? 'disabled' : '';
  return (
    <div>
      <div className={`card ${selected ? 'selected' : ''} ${clazz}`}>
        <div className='card__field' onClick={toggleSelected} onMouseEnter={onShowTittle} onMouseLeave={onHideTittle}>

          <div className='card__text'>
            <div className={`card__title ${selected && hoverCard ? 'decor' : ''}`}>{selected && hoverCard ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}</div>
            <div className='card__name'><span>Нямушка</span> с {data.eat}</div>
            <div className='card__descr'>
              <span>{data.portions}</span> порций<br/>
              <span>{data.gift}</span> {data.giftText}<br/>
              {data.like}
            </div>
          </div>

          <div className='card__info-weight'>
            <p>{data.weight}</p>
            <p>кг</p>
          </div>

          <div className='card__img'>
            <img src={cat} alt='cat' />
          </div>

        </div>
      </div>

      {data.disabled ? 
        <div className='decription disable'>
          Печалька, с {data.eat} закончился.
        </div>
        : null
      }

      {selected ? 
        <div className='decription'>
          {data.composition}
        </div>
        : null
      }

      {!selected && !data.disabled ? 
         <div className='decription'>
        Чего сидишь? Порадуй котэ,&nbsp;
          <div className='decription_decor'><span onClick={toggleSelected}>купи</span>.</div>
        </div> : null
      }
    </div>
  );
};

export default Card;