import React from 'react';
import { connect } from 'react-redux';

class Test extends React.Component {
    handleButton = () => {
        this.props.ping();
    };

    handleFetchButton = () => {
        this.props.fetch();
    }

    handleCancelButton = () => {
        this.props.cancelFetch();
    }

    render() {
        console.log(this.props);
        const { isLoading } = this.props;
        return (
            <div>
                <div>Hey I'm a Test.js</div>
                {isLoading && <p>Loading</p>}
                <button onClick={this.handleFetchButton}>FETCH</button>
                <button onClick={this.handleCancelButton}>CANCEL FETCHING</button>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    isLoading: store.isLoading,
});

const mapStateToDispatch = (dispatch) => {
    return {
        ping: () => dispatch({ type: 'PING' }),
        fetch: () => dispatch({ type: 'FETCH_USER', payload: 'redux-observable' }),
        cancelFetch: () => dispatch({ type: 'FETCH_USER_CANCELLED' })
    }
};

export default connect(mapStateToProps, mapStateToDispatch)(Test);