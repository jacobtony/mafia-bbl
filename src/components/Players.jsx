export default function Players( { players, onAddNewPlayer } ){

    


    return (
        <>
            <h2> PLAYERS </h2>
            
            { players.map(player => {

                return <h5 key={ player.name }>
                    { player.displayName }
                </h5>
                
            }) }
            <input className="playerInput" placeholder="Player Name" name="newPlayer" onBlur={ onAddNewPlayer }/> 
        
        </>
        
    )
}