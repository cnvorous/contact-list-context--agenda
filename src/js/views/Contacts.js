import React, { useState, useEffect, useContext } from "react"; // needed to add useContext
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; // needed to add

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context); // needed to add this doesnt change its standard
	const [state, setState] = useState({
		showModal: false,
		id: null // this is the vatible used in onDelete() function //its set to null cause we dont know inital value of id
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to={"/addcontact"}>
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
									onDelete={() => setState({ showModal: true, id: item.id })} // have to make sure the varible id is defined in the state hook
								/> //this ondlete prop is passed in contact card when trash can is clicked and passed the setState  & id                                                        // item.id targets what is needed to be deleted
							);
						})}
					</ul>
				</div>
			</div>
			<Modal //show, onclose and id all are props passes to modal TAG
				show={state.showModal}
				// we have to send id as a prop to the modal cause it is what does the actual function of delete
				onClose={() => setState({ showModal: false })}
				id={state.id}
			/>{" "}
		</div>
	);
};
