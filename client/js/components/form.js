import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(actions.getPreviousQuery());
    }

    submit(event) {
        event.preventDefault();
        this.props.dispatch(actions.onSubmit({
            query: event.target.search.value
        }));
        document.location = 'https://www.google.com/#q=' + this.props.query[0].query;
    }

    render() {
        return (
                <div className="search-container">
                    <form onSubmit={this.submit}>
                        <input className="input" name="search" placeholder="Search Google..." type="text" autoComplete="off" required></input>
                    </form>
                </div>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        query: state.query
    };
};

var Container = connect(mapStateToProps)(Form);
module.exports = Container









