import React, { useState, useEffect, useContext } from "react"; // add useContext since using actions
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext"; // needed to add since using actions

export const Modal = props => {
	const { store, actions } = useContext(Context); // needed to add this doesnt change its standard
	const [state, setState] = useState({
		// showModal: false, **dont think needed here since already passed as props in contact
		// id: null          **dont think needed here since already passed as props in contact
	});
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Oh no!
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={e => actions.setDeleteId(props.id)}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

/* Define the data-types for your component's properties*/
Modal.propTypes = {
	history: PropTypes.object, // was already in template
	onClose: PropTypes.func, // was already in template
	show: PropTypes.bool, // was already in template
	id: PropTypes.string // add this to code , the id even though # is a string cause nto use mathwise
};

/*Define the default values for your component's properties*/
Modal.defaultProps = {
	show: false,
	onClose: null
};
