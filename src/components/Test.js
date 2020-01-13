import React from 'react';
import { connect } from 'react-redux';

class Test extends React.Component {
    handleButton = () => {
        this.props.ping();
    };

    render() {
        console.log(this.props);
        const { isPinging } = this.props;
        return (
            <div>
                <div>Hey I'm a Test.js</div>
                <button onClick={this.handleButton}>{isPinging ? 'pong' : 'ping'}</button>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    isPinging: store.isPinging,
});

const mapStateToDispatch = (dispatch) => {
    return {
        ping: () => dispatch({ type: 'PING' }),
    }
};

export default connect(mapStateToProps, mapStateToDispatch)(Test);