import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const onSuccessLogin = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 2})
    history.replace('/')
  }
  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    onSuccessLogin(data.jwt_token)
  }
  return (
    <div className="login-container">
      <h1> Please Login </h1>
      <button type="button" onClick={onClickLogin}>
        {' '}
        Login with Sample Creds{' '}
      </button>
    </div>
  )
}

export default Login
