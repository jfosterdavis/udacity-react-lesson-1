import React, { Component } from 'react'

class ListUserFavoriteMovies extends Component {
  
  
  
  render() {
		console.log('Props', this.props);
    	const users = this.props.users

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
								Favorite Movie
							</div>
						</li>
					))}
				</ol>
				)
	}
}

export default ListUserFavoriteMovies