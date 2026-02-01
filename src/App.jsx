import Home from './Pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'

import Export from './Pages/Export.jsx'
import Donation from './Pages/Donation.jsx'
import ReportBugs from './Pages/ReportBugs.jsx'
import Settings from './Pages/Settings.jsx'

import ComingSoon from './Pages/ComingSoon'

function App() {

  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/export' element={<Export/>}></Route>
        <Route path='/donation' element={<Donation/>}></Route>
        <Route path='/reportBugs' element={<ReportBugs/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
      </Routes>
    </main>
  )
}

export default App
