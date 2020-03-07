import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function sideBar (props) {
    const newArr =  props.data.map(entry=> {
        return {year: entry["Top Ten"]}
    }

      )
      console.log(newArr)
    return(
        <div className="w3-sidebar w3-bar-block">
            <ul>
                <li>
                    <NavLink to= "#" className="w3-bar-item w3-button">2016 </NavLink>
                </li>
                <li>
                    <NavLink to= "#" className="w3-bar-item w3-button">2017 </NavLink>
                </li>
                <li>
                    <NavLink to= "#" className="w3-bar-item w3-button">2017 </NavLink>
                </li>
                <li>
                    <NavLink to= "#" className="w3-bar-item w3-button">2017 </NavLink>
                </li>
            </ul>
      </div>
    )
}

export default sideBar;