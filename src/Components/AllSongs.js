import React from 'react';
import PlayMusic from './PlayMusic';

class AllSongs extends React.Component {
    constructor() {
        super();
        this.state = {
            all_songs_list: [], // Initialize the songs list to an empty array
            loading: true // Set loading to true initially
        };
    }

    componentDidMount() {
        // Dynamically require all files in the songs directory
        const songsContext = require.context('../asserts/songs', false, /\.mp3$/);
        const songs = songsContext.keys().map((key) => {
            return {
                name: key.split('/').pop().replace(/\.\w+$/, ''), // Extract the song name from the file path
                url: songsContext(key) // Get the URL of the song
            };
        });

        this.setState({
            all_songs_list: songs, // Set the songs list to the loaded songs
            loading: false // Set loading to false after loading the songs
        });
    }

    render() {
        if (this.props.songIndex !== -1) {
            return (
                <PlayMusic
                    songIndex={this.props.songIndex}
                    Songs={this.state.all_songs_list}
                    currentlyOnPlayMusicScreen={this.props.currentlyOnPlayMusicScreen}
                    playPauseButtonClicked={this.props.playPauseButtonClicked}
                />
            );
        }

        return (
            <div className="all-songs">
                <h1 className="all-songs-heading">All Songs</h1>
                <div className="all-songs-list">
                    {this.state.all_songs_list.map((item, index) => {
                        return (
                            <div className={this.props.currentMusicSelection === index ? 'selected-song' : ''} key={index}>
                                {item.name}
                            </div>
                        );
                    })}
                    <div className="instruction-all-songs">
                        Use "<i className="fas fa-backward"></i>" and "<i className="fas fa-forward"></i>" buttons to navigate.
                    </div>
                </div>
            </div>
        );
    }
}

export default AllSongs;
