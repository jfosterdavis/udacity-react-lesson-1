import React, { Component } from 'react'

class ListUserFavoriteMovies extends Component {
  
  
  
  render() {
		console.log('Props', this.props);
    	const users = this.props.users
        const profiles = this.props.profiles
        const movies = this.props.movies
        let favMovieId = null
		console.log('Profiles', profiles);
		return (
				<ol className='user-movie-list'>
					{Object.entries(users).map(([key, user])=> (
						<li key={user.id} className={'user-list-item'}>
							<div className='user-details' >
								<p>{user.name}</p>
								<p>{user.userName}</p>
								<p>{user.id}</p>

							</div>
							<div className='favorite-movie'>
                              {console.log('user id',user.id)}
								
{Object.entries(movies).filter(([key, movie]) => (movie.id == profiles.filter(profile => (profile.userID == user.id))[0].favoriteMovieID)).map(([key, movie]) => (
  <div key={movie.id+user.id}>{movie.name}</div>
								
                                  
                                  
									
                              ))}
							</div>
						</li>
					))}
				</ol>
				)
	}
}

export default ListUserFavoriteMovies