var React = require('react');
var {Link, IndexLink} = require('react-router')

var Nav = (props) => {
    return(
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React Timer App
                    </li>
                    <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                    <li><Link to="/countDown" activeClassName="active-link">Count Down</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Create By <a href="http://www.github.com/xylops" target="_blank">Xylops</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

module.exports = Nav;
