import React from 'react';
import axios from 'axios';
import '../styles/Menu.css'
import '../styles/Search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: {},
            message: '',
        };
        this.cancel = '';
    }

    //this method will fetch the data from my api
    fetchSearchResults = (query) => {
        
        const searchUrl = `http://localhost:4000/api/employee/${query}`;  

        //const searchUrl = `http://localhost:4000/api/employee/search/${query}`;  
        console.log("fetch " + searchUrl)
        if (this.cancel) {
            // Cancel the previous request before making a new request
            this.cancel.cancel();
        }
        // Create a new CancelToken
        this.cancel = axios.CancelToken.source(); //use cancel toke from axios to cancel the the request
        axios.get(searchUrl, {
                cancelToken: this.cancel.token
            })
            .then((res) => {
               // console.log(res.data)
                const resultNotFoundMsg = !res.data.length
                    ? 'There are no more search results. Please try a new search.'
                    : '';
                    //set state with data into results
                this.setState({
                    results: res.data,
                    message: resultNotFoundMsg                   
                });
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({                    
                        message: 'Failed to fetch results. Please check network',
                    });
                }
            });
    };

    //it will handle the input
    handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            //if backspace is hit it will reset everything
            this.setState({ query, results: {}, message: '' });
        } else {
            this.setState({ query , message: '' }, () => {
                //console.log(query)
                this.fetchSearchResults(query);
            });
        }
    };

    renderSearchResults = () => {
        //pull the results out of state
        const { results } = this.state;

        if (Object.keys(results).length && results.length) {
            //console.log(results)
            return (
                <div className="results-container">
                    {results.map((result) => {
                        //console.log(result.name)
                        return (
                            <a key={result._id} className="result-items">
                                <h6 className="image-username">{result.name}</h6>
                                <div className="image-wrapper">
                                    <img className="image" src={result.empPic} alt={`${result.name} `} />
                                </div>
                            </a>
                        );
                    })}
                </div>
            );
        }
    };

    render() {
        const { query, message } = this.state;
        //console.log(query)
        return (
            <div className="container">
                {/*Heading*/}
                <h2 className="heading">Search Employee Database</h2>
                {/*Search Input*/}
                <label className="search-label" htmlFor="search-input">
                    <input
                        type="text"
                        name='query'
                        value={query}
                        id="search-input"
                        placeholder="Search..."
                        onChange={this.handleOnInputChange}
                    />
                    <i className="fa fa-search search-icon" />
                </label>
                {/* rerror result */}
                {message && <p className='message'>{message}</p>}

                {/* results */}
                {this.renderSearchResults()}
            </div>
        )
    }
}
export default Search;