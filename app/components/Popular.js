var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

// 1. stateless functional component
function SelectLanguage (props) {
    var languages = ['All', 'JavaScript', 'HTML', 'CSS', 'Python'];
 
    return (
        <ul className='languages'>
        {languages.map(function (lang) {
            return (
                <li 
                style={lang === props.selectedLang ? { color: 'green' } : null}
                onClick={props.onSelect.bind(null, lang)}
                key={lang}>
                    {lang}
                </li>
            )
        })}
    </ul>
    )
}

function RepoGrid (props) {
    return (
        <ul className='popular-list'>
            {props.repos.map(function (repo, index) {
                return(
                    <li key={repo.name} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li>
                                <a href={repo.html_url}>
                                <img
                                className='avatar'
                                src={repo.owner.avatar_url}
                                alt={repo.owner.login} /> </a>
                            </li>
                            <li>
                                <a href={repo.html_url}>{repo.name}</a>
                            </li>
                            <li>@{repo.owner.url}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

SelectLanguage.propTypes = {
    selectedLang: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired,
}

class Popular extends React.Component {

    // set some initial state with constructor
    constructor (props) {
        super(props);
        this.state = {
            selectedLang: 'All',
            repos: null
        };

        // to ensure 'this' is always be called in correct context 
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLang);
    }

    updateLanguage(lang) {
        this.setState(function () { 
            return {
                selectedLang: lang,
                repos: null
            }
         });

      // ajax requests
        api.fetchPopularRepos(lang)
        .then(function(repos) {
            this.setState(function() {
                return {
                    repos: repos
                }
            })
        }.bind(this));
    }

    render() {
        return (
            <div>
                <SelectLanguage
                selectedLang={this.state.selectedLang}
                onSelect={this.updateLanguage}
                />
                 {!this.state.repos
          ? <p>Loading...</p>
          : <RepoGrid repos={this.state.repos} />}
            </div>
        )
    }
}

module.exports = Popular;

// 2. stateless component
// class SelectLanguage extends React.Component {
//     render() {
//     var languages = ['All', 'JavaScript', 'HTML', 'CSS', 'Python'];
//         return (
//             <ul className='languages'>
//             {languages.map(function(lang) {
//                 return (
//                     <li 
//                     style={lang === this.props.selectedLang ? { color: 'green' } : null}
//                     onClick={this.props.onSelect.bind(null, lang)}
//                     key={lang}>
//                         {lang}
//                     </li>
//                 )
//             }, this)}
//         </ul>
//         )
//     }
// }

