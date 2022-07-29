import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Button, 
{CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Card,
  CardHeader,
  Paper,
  Avatar
} from "@material-ui/core";
  
import { withStyles } from "@material-ui/core"
  
class App extends Component {

  state = {
    isLoggedIn: false,
    message: [],
    value: '',
    name: '',
    room: 'vacad',
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        {this.state.isLoggedIn ? : }
      </Container>
    )
  }
}
export default (App)
  