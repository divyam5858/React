import PropTypes, { string } from "prop-types"

function Usergreet({isloggedin =false, username="Guest"}){
  
        // if(isloggedin){
        //     return <h2>Welcome {username}</h2>
        // }

        // return (isloggedin? <h2>Welcome {username}</h2>: <h2>please loggin to continue</h2> )
        const welcome = <h2>Welcome {username}</h2>
        const propmt = <h2>please loggin to continue</h2>

        return (isloggedin? welcome:propmt)

}

Usergreet.prototypes = {
isloggedin: PropTypes.bool,
username:string
}


export default Usergreet