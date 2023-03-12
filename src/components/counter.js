import React from "react";

/*class Counter extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 }
        this.timer = null;

    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ counter: this.state.counter + 1 })
        }, 1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {

        return (

          <h1 ><span>{this.state.counter}</span></h1> )
    }

}

export default Counter;*/



const Seconds = () => {
    const [counter, setcouter] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setcouter(counter => counter + 1);
        }, 1000);
        return () => clearInterval(timer)
    });
   
   
    return (
        <div>{counter}</div>
    )
}
export default Seconds; 
