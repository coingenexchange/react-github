var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

class Badge extends React.Component {
    render() {
        return (
            <div>
                <img
                    src={this.props.img}
                    alt={this.props.name}
                    style={{width: 20, height: 20}}
                />
                <h1>Name: {this.props.name}</h1>
                <h2>Username: {this.props.username}</h2>
            </div>
        )
    }
}

Badge.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

ReactDOM.render(
<Badge 
    name="Zayn Zafar"
    username="zaynzafar"
    img={'http://placehold.it/20x20'}/>, 
    document.getElementById('app')
);

// Child component within parent component using props
  
// class Badge extends React.Component {
//     render() {
//         return (
//             <UserDetails user={this.props.user} />
//         )
//     }
// }

// class UserDetails extends React.Component {
//     render() {
//         return (
//             <div>
//             <img src={this.props.user.img} />
//             <h1>Name: {this.props.user.name} </h1>
//             <h2>Username: {this.props.user.username} </h2>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Badge user={
//         {
//         name: 'Zayn Zafar', 
//         img: 'http://placehold.it/100x100', 
//         username: 'zaynzafar'
//         }
//         }/>, 
//     document.getElementById('app')
// );