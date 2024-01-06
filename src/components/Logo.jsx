import React from 'react'
import LogoImg from "../assets/logo.jpg"
 

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={LogoImg} style={{width}} alt="" />
    </div>
  )
}

export default Logo
