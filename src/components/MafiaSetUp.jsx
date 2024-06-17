import { useRef, useState } from "react";

function MafiaSetup( { players, roles } ) {

    // let mafiaSetup = useRef('');
    const [ mafiaSetUpCurrent, setMafiaSetUpCurrent ] = useState(0)

    const groups = useRef({})

    function getMafiaSetup(){
		let shuffledNames = [];
		let i=0;
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

		
		//mafiaSetup.current = ''; 
		for (let role of roles) {
			
			groups.current[role.name] = shuffledNames.slice(j, j + role.number);
			// mafiaSetup.current += groups[role.name].map(player => player.displayName).join(`-${role.name}\n`);
			// mafiaSetup.current += `-${role.name}\n`;
			j = j + role.number;
		}

        console.log(groups.current)
        setMafiaSetUpCurrent( previousValue => previousValue + 1 )
		// console.log(mafiaSetup.current)
	}

    function getPlayerRole( playerName ){
       for( let role of Object.keys( groups.current ) ){
            if( groups.current[role].map( player => player.name ).indexOf( playerName ) > -1 ){
                return role;
            }
       }

    }
    function getRandomNumber() {
		return Math.floor(Math.random() * players.length);
	}
    return ( <>
        { players.map(player => <h4> { player.displayName } - { getPlayerRole( player.name ) }  </h4> ) }
        <button onClick={ getMafiaSetup }> Assign Roles</button>
    </>);
}

export default MafiaSetup;