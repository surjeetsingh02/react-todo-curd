
import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App"

ReactDOM.render(
    <>
        <App />
    </>, document.getElementById("root")
);






// Table Component -------------

// function Table(props) {
//     console.log(props);
//     return (
//         <>
//             <div className="table-div">
//                 <h1>Hello</h1>

//                 <table >
//                     <tr>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Mobile</th>
//                     </tr>
//                     <tr>
//                         <td>{props.Fname}</td>
//                         <td>{props.Lname}</td>
//                         <td>{props.Mobile}</td>
//                     </tr>
//                 </table>
//             </div>
//         </>
//     );
// }

// function tableD(val) {
//     console.log(val);

// }

// ReactDOM.render(
//     <>
//         {Tdata.map(function tableD(val) {
//             return (
//                 <Table
//                     Fname={val.Fname}
//                     Lname={val.Lname}
//                     Mobile={val.Mobile}
//                 />
//             );
//         })}
//     </>,

//     document.getElementById("root")




