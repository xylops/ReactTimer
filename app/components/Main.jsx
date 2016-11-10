var React = require('react');
var ReactDOM = require('react-dom');
var Navigation = require('Navigation');

var Main = (props) => {
    return(
        <div>
            <Navigation/>
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;
