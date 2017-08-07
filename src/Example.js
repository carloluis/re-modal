import React from 'react';
import PropTypes from 'prop-types';
import create from './modal';

const ModalContent = ({ accept }) => (
	<div>
		<h1>Re-Modal</h1>
		<button onClick={accept}>OK</button>
	</div>
);
ModalContent.propTypes = {
	accept: PropTypes.func
};

class Example extends React.Component {
	constructor(props) {
		super(props);
	}

	showModal() {
		create(ModalContent).then(console.info).catch(console.error);
	}

	render() {
		return (
			<div>
				<button onClick={this.showModal}>modal</button>
			</div>
		);
	}
}

export default Example;
