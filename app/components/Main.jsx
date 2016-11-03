var React = require('react');
var ReactDOM = require('react-dom');
var Navigation = require('Navigation')

var Main = (props) => {
    return(
        <div>
            <div>
                <Navigation/>
                <h2>Main.jsx Render</h2>
                {props.children}
            </div>
        </div>
    );
}

module.exports = Main;
