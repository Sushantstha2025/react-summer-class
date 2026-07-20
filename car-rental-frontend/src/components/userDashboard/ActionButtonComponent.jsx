import { Ellipsis } from 'lucide-react';
import { Button, Dropdown } from 'antd';

const ActionButtonComponent = () => {
const items = [
  {
    key: '1',
    label: (
      <button className='text-yellow-500 font-semibold text-sm'>View</button>
    ),
  },
  {
    key: '2',
    label: (
      <button className='text-red-400 font-semibold text-sm'>Delete</button>
    ),
  }
];

  return (
    <div>
      <Dropdown menu={{ items }} placement="rightTop">
        <Button><Ellipsis size={16} /></Button>
      </Dropdown>
    </div>
  )
}

export default ActionButtonComponent
