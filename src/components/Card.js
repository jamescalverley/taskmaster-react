import React from 'react';
import '../components-style.css';
import TextArea from './TextArea';

function Card(props){

  return (
    <div className="card">
      <div className="card-utility-header">
        <button type="button" className="btn-sm btn-outline-secondary"
          onClick={() => props.deleteCard(props.colIndex, props.index)}
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
      <div className="card-header">
      <TextArea
        id={'title' + props.cardid}
        value={props.title}
        placeholder="Title"
      />
      </div>
    </div>
  )
}

export default Card;