import { Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'

function App() {

  return (
    <>
    <HeaderComponent />
    <Routes>
      {/* http://localhost:3000 */}
      <Route path='/' element={<ListEmployeeComponent />}></Route>
      {/* http://localhost:3000/employees */}
      <Route path='/employees' element={<ListEmployeeComponent />}></Route>
      {/* http://localhost:3000/add-employees */}
      <Route path='/add-employee' element={<EmployeeComponent />}></Route>
      {/* http://localhost:3000/edit-employees/1 */}
      <Route path='/edit-employee/:id' element={<EmployeeComponent />}></Route>
    </Routes>
    <FooterComponent />
    </>
  )
}

export default App
