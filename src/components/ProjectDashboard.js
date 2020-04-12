import React, {useState} from 'react';
import '../components-style.css';

import Column from './Column';

function ProjectDashboard(){

  const [ columns, setColumns ] = useState([
    { 
      title: "Marketing", 
      cards: [{ title: "card 1" },{ title:"card 2" }, { title: "card3" }]
    }, 
    { 
      title: "Development", 
      cards: [{ title: "card 1" },{ title:"card 2" }, { title: "card3" }]
    }
  ]);

  function addColumn(e){
    e.preventDefault();
    console.log("[add column] CLICKED")
    let newColumn = { title: "Add title", cards: [] };
    columns.push(newColumn);
    setColumns( [...columns] );
  };

  return(
    <div className="dashboard-main">
      <h1>Project Dashboard</h1>
      <div className="project-column-wrapper">
        {columns.map( column => 
          <Column columnData={columns}/>
          // <div className="project-column">
          //   <h5>{column.title}</h5>
        
          // </div>
        )}

        <button onClick={addColumn} className="btn btn-primary">Add Column</button>
      </div>
     
      
    </div>
  );
};

export default ProjectDashboard;