import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Category from './components/Category';
import Favourites from './components/Favourites';
import {Routes, Route} from 'react-router-dom';
import Archive from './components/Category';
import SearchResult from './components/SearchResult';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Searching from './pages/Searching';
import RecipeDetails from './components/RecipeDetails';
import ContactUs from './components/ContactUs';
import RecipePage from './RecipePage';
import PremiumUsers from './PremiumUsers';
import UserPage from './components/UserPage';
import SearchBar from './components/SearchBar';
import FeaturedUsersPage from './components/TastemadeGang';

function App() {
  return (
    <div className="App">
      
      <Header/>
       <Searching/>
   
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/recipe-full-width' element={<RecipeDetails/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
        <Route path='/archive' element={<Archive/>}/>
        <Route path='/search-result' element={<SearchResult/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/recipes' element={<RecipePage/>}/>
        <Route path='/premium-users' element={<PremiumUsers/>}/>
        <Route path='/userpage' element={<UserPage/>}/>
        <Route path='/fuserpage' element={<FeaturedUsersPage/>}/>

      </Routes>
<Footer/>
    </div>
  );
}

export default App;
