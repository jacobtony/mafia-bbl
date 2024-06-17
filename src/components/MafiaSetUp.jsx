
function MafiaSetup( { players, onAssignRoles } ) {
    debugger;
    
    
    return ( <>
        { players.map(player => <h4 key={player.name}> { player.displayName } - { player.role }   </h4> ) }
        <button onClick={ onAssignRoles }> Assign Roles</button>
    </>);
}

export default MafiaSetup;