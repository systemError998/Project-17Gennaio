import Container from 'react-bootstrap/Container'
import "bootstrap-icons/font/bootstrap-icons.css";

import './App.css'

import Homepage from './pages/homepage';
import MyNavBar from './components/MyNavbar';

function App() {

  return (
    <>
      <MyNavBar />
      <Container className='text-center d-flex justify-content-center my-3 bodyApp'>
        <Homepage />
      </Container>
    </>
  )
}

export default App
