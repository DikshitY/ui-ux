import "./Body.css";
import Card from './Card'
import One from '../images/one.png'
import Two from '../images/two.png'
import Three from '../images/three.png'

function Body() {
  return (
    <div className="body-main">
      <div className="rectangle">
        <div className="rectangle-content">
          <h1>Lorem</h1>
          <h3>subtitle</h3>
        </div>
      </div>
      <div className="card-container">
        <Card number = '01' title = 'Lorem ipsum dolor sit' desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' src = {One}/>
        <Card number = '02' title = 'Lorem ipsum dolor sit' desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' src = {Two}/>
        <Card number = '03' title = 'Lorem ipsum dolor sit' desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' src = {Three}/>
      </div>
    </div>
  );
}

export default Body;
