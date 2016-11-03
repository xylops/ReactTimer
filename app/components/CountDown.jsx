var React = require('react');
var Clock = require('Clock');

var CountDown = React.createClass({
    render:function(){
        return(
            <Clock totalSeconds={129}/>
        );
    }
})


module.exports = CountDown;
