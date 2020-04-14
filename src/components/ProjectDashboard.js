import React, {useState} from 'react';
import '../components-style.css';
import Column from './Column';
import ColumnTitle from './ColumnTitle';

function ProjectDashboard(props){
  const [ user, setUser ] = useState({
    // "_id" : ObjectId("5e9228b0f38fc24318e8f2c2"),
    "id": "1234",
    "email" : "user@user.com",
    "name" : "",
    "password" : "password_hash",
    "user_settings" : {
            "theme" : "light",
            "profilePicUrl" : "url"
    },
    "dashboards" : [
            {
                    "name" : "Dashboard 1",
                    "columns" : [
                            {
                                    "name" : "TO-DO",
                                    "columnid" : 1,
                                    "cards" : [
                                            {
                                                    "title" : "this is my task title",
                                                    "cardid" : 0.4786195689500974,
                                                    "duedate" : "2020-04-15",
                                                    "lables" : [
                                                            "Important",
                                                            "Medium",
                                                            "Low"
                                                    ],
                                                    "description" : "this is my task description",
                                                    "asignee" : [
                                                            ""
                                                    ]
                                            },
                                            {
                                                    "title" : "task 2",
                                                    "cardid" : 0.20808197223570835,
                                                    "duedate" : "2020-04-24",
                                                    "lables" : [
                                                            "Important",
                                                            "Medium",
                                                            "Low"
                                                    ],
                                                    "description" : "task 2",
                                                    "asignee" : [
                                                            ""
                                                    ]
                                            },
                                            {
                                                    "title" : "task",
                                                    "cardid" : 0.44847083838515456,
                                                    "duedate" : "",
                                                    "lables" : [
                                                            "Important",
                                                            "Medium",
                                                            "Low"
                                                    ],
                                                    "description" : "",
                                                    "asignee" : [
                                                            ""
                                                    ]
                                            }
                                    ]
                            },
                            {
                                    "name" : "",
                                    "columnid" : 2,
                                    "cards" : [
                                            {
                                                    "title" : "something here",
                                                    "cardid" : 0.6507429514812203,
                                                    "duedate" : "2020-04-15",
                                                    "lables" : [
                                                            "Important",
                                                            "Medium",
                                                            "Low"
                                                    ],
                                                    "description" : "someting there",
                                                    "asignee" : [
                                                            ""
                                                    ]
                                            }
                                    ]
                            },
                            {
                                    "name" : "",
                                    "columnid" : 3,
                                    "cards" : [
                                            {
                                                    "title" : "my new task",
                                                    "cardid" : 0.7468101560284077,
                                                    "duedate" : "2020-04-12",
                                                    "lables" : [
                                                            "Important",
                                                            "Medium",
                                                            "Low"
                                                    ],
                                                    "description" : "to do my homework",
                                                    "asignee" : [
                                                            ""
                                                    ]
                                            }
                                    ]
                            }
                    ]
            }
    ],
    "__v" : 0
})

console.log('[USER]', user)
const columnStyle = {
  backgroundColor: '#555',
  width: '250px',
  // height: '400px',
  margin: '32px',
};


  function addColumn() {
    const newColumn = {
        name: '',
        columnid: user.dashboards[0].columns.length + 1,
        cards: [], 
    };
    // columns.push(newColumn);
    user.dashboards[0].columns.push(newColumn);
    setUser({ ...user });
    //updateUserProfile(user);
}

function deleteColumn(colIndex) {
  console.log('function deleteColumn called', colIndex);
  user.dashboards[0].columns.splice(colIndex, 1);
  setUser({ ...user });
  //updateUserProfile(user);
}
function addCard(columnIndex) {
  const newCard = {
      title: '',
      cardid: Math.random(),
      duedate: '',
      lables: ['Important', 'Medium', 'Low'],
      description: '',
      asignee: [''],
  };
  user.dashboards[0].columns[columnIndex].cards.push(newCard);
  setUser({ ...user });
  //updateUserProfile(user);
}

function saveCard(cardid, colIndex, cardIndex) {
  console.log('function saveCard called', cardid, colIndex, cardIndex);
  let title = document.getElementById('title' + cardid);
  console.log('logging card title', title.value);
  let description = document.getElementById('desc' + cardid);
  console.log('logging card description', description.value);
  let date = document.getElementById('date' + cardid);
  console.log('logging card date', date.value);
  console.log(title.value, description.value, date.value);
  const updatedCard = {
      title: title.value,
      cardid: cardid,
      duedate: date.value,
      lables: ['Important', 'Medium', 'Low'],
      description: description.value,
      asignee: [''],
  };
  user.dashboards[0].columns[colIndex].cards[cardIndex] = updatedCard;
  setUser({ ...user });
  //updateUserProfile(user);
}

function deleteCard(columnIndex, cardIndex) {
  console.log('function deleteCard called!', columnIndex, cardIndex);
  user.dashboards[0].columns[columnIndex].cards.splice(cardIndex, 1);
  setUser({ ...user });
  //updateUserProfile(user);
}
function updateColumnTitle(index, title) {
  console.log('function updateColumnTitle called', index, title);
  user.dashboards[0].columns[index].name = title;
  setUser({ ...user });
  //updateUserProfile(user);
}

 

  return(
    <>
    {/* <div id={props.id}> */}
    {/* <h1>TEST: {user.dashboards[0].name}</h1> */}
    <div className="project-column-wrapper">
    {user.dashboards[0].columns.map((element, index) => {
      return (
        <Column
                id={Math.random().toString()}
                style={columnStyle}
                cards={element.cards}
                colName={element.name}
                colid={element.columnid}
                addCard={addCard}
                deleteCard={deleteCard}
                colIndex={index}
                deleteColumn={deleteColumn}
                saveCard={saveCard}
                colTitle={
                    <ColumnTitle
                        title={element.name}
                        index={index}
                        updateColumnTitle={updateColumnTitle}
                    />
                }
            />
      )
    })}
    <div style={{ margin: '32px' }}>
    <button type="button" className="btn-lg btn-outline-secondary"onClick={addColumn}>Add column</button>
  </div>
  </div>
  
    {/* <div>
    {user.dashboards[0].columns.map((element, index) => {
        return (
            <Column
                // id={Math.random().toString()}
                // style={columnStyle}
                // cards={element.cards}
                // colName={element.name}
                // colid={element.columnid}
                // addCard={addCard}
                // deleteCard={deleteCard}
                // colIndex={index}
                // deleteColumn={deleteColumn}
                // saveCard={saveCard}
                // colTitle={
                //     <ColumnTitle
                //         title={element.name}
                //         index={index}
                //         updateColumnTitle={updateColumnTitle}
                //     />
                // }
            />
        );
    })}

    <div style={{ margin: '32px' }}>
        <button onClick={addColumn}>Add column</button>
    </div>
    </div>     */}



    {/* <div className="dashboard-main">
      <h1>Project Dashboard</h1>
      <div className="project-column-wrapper">
        {columns.map( column => 
          <Column columnData={columns}/>
        )}

        <button onClick={addColumn} className="btn btn-primary">Add Column</button>
      </div>
     
      
    </div> */}
    </>
  );
};

export default ProjectDashboard;