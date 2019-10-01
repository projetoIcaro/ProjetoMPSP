import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Button, Input} from 'component/form/FormWrapper';

function Search () {
	const [formSubmit, setFormSubmit] = useState(false);
	const handleClick = () => {
		setFormSubmit(true);
	};
	return (
		<div>
			<Input attribute={['search', 'name']} placeholder="Nome"/>
			<Input attribute={['search', 'cis']} placeholder="CIS"/>
			<Input attribute={['search', 'rg']} placeholder="RG"/>
			<Input attribute={['search', 'cpf']} placeholder="CPF"/>
			<Input attribute={['search', 'cnpj']} placeholder="CNPJ"/>
			<Input attribute={['search', 'company']} placeholder="Empresa"/>
			<Button handleClick={handleClick}>Buscar</Button>
			{formSubmit ? <Redirect to="/investigation/result"/> : null}
		</div>
	);
}

export default Search;
