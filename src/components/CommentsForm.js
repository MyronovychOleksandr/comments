import React, { Component } from "react";
import fetch from "../services/fetchComments";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const initialState = {
  name: "",
  text: "",
};

export default class CommentsForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const comment = { ...this.state };
    fetch.addComments(comment);
    this.setState({ ...initialState });
  };

  render() {
    return (
      <Form onSubmit={this.onHandleSubmit}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onHandleChange}
          />
        </Label>

        <Label>
          Comment
          <textarea
            name="text"
            value={this.state.text}
            onChange={this.onHandleChange}
          ></textarea>
        </Label>

        <button type="submit">Add comment</button>
      </Form>
    );
  }
}
