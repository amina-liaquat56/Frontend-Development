import React from 'react';
class App extends React.Component {
   render() {
		function formatName(user) {
            return user.firstName + ' ' + user.lastName;
        }
        let user = {
            firstName: 'amina',
            lastName: 'liaquat'
        };
      return (
          <div>  
				<h2>React Version is {React.version}</h2>
                <h2>{1 + 1}</h2>
                <h2>my name is- {user.firstName}</h2>
                <h2>my full name is- {formatName(user)}</h2>
           </div>
      );
   }
}
export default App;
