import React from 'react'
import Data from './Data'

function DataList() {
  const dataArray = [
    {
      "_id": "6008beb1ee913e8537da2500",
      "index": 0,
      "guid": "f349af56-3d2a-43b2-8576-e74219e27e4c",
      "isActive": true,
      "balance": "$1,885.42"
    },
    {
      "_id": "6008beb1e6017715c870a354",
      "index": 1,
      "guid": "b273c4a7-8ec7-4c8a-be1d-f543d092d355",
      "isActive": true,
      "balance": "$3,706.09"
    },
    {
      "_id": "6008beb1540e4711b5ae9ec4",
      "index": 2,
      "guid": "3928b745-c834-4b94-b897-6d1521fb0de7",
      "isActive": true,
      "balance": "$3,934.23"
    },
    {
      "_id": "6008beb183c0e1386c138fd8",
      "index": 3,
      "guid": "8aa0e116-2514-40a8-9394-1d45cfaefd82",
      "isActive": true,
      "balance": "$2,619.59"
    },
    {
      "_id": "6008beb176ae88f9d598a956",
      "index": 4,
      "guid": "6df55992-d186-4208-9355-1ce3099c9734",
      "isActive": true,
      "balance": "$1,636.49"
    }
  ]
  // const dataList = dataArray.map( (data) => (
  //   <>
  //     <p><b>_id : {data._id} | index : {data.index} | balance : {data.balance}</b></p>
  //   </>
  // ))
  // return (
  //   <div>{dataList}</div>
  // )

  const allData = dataArray.map((data,index) => <Data key={index} data={data} />);
  return <div>{allData}</div>
}

export default DataList
