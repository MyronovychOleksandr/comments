import React, { Component } from "react";
import Pagination from "./Pagination";
import fetch from "../services/fetchComments";
import styled from "styled-components";

const Item = styled.li`
  list-style: none;
`;

export default class CommentsList extends Component {
  state = {
    comments: [],
    page: 1,
    last_page: 1,
  };

  componentDidMount() {
    fetch
      .fetchComments()
      .then((data) =>
        this.setState({ comments: [...data.data], last_page: data.last_page })
      );
  }

  onHandleClick = async (e) => {
    await this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      };
    });
    this.onLoadNewComments(this.state.page);
  };

  onLoadNewComments = (page) => {
    fetch.fetchComments(page).then((data) =>
      this.setState((prevState) => {
        return {
          comments: [...prevState.comments, ...data.data],
        };
      })
    );
  };

  onLoadCommentsWithPagination = (page) => {
    fetch.fetchComments(page).then((data) =>
      this.setState({
        comments: [...data.data],
        page,
      })
    );
  };

  render() {
    const { comments, page, last_page } = this.state;
    return (
      <>
        <ul>
          {comments.map((comment) => (
            <Item key={comment.id}>
              <h3>Name: {comment.name}</h3>
              <p>Text: {comment.text}</p>
            </Item>
          ))}
        </ul>
        {Number(page) !== last_page && (
          <button onClick={this.onHandleClick}>Load more</button>
        )}
        <Pagination
          last_page={last_page}
          onLoadNew={this.onLoadCommentsWithPagination}
        />
      </>
    );
  }
}
