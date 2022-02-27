const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
			addContacts: []
			//deleteContacts:[]
			// updateContacts: []

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
			}
			addInputAgenda: ()=>{
				fetch("https://assets.breatheco.de/apis/fake/contact/", 
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({
					agenda_slug: "cnvorous",
					name: full_name,
					address: address,
					number: number, 
					email: email
				})
				)
				.then(res)=>(res.json())
				.then(()=>{
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/cnvorous")
					.then(response) => (response.json().then(data=>{
						setstore({addContacts:data});
					}))
				})
			}
		}
	};
};

export default getState;
