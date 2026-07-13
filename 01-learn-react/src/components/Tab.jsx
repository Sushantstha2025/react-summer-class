import React from 'react'
import { Tabs } from 'antd';

const Tab = () => {
    return (
        <Tabs
        defaultActiveKey="1"
        centered
        items={Array.from({ length: 3 }).map((_, i) => {
        const id = String(i + 1);
        return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab Pane ${id}`,
        };
        })}
    />  
    )
}

export default Tab
