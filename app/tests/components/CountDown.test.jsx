var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown')

describe('CountDown',()=>{
    it('should exist',()=>{
        expect(CountDown).toExist();
    });

    describe('handleSetCountdown',()=>{
        it('should set state to started and CountDown',(done)=>{
            var countdown = TestUtils.renderIntoDocument(<CountDown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(()=>{
                expect(countdown.state.count).toBe(9);
                done();
            },1001)
        });

        it('should never get pass 0',(done)=>{
            var countdown = TestUtils.renderIntoDocument(<CountDown/>);
            countdown.handleSetCountdown(1);

            setTimeout(()=>{
                expect(countdown.state.count).toNotBe(-2);
                expect(countdown.state.count).toBe(0);
                done();
            },3001)
        });

        it('should pause countdown on pause status',(done)=>{
            var countdown = TestUtils.renderIntoDocument(<CountDown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(()=>{
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            },1001)
        });

        it('should stop countdown on stop status',(done)=>{
            var countdown = TestUtils.renderIntoDocument(<CountDown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(()=>{
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            },1001)
        });
    })
})
