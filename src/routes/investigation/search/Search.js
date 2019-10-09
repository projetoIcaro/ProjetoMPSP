import styles from './Search.module.css';

import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, Input} from 'component/form/FormWrapper';
import ItemButton from './ItemButton';
import CompassLogo from './Grupo_62.png';
import {setAttrProps} from 'utils/redux/actions/app';

function Search (props) {
	const {searchItems} = props;
	const [itemsToSearch, setItemsToSearch] = useState([
		{id: 'nome', icon: 'person', isOpen: false, label: 'Nome'},
		{id: 'pis', icon: 'suitcase', isOpen: false, label: 'PIS'},
		{id: 'rg', icon: 'fingerprint', isOpen: false, label: 'RG'},
		{id: 'cpf', icon: 'identity', isOpen: false, label: 'CPF'},
		{id: 'cnpj', icon: 'identity-2', isOpen: false, label: 'CNPJ'},
		{id: 'empresa', icon: 'company', isOpen: false, label: 'Empresa'},
	]);
	useEffect(() => {
		const setItems = itemsToSearch.map((data) => {
			if (searchItems && searchItems.get(data.id)) data.isOpen = true;
			return data;
		});
		setItemsToSearch(setItems);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSearchClick = () => {
		props.actions.setHasToSearch(true);
	};

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
			return (
				<div className={styles.input} key={data.id}>
					<Input
						attribute={['search', data.id]}
						handleIconClick={() => toggleItem(data.id)}
						icon="minus"
						placeholder={data.label}
					/>
				</div>
			);
		});
	};
	const renderButtons = () => {
		return itemsToSearch.map((data) => {
			if (data.isOpen) return null;
			return (
				<ItemButton
					handleClick={() => toggleItem(data.id)}
					icon={data.icon}
					key={data.id}
				>
					{data.label}
				</ItemButton>
			)
		});
	};
	
	const renderHelpMessage = () => {
		let hasOpen = false;
		itemsToSearch.forEach(data => {
			if (!hasOpen) hasOpen = data.isOpen;
		});
		return !hasOpen ?(
			<div className = {styles.messageLogo}>
				<div className = {styles.logoCompass}>
					<img alt = "compass-logo" src = {CompassLogo}/>
				</div>
				<div className = {styles.helpMessage}>Por favor, selecione um ou mais campos para começar</div>
			</div>
		) : null;
	};

	return (
		<div className = {styles.wrapper}>
			{renderHelpMessage()}
			<div className = {styles.inputSet}>{renderInputs()}</div>
			<div className = {styles.buttonSet}>{renderButtons()}</div>
			<Button><Link onClick = {handleSearchClick} to = "/investigation/result">Buscar</Link></Button>
		</div>
	);
}

const mapStateToProps = (state) => ({
	searchItems: state.getIn(['app', 'values', 'search']),
});

const mapDispatchToProps = (dispatch) => ({
	actions: {
		setHasToSearch: (value) => dispatch(setAttrProps(['hasToSearch'], value)),
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
