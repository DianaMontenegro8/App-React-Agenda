import React from "react";
import Agenda from "./Agenda";
import CadastrarContacto from "./CadastrarContacto";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contactos: [],
      version: 0
    };

    this.fetchContactos = this.fetchContactos.bind(this);
  }

  fetchContactos() {
    fetch("http://localhost:3050/contactos")
      .then((response) => response.json())
      .then((contactos) =>
        this.setState({ contactos: contactos, version: this.state.version + 1 })
      );
  }

  componentDidMount() {
    this.fetchContactos();
  }

  render() {
    return (
      <div className="container">
        <CadastrarContacto cadastrarContactoCallback={this.fetchContactos} />
        <p> </p>
        <Agenda
          contactos={this.state.contactos}
          fetchContactosCallback={this.fetchContactos}
        />
      </div>
    );
  }
}