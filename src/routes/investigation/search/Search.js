import styles from './Search.module.css';

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Input} from 'component/form/FormWrapper';
import ItemButton from './ItemButton';

function Search () {
	const [itemsToSearch, setItemsToSearch] = useState([
		{id: 'name', isOpen: false, label: 'Nome'},
		{id: 'cis', isOpen: false, label: 'CIS'},
		{id: 'rg', isOpen: false, label: 'RG'},
		{id: 'cpf', isOpen: false, label: 'CPF'},
		{id: 'cnpj', isOpen: false, label: 'CNPJ'},
		{id: 'company', isOpen: false, label: 'Empresa'},
	]);
	const toggleItem = (id) => {
		const newItemsToSearch = itemsToSearch.map((data) => {
			if (data.id === id) {
				data.isOpen = !data.isOpen;
			}
			return data;
		});
		setItemsToSearch(newItemsToSearch);
	};
	const renderInputs = () => {
		return itemsToSearch.map((data) => {
			if (!data.isOpen) return null;
			return <Input attribute={['search', data.id]} placeholder = {data.label} key = {data.id}/>;
		});
	};
	const renderButtons = () => {
		return itemsToSearch.map((data) => {
			if (data.isOpen) return null;
			return <ItemButton handleClick = {() => toggleItem(data.id)} key = {data.id}>{data.label}</ItemButton>;
		});
	};
	return (
		<div className = {styles.wrapper}>
			<div className = {styles.inputSet}>{renderInputs()}</div>
			<div className = {styles.buttonSet}>{renderButtons()}</div>
			<Link to = "/investigation/result"><Button>Buscar</Button></Link>
		</div>
	);
}

export default Search;
