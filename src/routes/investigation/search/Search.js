import styles from './Search.module.css';

import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Button, Input} from 'component/form/FormWrapper';
import SvgIcon from 'component/SvgIcon';
import ItemButton from './ItemButton';

function Search () {
	const [itemsToSearch, setItemsToSearch] = useState([
		{id: 'name', icon: 'person', isOpen: false, label: 'Nome'},
		{id: 'cis', icon: 'suitcase', isOpen: false, label: 'CIS'},
		{id: 'rg', icon: 'fingerprint', isOpen: false, label: 'RG'},
		{id: 'cpf', icon: 'identity', isOpen: false, label: 'CPF'},
		{id: 'cnpj', icon: 'identity-2', isOpen: false, label: 'CNPJ'},
		{id: 'company', icon: 'company', isOpen: false, label: 'Empresa'},
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
			const removeButton = () => {
				return <div><SvgIcon icon = "minus"/></div>;
			}
			return (
				<Fragment>
					<Input
						attribute={['search', data.id]} 
						appendComponent = {removeButton} 
						placeholder = {data.label} 
						key = {data.id}
					/>
					<SvgIcon icon = "minus"/>
				</Fragment>
			);
		});
	};
	const renderButtons = () => {
		return itemsToSearch.map((data) => {
			if (data.isOpen) return null;
			return <ItemButton handleClick = {() => toggleItem(data.id)} icon = {data.icon} key = {data.id}>{data.label}</ItemButton>;
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
