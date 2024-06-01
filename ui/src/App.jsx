import React from "react"
import VideoCall from "./components/video-call/index"
import LoginScreen from "./components/login-screen/index"
import { ContextProvider } from "./socket-context"
import Navigation from "./components/navigation/index"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navigation />
      <div>
        <Switch>
          <Route path="/" exact>
            <LoginScreen />
          </Route>
          <Route path="/call">
            <ContextProvider>
              <VideoCall />
            </ContextProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
