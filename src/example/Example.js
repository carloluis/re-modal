import React from 'react';
import create from '../modal';
import ModalContent from './ModalContent';
import styles from './example.scss';

const EXAMPLE_STATE = { message: '...' };

class Example extends React.Component {
	constructor(props) {
		super(props);

		this.showModal = this.showModal.bind(this);
		this.state = EXAMPLE_STATE;
	}

	showModal() {
		create(ModalContent)
			.then(message => this.setState({ message }))
			.catch(() => this.setState(EXAMPLE_STATE));
	}

	render() {
		return (
			<div className={styles.container}>
				<button onClick={this.showModal}>modal</button>
				<span>{ this.state.message }</span>
			</div>
		);
	}
}

export default Example;
