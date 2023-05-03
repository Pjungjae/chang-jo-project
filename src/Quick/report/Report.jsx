import React from 'react'
import './report.css'
import { reportRows } from '../../dummyData'
import { DataGrid } from '@mui/x-data-grid'
import { Link} from 'react-router-dom'

const columns = [
    { field: 'id', headerName: 'num', width: 150 },
    {
      field: 'name',
      headerName: 'Name',
      width: 120,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 120,
      editable: true,
    },
    {
        field: 'CarNum',
      headerName: 'CarNum',
      width: 90,
      editable: true,
    },
    {
        field: 'message',
        headerName: 'message',
        type: 'title',
        width: 300,
        editable: true,
        renderCell: (params)=>{
            return(
              <Link to="/post" className="link">
                <>
                    <button className="userListEdit">자세히</button>
                </>
                </Link>
            )
        }
      }
  ];
  

export default function Report(){
    return (
    <div className="Report">
        <DataGrid
        rows={reportRows}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={10}
        rowPerPageOptions={[5]}
        checkboxSelection
        />
    </div>
    )
}
