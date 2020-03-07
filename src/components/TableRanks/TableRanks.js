/* import { Tabs, Tab } from 'react-bootstrap' */
import React, { useState } from 'react'
import _ from 'lodash'

function Table(props) {
  const refactorArr = props.data.map(entry => {
    return {
      Brand: entry.Brand,
      Variety: entry.Variety,
      Style: entry.Style,
      Country: entry.Country,
      Stars: entry.Stars,
      Year: Number(entry['Top Ten'].substring(0, 4)),
      Rank: Number(entry['Top Ten'].substring(6, 8))
    }
  })
  const arrayByYear = _.groupBy(refactorArr, 'Year')

  console.log(arrayByYear)

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="d-flex">
            <th scope="col" className="col-2">
              Rank
            </th>
            <th scope="col" className="col-2">
              Brand
            </th>
            <th scope="col" className="col-2">
              Variety
            </th>
            <th scope="col" className="col-2">
              Style
            </th>
            <th scope="col" className="col-2">
              Country
            </th>
            <th scope="col" className="col-2">
              Stars
            </th>
          </tr>
        </thead>
        <tbody>
          <ListItem2016 data={arrayByYear} />
        </tbody>
      </table>
    </div>
  )
}

function ListItem2016(props) {
  const listElements = props.data[2016]
  console.log(listElements)
  const listComponents = listElements.map(item => {
    return (
      <tr className="d-flex ">
        <td className="col-2">
          <div>{item.Rank}</div>
        </td>
        <td className="col-2 text-left">{item.Brand}</td>
        <td className="col-2">{item.Variety}</td>
        <td className="col-2">{item.Style}</td>
        <td className="col-2">{item.Country}</td>
        <td className="col-2">{item.Stars}</td>
      </tr>
    )
  })
  return <React.Fragment>{listComponents}</React.Fragment>
}

export default Table
