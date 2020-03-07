import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import SideBar from './components/NavBar/NavBar'
import Table from './components/TableRanks/TableRanks'
import _  from 'lodash'

const onLoadPage = async id => {
  const res = await fetch('http://starlord.hackerearth.com/TopRamen', {})
  const data = await res.json()
  return data
}




function App() {
  const [ramenData, setRamenData] = useState(null)
  const [year, setYear] = useState(null)

  useEffect(() => {
    onLoadPage().then(data => setRamenData(data))
  }, [year])


console.log(ramenData)

  if (!ramenData) {
    return null
  } else {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <SideBar data={ramenData} />
              <Table data= {ramenData} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
