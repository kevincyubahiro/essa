import React from 'react'
import Insertuser from './insertuser'
import Select from './select'
import Update from './update'
import Nav from './nav'
import Login from './login'
import Insertmark from './insertmark'
import Selectmark from './selectmark'
import Updatemark from './updatemark'
import { BrowserRouter  as  Router,Routes,Route, BrowserRouter} from 'react-router-dom'




const App = () => {
  return (
    <div>
      <Router>
      <Routes>
       <Route path='/login'element={< Insertuser/>}/>
       <Route path='/'element={< Login/>}/>
       <Route path='/select'element={< Select/>}/>
       <Route path='/selectmark'element={< Selectmark/>}/>
       <Route path='/update/:id'element={< Update/>}/>
       <Route path='/nav'element={< Nav/>}/>
       <Route path='/insertmark'element={< Insertmark/>}/>
       <Route path='/updatemark/:markid'element={< Updatemark/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
