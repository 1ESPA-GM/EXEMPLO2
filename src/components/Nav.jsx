import {link} from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/home'>Login</Home></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
