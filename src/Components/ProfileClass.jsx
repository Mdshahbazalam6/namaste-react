import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            count: 0,
        };
        console.log(" child constructor"); //first constructor will be called then render
    }

    componentDidMount() {
        // API calls
        console.log("child componentDidMount"); //will be called after render
    }

    componentDidUpdate(prevProps,prevState) {
        if(this.state.count !== this.prevState.count) {
            
        }
        console.log("child componentDidUpdate"); //will be called after render
    }

    componentWillUnmount() {
        // cleanup
        console.log("child componentWillUnmount"); //will be called before unmount
    }

    render() {
        console.log("child render");
        return (
            <div>
                <h1>Profile Page</h1>
                <p>Welcome, {this.state.name}!</p>
                <h2>{this.state.count}</h2>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                }}>Set Count</button>
            </div>
        );
    }
}

export default Profile;