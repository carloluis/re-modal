import React from 'react';
import PropTypes from 'prop-types';
import create from './modal';
import styles from './example.scss';

const ModalContent = ({ accept }) => (
	<div>
		<h1>Re-Modal</h1>
		<button onClick={() => accept('OK clicked')}>OK</button>
	</div>
);
ModalContent.propTypes = {
	accept: PropTypes.func
};

class Example extends React.Component {
	constructor(props) {
		super(props);

		this.showModal = this.showModal.bind(this);
		this.state = {
			message: ''
		};
	}

	showModal() {
		create(ModalContent)
			.then(message => this.setState({ message }))
			.catch(console.error);
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
