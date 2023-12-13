import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Landing from './views/home (landing)/Landing';
import About from './views/about/About';
import Contact from './views/contact/Contact';
import DetailChars from './views/detail/DetailChars';
import Error from './views/error/Error';
import Search from './views/search/Search.jsx';
import SearchLocations from './views/search/SearchLocations.jsx';
import SearchEpisodes from './views/search/SearchEpisodes.jsx';

function App() {
  return (
    <div className = 'App'>
      <Routes>
      <Route path = '/' element = {<Landing />} />
      <Route path = '/search/characters' element = {<Search />} />
      <Route path = '/search/locations' element = {<SearchLocations />} />
      <Route path = '/search/episodes' element = {<SearchEpisodes />} />
      <Route path = {'/detail/characters/:id'} element = {<DetailChars />} />
      <Route path = '/contact' element = {<Contact />} />
      <Route path = '/about' element = {<About />} />
      <Route path = '*' element = {<Error />} />
      </Routes>
    </div>
  )
}

export default App
