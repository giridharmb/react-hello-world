import React from 'react'
import DataList from './DataList'

function Data({ data }) {
  return (
    <div>
      {" "}
      _id : {data._id} | index : {data.index} | balance : {data.balance}{" "}
    </div>
  );
}
export default Data
