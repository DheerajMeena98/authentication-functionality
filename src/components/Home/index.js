import Header from '../Header/index'

import LogoutButton from '../LogoutButton'

import About from '../About'

import './index.css'

const Home = props => (
  <>
    <Header />
    <div className="home-container">
      <h1> Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
