import React, {useState} from 'react';
import '../components-style.css';
import PropTypes from 'prop-types';
import Draggable from './Draggable';
import Card from './Card';


function Column(props){
  const [cards, setCard] = useState(props.cards ? props.cards : []);
  
  function drop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    console.log(data);
    // console.log(document.getElementById('abc'));
    let toDrop = document.getElementById(data);
    e.target.appendChild(toDrop);
    console.log('dropped element', document.getElementById(data));
    // document.removeChild(document.getElementById(data));
    let element = document.getElementById(data);
    element.parentNode.removeChild(element);
    console.log('something dropped on me!');
    addCard();
    let col = document.getElementById('qaz');
    console.log(col.childNodes);
    console.log(col.childNodes[2].childNodes.length);
    // addCard();
}

function allowDrop(e) {
    e.preventDefault();
}

function addCard() {
    cards.push({ title: 'new card', duedate: Date.now() });
    setCard([...cards]);
}

// function deleteCard(e) {
//     console.log('delete card clicked', e.target);
// }
function dragEnd() {
    console.log('drag ended');
}

  return(
    <div className="project-column" id={props.id}>
      <div className="column-header">
      <button
        type="button"
        className="btn-sm btn-dark"
        onClick={() => props.deleteColumn(props.colIndex)}
      >
        <i class="far fa-trash-alt"></i>
      </button>
      </div>   
      {props.colTitle}
      <button
        type="button" 
        className="btn-sm btn-dark"
        onClick={() => props.addCard(props.colIndex)}>
        Add Card +
      </button>

      {cards.map((element, index) => {
        let value = Math.random().toString();
        return (
          <Draggable
            id={value}
            style={{ margin: '8px' }}
            index={index}
            colIndex={props.colIndex}
            deleteCard={props.deleteCard}
            cardid={element.cardid}
            saveCard={props.saveCard}
          >
              <Card
                text={value}
                title={element.title}
                dueDate={element.duedate}
                description={element.description}
                cardid={element.cardid}
                columnid={props.colid}
                deleteCard={props.deleteCard}
              />
          </Draggable>
           
        );
      })}
      
      {props.children} 
    </div>  
    
  )
}

Column.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Column;