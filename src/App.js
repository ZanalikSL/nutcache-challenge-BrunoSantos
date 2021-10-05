import './App.css'

import { EmployeeGridList } from './pages/GridList'
import { Navbar } from './pages/Navbar'

import GlobalState from './global/GlobalState'

function App() {
  return (
    <GlobalState>
      <Navbar />
      <EmployeeGridList />
    </GlobalState>
  )
}

export default App
