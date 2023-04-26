import './App.css';
import Advertising from './Component/Advertising/Advertising';
import AllVipBooks from './Component/AllVipBooks/AllVipBooks';
import BooksAll from './Component/BooksAll/BooksAll';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/allVipBooks' element={<AllVipBooks/>}/>
        <Route path='/booksAll' element={<BooksAll/>}/>
      </Routes>
      <Advertising/>
      <Footer/>
    </div>
  );
}

export default App;
