
import CardWrapper from '../cardWrapper/CardWrapper';

import './app.scss';

const App = () => {
  return (
    <div className='app__wrapper'>
      <h1 className='app__title'>Ты сегодня покормил кота?</h1>
      <CardWrapper/>
    </div>
  )
};

export default App;