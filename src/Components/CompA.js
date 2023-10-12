import React from 'react'

 function CompA(props) {
  return (
    <>
    <table border={1}>
        <tr>
            <th>NAME</th>
            <th>ROLL</th>
        </tr>
    
    {
        props.data.map((e,i)=>{
            return(
                <>
                <tr>
                <td>{e.NAME }</td>
                <td>{e.ROLL }</td>
                </tr>
                </>
            )
        })
    }
     </table>
    </>
  )
}
export default CompA;