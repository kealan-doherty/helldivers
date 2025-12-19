import './NavBar.css'



const NavBar = () => {
    return(
        <nav className='nav'>
            <a href="/" className = 'site-title'> Helldivers Hub</a>
            <ul>
                <li>
                    <a href = '/Liberation'> Current Campaigns </a>
                </li>
                <li>
                     <a href = '/News'> News </a>
                </li>
                <li>
                    <a href = '/Warbonds'> Warbonds </a>
                </li>
            </ul>

        </nav>
    )
}

export default NavBar;