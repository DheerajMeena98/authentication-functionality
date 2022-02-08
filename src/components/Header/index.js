import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  const onClickHome = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <ul className="header-container">
      <li>
        {' '}
        <Link to="/" className="nav-links" onClick={onClickHome}>
          {' '}
          Home{' '}
        </Link>
      </li>
      <li>
        {' '}
        <Link to="/about" className="nav-links">
          {' '}
          About{' '}
        </Link>
      </li>
    </ul>
  )
}

export default withRouter(Header)
