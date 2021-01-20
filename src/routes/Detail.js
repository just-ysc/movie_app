import React from 'react';

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {location, history} = this.props;
        if (!location.state) {
            history.push('/');
        }
    }


    render() {
        const {location} = this.props;
        if (location.state) {
            return (
                <h1>{location.state.title}</h1>
            )
        } else {
            return null;
        }

    }
}

export default Detail;