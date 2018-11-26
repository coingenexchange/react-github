var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch; // unknown route (e.g. 404)
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Popular = require('./Popular');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                <Nav />
                <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/battle' component={Battle} />
                <Route path='/popular' component={Popular} />
                <Route render={function() {
                    return <p>404: Not Found</p>
                }} />
                </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App; // common js - exporting app component