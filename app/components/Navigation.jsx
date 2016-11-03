var React = require('react');
var {Link} = require('react-router')

var Nav = (props) => {
    return(
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React Timer App
                    </li>
                    <li><Link to="/" activeClassName="active">Timer</Link></li>
                    <li><Link to="/" activeClassName="active">Count Down</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Create By <a href="www.github.com/xylops" target="_blank">Xylops</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

module.exports = Nav;
