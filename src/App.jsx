// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import MainHeader from './components/MainHeader'
import PostList from './components/PostList'

function App() {
  const [isModalVisible, setisModalVisible] = useState(false)
  function closeModalHandler() {
    setisModalVisible(false);
  }

  function showModalHandler() {
    setisModalVisible(true);
  }
  return (
    <>
      <MainHeader onOpenModal={showModalHandler} />
      <PostList isPopupShowHide={isModalVisible} hideModalHandler={closeModalHandler}/>
    </>
  )
}

export default App
