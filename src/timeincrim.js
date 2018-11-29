import React, {Component} from 'react'
import { Button } from 'reactstrap';
import Time from './timerzone'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0,
            interval : null
        }
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)
    }
    start = () => {
        if(this.state.interval) {
            return
        }
        const interval = setInterval(
            () => {
               this.setState({
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
        this.setState({
            interval: interval
        })
    }
    stop = ()=> {
        if(!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
    }
    reset = ()=> {
        if(!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            timeMs: 0
        })
        this.setState({
            interval: NaN
        })
    }
    render() {
        return(
            <div className="phone">
            <Time ms={this.state.timeMs} />
            <div className ="btns-manip">
            <div>
            <input className="btn btn-success"
                type="button"
                value="Start"
                onClick={this.start} />
                </div>
                <div>
            <input className="btn btn-dark"
            type="button"
            value="||"
            onClick={this.stop} />
            </div>
            <div>
            <input className="btn btn-danger"
            type="button"
            value="Reset"
            onClick={this.reset} />
            </div>
            </div>
    </div>

        );
    }
}
export default Timer