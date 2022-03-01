const getState = ({ getStore, setStore, getActions }) => {
	//added getActions so can use it below 36-38
	return {
		store: {
			// to change store use setStore, to use items from store use getStore
			contacts: []

			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getData: () => {
				// make sure to use: event thought its a arrow function cause its inside actions:{}
				// no params needed since hard coded fetch
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/cnvorous")
					.then(response => response.json())
					.then(resultJsonified => {
						setStore({ contacts: resultJsonified }); // because GET Method { : }
					})
					.catch(error => console.log(error));
			},
			addInputAgenda: contact => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST", // this fetch goes out and changes the backend ***** once POST fetch changes back end then this means
					headers: { "Content-Type": "application/json" }, // (cont) the back-end info is diff from front and needs to be updated - this is why we use below line 36-38 GET fetch to grab chnaged info to put in the store
					body: JSON.stringify({
						agenda_slug: "cnvorous", //This created my personal space in API**using my name slug tells the API to save this info in my contact list (users account)
						full_name: contact.full_name,
						address: contact.address,
						phone: contact.phone,
						email: contact.email
					})
				})
					.then(response => response.json()) //36-38 GET fetch to grab chaneged info to put in the store
					.then(() => {
						getActions().getData(); // use this which is same as fetch squence for 1st action(istead of writting all lines out again)
					}); // to access getData we must use method getActions() since in actions in flux
			},

			editContact: contact => {
				//this is params from upDateContactInfo -object
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contact.id}`, {
					method: "PUT",
					body: JSON.stringify({
						full_name: contact.full_name,
						email: contact.email,
						agenda_slug: "cnvorous",
						address: contact.address,
						phone: contact.phone
					}), // data can be a `string` or  an {object} which comes from somewhere further above in our application
					headers: { "Content-Type": "application/json" }
				})
					.then(response => {
						if (!response.ok) throw Error(response.statusText);
						return response.json();
					})
					.then(responseJsonfied => getActions().getData())
					.catch(error => console.error(error));
			},

			setDeleteId: id => {
				// DELETE: /apis/fake/contact/agenda/{agenda_slug}
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(responseJsonfied => getActions().getData())
					.catch(error => console.error(error));
			}
		}
	};
};

export default getState;
