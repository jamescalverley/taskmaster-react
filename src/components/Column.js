import React from 'react';
import '../components-style.css';
import Card from './Card';


function Column(props){
  const columnData = props.columnData;
  console.log("columnData", columnData)

  return(
    
    <div className="project-column">
      <h5>{columnData[0].title}</h5>
      {/* <h5>{column.title}</h5> */}
        
    </div>  
    
  )
}

export default Column;