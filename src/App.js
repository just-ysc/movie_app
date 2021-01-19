import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            url: 'https://yts.mx/api/v2/list_movies.json?sort_by=rating',
            movies: [],
        };
    }

    getMovies = async () => {
        const {data: {data: {movies}}} = await axios.get(this.state.url);
        this.setState({
            movies,
            isLoading: false,
        });
    };

    async componentDidMount() {
        await this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;

        return (
            <section className='container'>
                {isLoading ? <div className='loader'>
                    <span className='loader__text'>Loading...</span>
                </div> : (
                    <div className='movies'>
                        {movies.map(movie => {
                            return <Movie id={movie.id}
                                          key={movie.id}
                                          year={movie.year}
                                          title={movie.title}
                                          summary={movie.summary}
                                          poster={movie.medium_cover_image}
                                          genres={movie.genres}/>

                        })}
                    </div>)}
            </section>
        );
    }
}

export default App;
