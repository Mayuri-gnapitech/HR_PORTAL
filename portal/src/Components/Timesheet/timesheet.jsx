import { FaRegCommentDots } from "react-icons/fa6";
import react, {useState} from 'react';
import './time.css'; 
import TimesheetApp from './time_calendar.js'
import CommentDialog from './comment_dialog.jsx'

const TimesheetComponent = () => {
    const [selectedProject, setSelectedProject] = useState(''); // State for selected project
    const [selectedActivity, setSelectedActivity] = useState(''); // State for selected activity
    const [rows, setRows] = useState([]);


    const [commentDialogOpen, setCommentDialogOpen] = useState(false);
    const [selectedCommentRowIndex, setSelectedCommentRowIndex] = useState(null);
    const [selectedCommentDayIndex, setSelectedCommentDayIndex] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const handleCommentIconClick = (rowIndex, dayIndex) => {
      setCommentDialogOpen(true);
      setSelectedCommentRowIndex(rowIndex);
      setSelectedCommentDayIndex(dayIndex);
    };


    // const comment=[
    //   {
    //       path:"/",
    //       name:" ",
    //       icon: <FaUserAlt />,
    //   },
    // ]
   
    const handleProjectChange = (event, rowIndex) => {
    const newRows = [...rows];
    newRows[rowIndex].projecth = event.target.value;
    setRows(newRows);
    };
  
    const handleActivityChange = (event, rowIndex) => {
      const newRows = [...rows];
      newRows[rowIndex].activity = event.target.value;
      setRows(newRows);
    };

    const handleDayTextChange = (event , rowIndex, dayIndex) => {
      const newRows = [...rows];
      newRows[rowIndex].days[dayIndex] = event.target.value;
      setRows(newRows);
    };
  
    const handleAddRow = () => {
      setRows((prevRows) => [
        ...prevRows,
        {
          project: '',
          activity: '',
          days: ['', '', '', '', '', '', ''],
          commentIcon: <FaRegCommentDots />,

        },
      ]);
      // console.log(rows);
    };

    //To remove most recently added row
    const handleRemoveLastRow = () => {
      if (rows.length > 0) {
        setRows((prevRows) => prevRows.slice(0, -1));
      }
    };
  
    // const handleDayTextChange = (day, event) => {
    //   setDaySelections({
    //     ...daySelections,
    //     [day]: event.target.value,
    //   });
    // };
  
  return (
    <>
      <header>
        <h1>Timesheet</h1>
      </header>

      <div className="menu-container">

        <div className="menu-item1">
          <h3>Timesheet for week <TimesheetApp /></h3>
        </div>

        <div className="menu-item-second">
          
           <div id="project-name" className="menu">
            <label htmlFor='ProjectDropdown'>Project Name:</label>
            <select id='ProjectDropdown' value={selectedProject} onChange={handleProjectChange}>
              <option value="">select Project</option>
              <option value="project1">Project1</option>
              <option value="project2">Project2</option>
              <option value="project3">Project3</option>
              <option value="project4">Project4</option>
            </select>
            </div>

          <div id="activity-name" className="menu">
          <label htmlFor='activityDropdown'>Activity Name:</label>
            <select id='activityDropdown' value={selectedActivity} onChange={handleActivityChange}>
              <option value="">select Activity</option>
              <option value="activity1">Activity1</option>
              <option value="activity2">Activity2</option>
              <option value="activity3">Activity3</option>
              <option value="activity4">Activity4</option>
            </select>
          </div>

          <div id="day-sat" className="menu">Sat <br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
          <div id="day-sun" className="menu">Sun <br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
          <div id="day-mon" className="menu">Mon <br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
          <div id="day-tues" className="menu">Tue <br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
          <div id="day-wed" className="menu">Wed <br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
          <div id="day-thus" className="menu">Thus<br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
          <div id="day-fri" className="menu">Fri <br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
          {/* {
                    comment.map((item) => (
                        <NavLink to={item.path} activeclassName="active">
                            <div> {item.icon}</div>
                            <div >{item.name}</div>
                        </NavLink>
 
                    ))
          } */}
          {/* <div id="day-fri" className="menu">Total <br /> <input className='inputfield' type="text"/></div> */}
        </div>

        {/* <div id="project-name" className="menu-add"></div> 11:12 cooment line */}
            {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              <div className="menu-add">
                <label htmlFor={`projectDropdown-${rowIndex}`}>Project Name:</label>
                <select
                  id={`projectDropdown-${rowIndex}`}
                  value={row.project}
                  onChange={(event) => handleProjectChange(event, rowIndex)}
                >
                  {/* Options for projects */}
                  <option value="">Select Project</option>
                  <option value="project1">Project 1</option>
                  <option value="project2">Project 2</option>
                  <option value="project3">Project 3</option>
                  <option value="project4">Project 4</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              
              
              <div className="menu-add">
                <label htmlFor={`activityDropdown-${rowIndex}`}>Activity Name:</label>
                <select
                  id={`activityDropdown-${rowIndex}`}
                  value={row.activity}
                  onChange={(event) => handleActivityChange(event, rowIndex)}
                >                                                                           
                  {/* Options for activities */}
                  <option value="">Select Activity</option>
                  <option value="activity1">Activity 1</option>
                  <option value="activity2">Activity 2</option>
                  <option value="activity2">Activity 3</option>
                  <option value="activity2">Activity 4</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              {row.days.map((day, dayIndex) => (
                <div key={dayIndex} className="menu-add">
                  {/* <label htmlFor={`dayText-${rowIndex}-${dayIndex}`}>{dayIndex + 1}:</label> */}
                  <input className={`added-rows ${editMode ? 'editable' : ''}`}
                    type="text"
                    id={`dayText-${rowIndex}-${dayIndex}`}
                    value={day}
                    onChange={(event) => handleDayTextChange(event, rowIndex, dayIndex)}
                  />
                 {dayIndex === 0 || dayIndex === 1 || dayIndex === 2 || dayIndex === 3 || dayIndex === 4 || dayIndex === 5 || dayIndex === 6 ? (
                  <FaRegCommentDots onClick={() => handleCommentIconClick(rowIndex, dayIndex)} />) : null}
                </div>
              ))}
              {/* <div className="menu">
                <label>Total:</label>
                <input type="text" value={row.total} readOnly />
              </div> */}
            </div>
          ))}

        <CommentDialog
          open={commentDialogOpen}
          handleClose={() => setCommentDialogOpen(false)}
          commentContent={rows[selectedCommentRowIndex]?.days[selectedCommentDayIndex]}
        />





        <div className="menu-item-third">
          <h5>Status: Not Found</h5>
          <div className='button-container'> 
            <button className='action-button'>EDIT</button>
            <button className='action-button' onClick={handleAddRow}>ADD ROW</button>
            <button className='action-button' onClick={handleRemoveLastRow}>REMOVE ROW</button>
            <button className='action-button'>SUBMIT</button>
          </div>
        </div>
      </div>
  
    </>
  );
};
export default TimesheetComponent;




// import { FaRegCommentDots } from "react-icons/fa6";
// import react, {useState} from 'react';
// import './time.css'; 
// import TimesheetApp from './time_calendar.js'

// const TimesheetComponent = () => {

//     const [selectedProject, setSelectedProject] = useState(''); // State for selected project
//     const [selectedActivity, setSelectedActivity] = useState(''); // State for selected activity
//     const [rows, setRows] = useState([]);
    
//     //for making edit button editable(Dialog box)
//     const [editMode, setEditMode] = useState(false);
//     const [commentDialogOpen, setCommentDialogOpen] = useState(false);
//     const [selectedCommentRowIndex, setSelectedCommentRowIndex] = useState(null);
//     const [selectedCommentDayIndex, setSelectedCommentDayIndex] = useState(null);


//     //Handlicing edit button for activating icon for dialog
//     const handleEditButtonClick = () => {
//       setEditMode(!editMode);
//     };

//     const handleCommentIconClick = (rowIndex, dayIndex) => {
//       setCommentDialogOpen(true);
//       setSelectedCommentRowIndex(rowIndex);
//       setSelectedCommentDayIndex(dayIndex);
//     };

    
//     // const comment=[
//     //   {
//     //       path:"/",
//     //       name:" ",
//     //       icon: <FaUserAlt />,
//     //   },
//     // ]
   
//     const handleProjectChange = (event, rowIndex) => {
//     const newRows = [...rows];
//     newRows[rowIndex].projecth = event.target.value;
//     setRows(newRows);
//     };
  
//     const handleActivityChange = (event, rowIndex) => {
//       const newRows = [...rows];
//       newRows[rowIndex].activity = event.target.value;
//       setRows(newRows);
//     };

//     const handleDayTextChange = (event , rowIndex, dayIndex) => {
//       const newRows = [...rows];
//       newRows[rowIndex].days[dayIndex] = event.target.value;
//       setRows(newRows);
//     };
  
//     const handleAddRow = () => {
//       setRows((prevRows) => [
//         ...prevRows,
//         {
//           project: '',
//           activity: '',
//           days: ['', '', '', '', '', '', ''],
//           commentIcon: <FaRegCommentDots />,

//         },
//       ]);
//       // console.log(rows);
//     };

//     //To remove most recently added row
//     const handleRemoveLastRow = () => {
//       if (rows.length > 0) {
//         setRows((prevRows) => prevRows.slice(0, -1));
//       }
//     };
  
//     // const handleDayTextChange = (day, event) => {
//     //   setDaySelections({
//     //     ...daySelections,
//     //     [day]: event.target.value,
//     //   });
//     // };
  
//   return (
//     <>
//       <header>
//         <h1>Timesheet</h1>
//       </header>

//       <div className="menu-container">

//         <div className="menu-item1">
//           <h3>Timesheet for week <TimesheetApp /></h3>
//         </div>

//         <div className="menu-item-second">
          
//            <div id="project-name" className="menu">
//             <label htmlFor='ProjectDropdown'>Project Name:</label>
//             <select id='ProjectDropdown' value={selectedProject} onChange={handleProjectChange}>
//               <option value="">select Project</option>
//               <option value="project1">Project1</option>
//               <option value="project2">Project2</option>
//               <option value="project3">Project3</option>
//               <option value="project4">Project4</option>
//             </select>
//             </div>

//           <div id="activity-name" className="menu">
//           <label htmlFor='activityDropdown'>Activity Name:</label>
//             <select id='activityDropdown' value={selectedActivity} onChange={handleActivityChange}>
//               <option value="">select Activity</option>
//               <option value="activity1">Activity1</option>
//               <option value="activity2">Activity2</option>
//               <option value="activity3">Activity3</option>
//               <option value="activity4">Activity4</option>
//             </select>
//           </div>

//           <div id="day-sat" className="menu">Sat <br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
//           <div id="day-sun" className="menu">Sun <br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
//           <div id="day-mon" className="menu">Mon <br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
//           <div id="day-tues" className="menu">Tue <br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
//           <div id="day-wed" className="menu">Wed <br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
//           <div id="day-thus" className="menu">Thus<br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>
//           <div id="day-fri" className="menu">Fri <br /> <input className='inputfield' type="text"/>< FaRegCommentDots /></div>

          
//           {/* {
//                     comment.map((item) => (
//                         <NavLink to={item.path} activeclassName="active">
//                             <div> {item.icon}</div>
//                             <div >{item.name}</div>
//                         </NavLink>
 
//                     ))
//           } */}
//           {/* <div id="day-fri" className="menu">Total <br /> <input className='inputfield' type="text"/></div> */}
//         </div>

//         {/* <div id="project-name" className="menu-add"></div> 11:12 cooment line */}
//             {rows.map((row, rowIndex) => (
//             <div key={rowIndex} className="row">
//               <div className="menu-add">
//                 <label htmlFor={`projectDropdown-${rowIndex}`}>Project Name:</label>
//                 <select
//                   id={`projectDropdown-${rowIndex}`}
//                   value={row.project}
//                   onChange={(event) => handleProjectChange(event, rowIndex)}
//                 >
//                   {/* Options for projects */}
//                   <option value="">Select Project</option>
//                   <option value="project1">Project 1</option>
//                   <option value="project2">Project 2</option>
//                   <option value="project3">Project 3</option>
//                   <option value="project4">Project 4</option>
//                   {/* Add more options as needed */}
//                 </select>
//               </div>
              
              
//               <div className="menu-add">
//                 <label htmlFor={`activityDropdown-${rowIndex}`}>Activity Name:</label>
//                 <select
//                   id={`activityDropdown-${rowIndex}`}
//                   value={row.activity}
//                   onChange={(event) => handleActivityChange(event, rowIndex)}
//                 >                                                                           
//                   {/* Options for activities */}
//                   <option value="">Select Activity</option>
//                   <option value="activity1">Activity 1</option>
//                   <option value="activity2">Activity 2</option>
//                   <option value="activity2">Activity 3</option>
//                   <option value="activity2">Activity 4</option>
//                   {/* Add more options as needed */}
//                 </select>
//               </div>
//               {row.days.map((day, dayIndex) => (
//                 <div key={dayIndex} className="menu-add">
//                   {/* <label htmlFor={`dayText-${rowIndex}-${dayIndex}`}>{dayIndex + 1}:</label> */}
//                   <input  className={`added-rows ${editMode ? 'editable' : ''}`}
//                     type="text"
//                     id={`dayText-${rowIndex}-${dayIndex}`}
//                     value={day}
//                     onChange={(event) => handleDayTextChange(event, rowIndex, dayIndex)}
//                   />
//                   { dayIndex === 0 || dayIndex === 1 || dayIndex === 2 || dayIndex === 3 || dayIndex === 4 || dayIndex === 5 || dayIndex === 6  ?  <FaRegCommentDots onClick={() => handleCommentIconClick(rowIndex, dayIndex)} />: null}
//                 </div>
//               ))}
//               {/* <div className="menu">
//                 <label>Total:</label>
//                 <input type="text" value={row.total} readOnly />
//               </div> */}
//             </div>
//           ))}

//           {/* Render Comment Dialog */}
//         {commentDialogOpen && (
//           <div className="comment-dialog">
//             <textarea
//               value={rows[selectedCommentRowIndex].days[selectedCommentDayIndex]}
//              onChange={(event) => handleDayTextChange(event, selectedCommentRowIndex, selectedCommentDayIndex)}
//           />
//         < button onClick={() => setCommentDialogOpen(false)}>Close</button>
//        </div>
//       )}    


//         <div className="menu-item-third">
//           <h5>Status: Not Found</h5>
//           <div className='button-container'> 
//             <button className='action-button'>EDIT</button>

//             {/* Button for editing dialog */}
//           <button className='action-button' onClick={handleEditButtonClick}>
//             {editMode ? "SAVE" : "EDIT"}
//           </button>

//             <button className='action-button' onClick={handleAddRow}>ADD ROW</button>
//             <button className='action-button' onClick={handleRemoveLastRow}>REMOVE ROW</button>
//             <button className='action-button'>SUBMIT</button>
//           </div>
//         </div>
//       </div>
  
//     </>
//   );
// };
// export default TimesheetComponent;

