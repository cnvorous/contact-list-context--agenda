import React from "react";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react"; // needed to add useContext
import { Context } from "../store/appContext.js"; // needed to add

export const AddContact = () => {
	const { store, actions } = useContext(Context); // needed to add this doesnt change its standard
	const [addContactInfo, setAddContactInfo] = useState({
		fullName: "",
		phone: "",
		email: "",
		adress: "",
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
							value={addContactInfo.fullname}
							onChange={e=> setAddContactInfo({...addContactInfo, fullName: e.target.value})}
							 />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email" 
							className="form-control" 
							placeholder="Enter email"
							value={addContactInfo.email}
							onChange={e=> setAddContactInfo({...addContactInfo, email: e.target.value})}
							 />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone" 
							className="form-control" 
							placeholder="Enter phone"
							value={addContactInfo.phone}
							onChange={e=> setAddContactInfo({...addContactInfo, phone: e.target.value})}
							 />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input 
							type="text"
							className="form-control" 
							placeholder="Enter address"
							value={addContactInfo.address}
							onChange={e=> setAddContactInfo({...addContactInfo, address: e.target.value})}
							 />
					</div>
					<button 
						type="button"
						className="btn btn-primary form-control"
						onClick={e=> actions.addContact(addContactInfo)>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
