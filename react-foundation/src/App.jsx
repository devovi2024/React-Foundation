import { useState } from 'react'
import './App.css'
import ClassComponents from './Components/Class Components/ClassComponents'
import FunctionComponent from './Components/Function Components/FunctionComponent'
import ShowData from './Props/BasicProps'
import ShowAll from './Props/KindOfProps'
import ParentComponent from './Props/PropTypes'
import PassingProps from './Props/PassingProps'
import Counter from './Hooks/useState/useState'
import UserProfile from './Hooks/useState/ComplexStateStracture'
import ManagingListItems from './Hooks/useState/ManagingListItems'
import SimpleUseEffect from './Hooks/useEffect/simpleUseEffect'
import DataFetching from './Hooks/useEffect/ApiData'
import MultipleDataFetch from './Hooks/useEffect/MultipleDataFetch'
import ClickEvent from './Events & Rendering/Events/ClickEvent'
import {  Route, Link, Routes } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'

function App() {
  return (
    <div> {/* Only one div here */}
      <div>
        <h1>React Foundations</h1>
      </div>

      {/* Components */}
      <div>
        <h1>Function Components</h1>
        <FunctionComponent />
      </div>
      <div>
        <h1>Class Components</h1>
        <ClassComponents />
      </div>

      {/* Props */}
      <div>
        <h1>Basic Props</h1>
        <ShowData />
      </div>
      <div>
        <h1>Kind of Props</h1>
        <ShowAll />
      </div>
      <div>
        <h1>Types Props</h1>
        <ParentComponent />
      </div>
      <div>
        <h1>Passing Props</h1>
        <PassingProps />
      </div>

      {/* Hooks */}
      <div>
        <h1>useState</h1>
        <Counter />
      </div>
      <div>
        <h1>useState Complex</h1>
        <UserProfile />
      </div>
      <div>
        <h1>useState Complex</h1>
        <ManagingListItems />
      </div>
      <div>
        <h1>useEffect Hook</h1>
        <SimpleUseEffect />
      </div>
      <div>
        <h1>useEffect with API</h1>
        <DataFetching />
      </div>
      <div>
        <h1>Multiple Data Fetch</h1>
        <MultipleDataFetch />
      </div>

      {/* Events */}
      <div>
        <h1>ClickEvents</h1>
        <ClickEvent />
      </div>

      {/* div */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
