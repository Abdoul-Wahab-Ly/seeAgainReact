import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    nouveauClient: ""
  };

  handleChange = (e) => this.setState({ nouveauClient: e.currentTarget.value });

  handleSubmit = (e) => {
    e.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    this.props.onClientAdd({ id, nom });

    this.setState({ nouveauClient: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.nouveauClient}
          onChange={this.handleChange}
          type="text"
          placeholder="Ajouter un client"
        />
        <button>Confirmer</button>
      </form>
    );
  }
}
export default ClientForm;
