import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import TestSelect from './pages/TestSelect'
import Test from './pages/Test'
import Hotplace from './pages/Hotplace'
import LetterWrite from './pages/LetterWrite'
import Board from './pages/Board'
import ShowLetter from './pages/ShowLetter'
import Result from './pages/Result'
import PositionInput from './components/PositionInput'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/testselect' element={<TestSelect />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='/hotplace' element={<Hotplace />}></Route>
          <Route path='/letterwrite/:graphName' element={<LetterWrite />}></Route>
          <Route path='/board' element={<Board />}></Route>
          <Route path='/showletter' element={<ShowLetter />}></Route>
          <Route path='/result' element={<Result />}></Route>
          <Route path='/positioninput' element={<PositionInput />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
