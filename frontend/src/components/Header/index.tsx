import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://github.com/marianarfm" target="_blank"><i className="fab fa-github"></i> marianarfm</a></p>
                </div>
            </header>
        </>
    )
}

export default Header