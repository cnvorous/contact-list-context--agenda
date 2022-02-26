const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
			addContacts: []
			deleteContacts:[]
		   updateContacts: []

			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getData: () => {
				// no params needed since hard coded fetch
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/cnvorous")
					.then(response => response.json())
					.then(resultJsonified => {
						setStore({ contacts: resultJsonified }); // becuase get method
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
