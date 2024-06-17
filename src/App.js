import { useState } from 'react';
import './App.css';
import Players from './components/Players';
import { PLAYERS } from './utils/players.constants';
import { ROLES } from './utils/roles.constants';
import Roles from './components/Roles';
import MafiaSetup from './components/MafiaSetUp';

function App() {

	const [players, setPlayers] = useState( PLAYERS );
	const [roles, setRoles] = useState( ROLES )

	function addNewPlayer($event) {
		setPlayers(previousPlayers => {
			const players = [...previousPlayers, { name: $event.target.value.toLowerCase(), displayName: $event.target.value }]
			return players;
		})
	}

	function onRoleNumberChange( selectedRole, number ){
		
			setRoles( previousRoles => {
				const selectedRoleIndex = previousRoles.findIndex( role => role.name === selectedRole );
				const roles = [ ...previousRoles ];
				roles[selectedRoleIndex].number = +number;
				return roles;
			} )

		
		
	}


	
	

	
	return (
		<div className="App">
			<h1>Mafia BBL</h1>
			<ul className='flex no-list-style app-content'>
				<li><Players players={players} onAddNewPlayer={addNewPlayer} /></li>
				<li><MafiaSetup  players={players} roles={roles}/></li>
				<li><Roles roles={roles} onRoleNumberChange={ onRoleNumberChange }/> </li>
			</ul>
		</div>
	);
}

export default App;
