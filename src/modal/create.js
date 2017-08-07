import React from 'react';
import ReactDOM from 'react-dom';
import styles from './create.scss';
import Modal from './Modal';

function createModal(Content, props) {

	const div = document.createElement('div');
	const wrapper = document.body.appendChild(div);

	return new Promise((resolve, reject) => {

		document.body.classList.add(styles.noOverflow);

		const cleanup = () => {
			ReactDOM.unmountComponentAtNode(wrapper);
			document.body.classList.remove(styles.noOverflow);
			wrapper.remove();
		};

		const response = func => response => {
			cleanup();
			func(response);
		};

		const actions = { accept: response(resolve), close: response(reject) };

		ReactDOM.render(
			<Modal {...actions}>
				<Content {...props} />
			</Modal>,
			wrapper
		);
	});
}

export default createModal;
