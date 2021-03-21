import React, { useState } from 'react';
import './SearchBox.scss';
import logo from '../../assets/images/Logo_ML.png';

function SearchBox({ onSubmit }) {
	const [searchValue, setSearchValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(searchValue);
	};


	return (
		<div className='background-banner'>
			<form className='search-box-container' onSubmit={e => handleSubmit(e)}>
				<a href={'/'}>
					<img src={logo} alt='Logo Mercado Libre' />
				</a>
				<input className='search-box-input' type='text' autoFocus="autoFocus" placeholder='Nunca dejes de buscar'
					onKeyUp={e => setSearchValue(e.target.value)} />
				<button type='submit' className='search-box-btn' data-testid='search-box-icon' />
			</form>
		</div>
	);
}

export default SearchBox;
