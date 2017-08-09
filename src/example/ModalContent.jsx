import React from 'react';
import PropTypes from 'prop-types';

const ModalContent = ({ accept }) => (
	<div>
		<h1>Re-Modal</h1>
		<button onClick={() => accept('ok clicked')}>OK</button>
	</div>
);

ModalContent.propTypes = {
	accept: PropTypes.func
};

export default ModalContent;
