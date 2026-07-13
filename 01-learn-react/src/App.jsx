import React, { useEffect } from 'react'

import { Menu } from 'antd';
import items from './components/items';
import Tab from './components/Tab';
import axios from "axios"

const App = () => {

  const getData = async () => {
    const response = await axios.get("https://randomuser.me/api/")
    console.log(response)
  }

  useEffect(()=>{
    getData()
  }, [])

const onClick = e => {
    console.log('click ', e);
  };
  return (
    <>
    <Tab />
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items= {items}
    />

    
    </>
  )
}

export default App
