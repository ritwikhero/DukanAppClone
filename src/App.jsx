import { RevenueCard } from './components/RevenueCard'
import './App.css'

function App() {

  return (
    <>
    <div className='grid grid-cols-3 p-6'>
      <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={"13"}></RevenueCard>
    </div>
      
    </>

  )
}

export default App
