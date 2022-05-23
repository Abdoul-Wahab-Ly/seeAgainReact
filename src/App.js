import "./styles.css";
import React, { Component } from "react";
import Client from "./Client";
import ClientForm from "./ClientForm";

class App extends Component {
  state = {
    clients: [
      { id: 1, nom: "Mouhamed" },
      { id: 2, nom: "Ousmane" },
      { id: 3, nom: "Cheikh Tidjan" }
    ]
  };

  handleDelete = (id) => {
    const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  };

  handleAdd = (client) => {
    const clients = [...this.state.clients];
    clients.push(client);
    this.setState({ clients });
  };

  render() {
    const title = "Liste des Clients";

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map((client) => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}
export default App;
