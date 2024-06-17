import { useRef, useState } from 'react';
import './App.css';
import Players from './components/Players';
import { PLAYERS } from './utils/players.constants';
import { ROLES } from './utils/roles.constants';
import Roles from './components/Roles';
import MafiaSetup from './components/MafiaSetUp';

function App() {

	const [players, setPlayers] = useState(PLAYERS);
	const [roles, setRoles] = useState(ROLES)

	const groups = useRef({})

	function addNewPlayer($event) {
		setPlayers(previousPlayers => {
			const players = [...previousPlayers, { name: $event.target.value.toLowerCase(), displayName: $event.target.value }]
			return players;
		})
	}

	function getMafiaSetup() {
		let shuffledNames = [];
		let i = 0;

		const totalRoleNumber = roles.reduce( ( acc, role ) => acc + role.number, 0 );

		console.log(totalRoleNumber);

		if( totalRoleNumber !== players.length ){
			alert("Role Numbers and Player Number don't match")
			return;
		}
		while (i < players.length) {
			let randomNumber = getRandomNumber();
			if (!shuffledNames[randomNumber]) {
				shuffledNames[randomNumber] = { ...players[i] };
				i++;
			} else {
				continue;
			}

		}
		let j = 0;
		for (let role of roles) {
			groups.current[role.name] = shuffledNames.slice(j, j + role.number);
			j = j + role.number;
		}

		setPlayers( previousPlayers => [ ...previousPlayers.map( player => {
			return {
				...player,
				role: getPlayerRole( player.name )
			}
		} )  ] );
		
	}
	function getRandomNumber() {
		return Math.floor(Math.random() * players.length);
	}

	function onRoleNumberChange(selectedRole, number) {
		setRoles(previousRoles => {
			const selectedRoleIndex = previousRoles.findIndex(role => role.name === selectedRole);
			const roles = [...previousRoles];
			roles[selectedRoleIndex].number = parseInt(number);
			return roles;
		})
	}

	function getPlayerRole( playerName ){
		for( let role of Object.keys( groups.current ) ){
			 if( groups.current[role].map( player => player.name ).indexOf( playerName ) > -1 ){
				 return role;
			 }
		}
 
	 }

	return (
		<div className="App">
			<h1>Mafia BBL</h1>
			<ul className='flex no-list-style app-content'>
				<li><Players players={players} onAddNewPlayer={addNewPlayer} /></li>
				<li><MafiaSetup players={players}  onAssignRoles={getMafiaSetup} /></li>
				<li><Roles roles={roles} onRoleNumberChange={onRoleNumberChange} /> </li>
			</ul>
		</div>
	);
}

export default App;
