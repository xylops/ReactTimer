var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm')

var CountDown = React.createClass({
    getInitialState:function(){
        return { count : 0 };
    },
    handleSetCountdown:function(seconds){
        this.setState({
            count: seconds
        })
    },
    render:function(){
        var {count} = this.state;
        return(
            <div>
                <Clock totalSeconds={count}/>
                <CountDownForm onSetCountDown={this.handleSetCountdown}/>
            </div>
        );
    }
})


module.exports = CountDown;
