import React, { Component } from 'react'

class ListUserFavoriteMovies extends Component {
  
  
  
  render() {
		console.log('Props', this.props);
    	const users = this.props.users
        const profiles = this.props.profiles
        const movies = this.props.movies
		console.log('Profiles', profiles);
		return (
				<ol className='user-movie-list'>
					{profiles.map( profile => {
          				const user = users[profile.userID];
        				const favMovie = movies[profile.favoriteMovieID];
    
    					return(
						<li key={user.id} className={'user-list-item'}>
							<div className='user-details' >
								<p>{user.name}</p>
								<p>{user.userName}</p>
								<p>{user.id}</p>

							
							</div>
                            <div className='movie-details' >
                            <p>{favMovie.name}</p>
                            </div>
						</li>
							)
					})}
				</ol>
				)
	}
}

export default ListUserFavoriteMovies