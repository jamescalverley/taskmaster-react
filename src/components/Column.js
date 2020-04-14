import React, {useState} from 'react';
import '../components-style.css';
import Card from './Card';


function Column(props){
  const [cards, setCard] = useState(props.cards ? props.cards : []);
  

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
          <Card
            text={value}
            title={element.title}
            dueDate={element.duedate}
            description={element.description}
            cardid={element.cardid}
            columnid={props.colid}
            deleteCard={props.deleteCard}
          />
            // <Draggable
            //     id={value}
            //     style={{ margin: '8px' }}
            //     index={index}
            //     colIndex={props.colIndex}
            //     deleteCard={props.deleteCard}
            //     cardid={element.cardid}
            //     saveCard={props.saveCard}
            // >  
            // </Draggable>
        );
      })}
      
        
    </div>  
    
  )
}

export default Column;