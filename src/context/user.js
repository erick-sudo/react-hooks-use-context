import React, { useState } from "react";

const UserContext = React.createContext();

// const currentUser = {
//     name: "Duane",
//     interests: ["Coding", "Biking", "Words ending in 'ing'"],
//   };

function UserProvider({children}) {
    const [user, setUser] = useState(null)
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

export { UserContext, UserProvider }