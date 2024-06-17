export default function Roles( { roles, onRoleNumberChange } ) {


    return (
        <>
            <h2> Roles </h2>
            <ul className="roles">
            { roles.map( role => <li key={role.name}><span className="roleName">{ role.name }</span> 
                <input onChange={($event) => onRoleNumberChange( role.name, $event.target.value )} type="number" value={ role.number }/>
                </li> ) }
            </ul>
            
        </>
        
    )
}