import React, { useRef } from "react";
import Header from "./Header";
import Profile from "./Profile";

//Import the provider
import { UserProvider } from "../context/user";
import { ThemeProvider } from "../context/theme";

function App() {

  const mainRef = useRef()
  
  return (
    <main ref={mainRef} >
      <ThemeProvider>
        <UserProvider>
            <Header mainRef={mainRef} />
            <Profile />
        </UserProvider>
      </ThemeProvider>
    </main>
  );
}

export default App;
