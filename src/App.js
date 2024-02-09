
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio';
import NavBar from './components/navbar/NavBar';
import UserList from './pages/userlist/UserList';
import Counter from './pages/counter/Counter';
import ProductList from './pages/productlist/ProductList';
import ProductListPractice from './pages/assesment/ProductListPractice';
import VolleyballCounter from './pages/volleyballcounter/VolleyballCounter';
// import Header from './components/header/Header';
// import Skills from './components/skills/Skills';
// import Footer from './components/footer/Footer';
// import Form from './components/form/Form';
// import AlertComponent from './components/alert/AlertComponent';



function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' Component={Portfolio}/>
      <Route path='/userlist' Component={UserList}/>
      <Route path='/portfolio' Component={Portfolio}/>
      <Route path='/counter' Component={Counter}/>
      <Route path='/productlist' Component={ProductList}/>
      <Route path='/productlist-practice' Component={ProductListPractice}/>
      <Route path='/volleyballcounter' Component={VolleyballCounter}/>
    </Routes>
    </>
  );
}

export default App;
