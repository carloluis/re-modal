import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal.scss';
import classes from './classes';

class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.state = { closing: false, starting: true };

		this.accept = this.closeWith.bind(this, this.props.accept);
		this.close = this.closeWith.bind(this, this.props.close);

		this._props = { accept: this.accept, close: this.close };
		this.handleModalClick = this.handleModalClick.bind(this);
	}

	componentDidMount() {
		setTimeout(() => this.setState({ starting: false }), 400);
	}

	closeWith(cb, data) {
		this.setState({ closing: true });

		setTimeout(function() {
			cb(data);
		}, 400);
	}

	handleModalClick(event) {
		event.stopPropagation();
	}

	render() {
		const { closing, starting } = this.state;

		return (
			<div className={classes(styles.backdrop, (closing || starting) && styles.transition)} onClick={this.close}>
				<div className={classes(styles.modal, closing && styles.out)} onClick={this.handleModalClick}>
					<span className={styles.closeMark} onClick={this.close} />
					<div className={styles.content}>
						{React.cloneElement(this.props.children, this._props)}
					</div>
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	accept: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};

export default Modal;
