import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react"; // needed to add useContext
import { Context } from "../store/appContext.js"; // needed to add
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context); // needed to add this doesnt change its standard
	const targetContact = store.contacts.find(contact => {
		return contact.id == props.match.params.id; //bringing up contact trying to change
	});
	const [updateContactInfo, setUpdateContactInfo] = useState({
		//addContactinfo is to save info from form
		full_name: targetContact.full_name,
		phone: targetContact.phone,
		email: targetContact.email,
		address: targetContact.address,
		id: targetContact.id
	});
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={updateContactInfo.full_name} // would not need value if used onchange={handleChange}
							onChange={e => setUpdateContactInfo({ ...updateContactInfo, full_name: e.target.value })}
							// if using function here would be onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={updateContactInfo.email}
							onChange={e => setUpdateContactInfo({ ...updateContactInfo, email: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={updateContactInfo.phone}
							onChange={e => setUpdateContactInfo({ ...updateContactInfo, phone: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={updateContactInfo.address}
							onChange={e => setUpdateContactInfo({ ...updateContactInfo, address: e.target.value })}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={e => actions.editContact(updateContactInfo)}>
						{" "}
						Save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object // put this in so can use id as param prop
};
