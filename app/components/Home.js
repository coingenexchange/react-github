var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <h1>Popular Github Repos</h1>
                
            <Link className='button' to='/battle'>
            Learn more
            </Link>
            </div>
        )
    }
}

module.exports = Home;