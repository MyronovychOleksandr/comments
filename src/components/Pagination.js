import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Item = styled.li`
  list-style: none;
  margin-right: 5px;
`;

const Pagination = ({ last_page, onLoadNew }) => {
  const pageNumbers = [];
  for (let i = 1; i <= last_page; i++) {
    pageNumbers.push(i);
  }
  return (
    <List>
      {pageNumbers.map((number) => (
        <Item key={number}>
          <a
            id={number}
            href="!#"
            onClick={(e) => onLoadNew(Number(e.target.id))}
          >
            {number}
          </a>
        </Item>
      ))}
    </List>
  );
};

export default Pagination;
