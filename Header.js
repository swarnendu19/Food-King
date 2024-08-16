import "./Header.css"
const Header = () => {
  return (
    <header>
    <nav className='nav-container'>
      <img src="./icon.png" alt="Logo" className="img-logo" />
      <input type="text" className="input" placeholder="Type something..." />
      <img src="./profile.png" alt="" className="img-profile" />
      <ul className='list-container'>
        <li>Home</li>
        <li>About</li>
        <li>Contact US</li>
      </ul>
    </nav>
  </header>
  )
}

export default Header
