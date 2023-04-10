import { Routes, Route } from 'react-router-dom'
import './App.css'
import Movie from './pages/movie/Movie'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import MoviesList from './components/movielist/MoviesList'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="movie/:id" element={<Movie />} />
      <Route path="movies/:type" element={<MoviesList />} />
      <Route path="/*" element={<h1>Error Page</h1>}></Route>
    </Routes>

    </>
  )
}

export default App
