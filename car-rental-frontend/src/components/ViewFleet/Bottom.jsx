import React from 'react'
import { Pagination } from 'antd'
import Footer from "../Footer"

const Bottom = () => {
  return (
    <div>
      <div className='bg-[#FAF8FF] py-10'>
            <Pagination align="center" defaultCurrent={1} total={72} />
        </div>
        
      <Footer />
    </div>
  )
}

export default Bottom
