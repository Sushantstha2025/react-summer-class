import TableComponent from './TableComponent';
import TopComponent from './TopComponent';
import BottomComponent from './BottomComponent';

const MainComponent = () => {
  return (
    <main className='bg-[#FAF8FF] min-h-[100vh-60px] px-17 py-4'>
        <TopComponent />
        <BottomComponent />
        <TableComponent />
      </main>
  )
}

export default MainComponent
