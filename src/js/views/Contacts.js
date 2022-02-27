import React, { useState, useEffect, useContext } from "react"; // needed to add useContext
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; // needed to add

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context); // needed to add this doesnt change its standard
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((item, index) => {
							// make sure the store.contacts is in {} because mapping is JVS method and we are in HTML code so needs {}
							return (
								<ContactCard
									contactDetails={item}
									key={index}
									onDelete={() => 
										setState({ showModal: true })}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
