
import './App.css'
import FooterComponenet from './Components/FooterComponenet'
import HeaderComponenet from './Components/HeaderComponenet'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <HeaderComponenet/>
        <Routes>
          <Route path='/' element={<ListEmployeeComponent/>}></Route>
          {/* <Route path='/employees' element={<ListEmployeeComponent/>}></Route> -->testing purpose*/}
          <Route path ='/add-employee' element={<EmployeeComponent/>}></Route>
          <Route path ='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponenet/>
      </BrowserRouter>
    </>
  )
}

export default App
