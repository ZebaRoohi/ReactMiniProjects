import React, { useEffect, useState } from 'react'
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import axios from 'axios';

/*manual adding of data */
// const data = [
//     { id: 1, name: 'John Doe', age: 30, profession: 'Developer' },
//     { id: 2, name: 'Jane Smith', age: 25, profession: 'Designer' }
//   ];
const Excel = () => {
    const fileName = "employee";
    const[data,setData]=useState([])

    //with json place holder
   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{setData(res.data)})
    .catch((err)=>console.log('Err',err))
   })
        
  
    const exportToExcel = () => {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(blob, `${fileName}.xlsx`);
    };
  return (
    <div>
      <button onClick={exportToExcel}>Export to excel</button>
      <ul>
        {data?.map(user=>(
            <li key={user.id}>{user.name}-{user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default Excel
