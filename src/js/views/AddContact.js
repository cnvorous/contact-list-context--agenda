import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react"; // needed to add useContext
import { Context } from "../store/appContext.js"; // needed to add

export const AddContact = () => {
	const { store, actions } = useContext(Context); // needed to add this doesnt change its standard
	const [addContactInfo, setAddContactInfo] = useState({
		//addContactinfo is to save info from form
		full_name: "",
		phone: "",
		email: "",
		address: ""
	});
	//Const handleChange= e => {
	//setAddContactInfo({...addContactInfo, [e.target.name]: e.target.value})}
	// could use this handleChange function in your onclick events instead of having to write out
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
							value={addContactInfo.full_name} // would not need value if used onchange={handleChange}
							onChange={e => setAddContactInfo({ ...addContactInfo, full_name: e.target.value })}
							// if using function here would be onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={addContactInfo.email}
							onChange={e => setAddContactInfo({ ...addContactInfo, email: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={addContactInfo.phone}
							onChange={e => setAddContactInfo({ ...addContactInfo, phone: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={addContactInfo.address}
							onChange={e => setAddContactInfo({ ...addContactInfo, address: e.target.value })}
						/>
					</div>
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={e => actions.addInputAgenda(addContactInfo)}>
							SAVE
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
