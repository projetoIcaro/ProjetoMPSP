import React, {Component, Fragment} from 'react';
import {Button} from "semantic-ui-react";

class SituationalInputs extends Component {
	constructor (props) {
		super(props);
		this.state = {
			closedButtons: ['Nome', 'CPF', 'RG', 'PIS', 'CNPJ'],
			openedButtons: [],
		}
	}

	handleClickOpen = (index) => {
		const aux = [...this.state.closedButtons];
		aux.splice(index, 1);
		this.setState({
			closedButtons: aux,
			openedButtons: [
				...this.state.openedButtons,
				this.state.closedButtons[index],
			]
		})
	};

	handleClickClose = (index) => {
		const aux = [...this.state.openedButtons];
		aux.splice(index, 1);
		this.setState({
			openedButtons: aux,
			closedButtons: [
				...this.state.closedButtons,
				this.state.openedButtons[index],
			]
		})
	};

	renderButtons = () => {
		return this.state.closedButtons.sort((a, b) => {
			return a.localeCompare(b);
		})
			.map((value, index) => {
			return (
				<Button
					circular
					color = "red"
					onClick = {() => this.handleClickOpen(index)}
					style = {{marginRight: 10}}
				>
					{value}
				</Button>
			);
		});
	};

	renderInputs = () => {
		return this.state.openedButtons.map((value, index) => {
			console.log(value, index);
			return (
				<Fragment>
					<input type = "text" placeholder = {value}/>
					<Button onClick = {() => this.handleClickClose(index)}>-</Button>
				</Fragment>
			)
		});
	};

	render() {
		return (
			<Fragment>
				{this.renderInputs()}
				{this.renderButtons()}
			</Fragment>
		);
	}
}

export default SituationalInputs;