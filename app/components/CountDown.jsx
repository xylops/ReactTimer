var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm')
var Control = require('Controls')

var CountDown = React.createClass({
    getInitialState:function(){
        return {
            count : 0,
            countdownStatus:'stopped',
        };
    },
    startTimer:function(){
        this.timer = setInterval(() =>{
            var newCount = this.state.count - 1;
            this.setState({
                count : newCount >= 0 ? newCount : 0
            });

            if(newCount === 0){
                this.setState({countdownStatus:'stopped'});
            }
        }, 1000);
    },
    handleSetCountdown:function(seconds){
        this.setState({
            count: seconds,
            countdownStatus:'started'
        })
    },
    handleStatusChange:function(newStatus){
        this.setState({
            countdownStatus:newStatus
        });
    },
    componentDidUpdate:function(prevProps, prevState){
        if(this.state.countdownStatus !== prevState.countdownStatus){
            switch (this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count:0})
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount:function(){
        clearInterval('this.timer')
        this.timer=undefined;
    },
    render:function(){
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if(countdownStatus !== 'stopped'){
                return <Control countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            }else{
                return <CountDownForm onSetCountDown={this.handleSetCountdown}/>
            }
        }

        return(
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
})

module.exports = CountDown;
