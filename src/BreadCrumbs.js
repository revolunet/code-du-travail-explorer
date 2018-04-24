import React from "react";
import styled from "styled-components";

const StyledBread = styled.span`
  cursor: pointer;
  text-decoration: ${props => props.underline && "underline"};
`;

const BreadCrumbEntry = ({ title, onClick, isLast, separator = " > " }) => (
  <span>
    <StyledBread underline={!isLast} onClick={onClick} title={title}>
      {title}
    </StyledBread>
    {!isLast && separator}
  </span>
);

const BreadCrumbs = ({ entries, onClick, style }) => {
  const allEntries =
    (entries.length && [
      {
        title: "Accueil"
      },
      ...entries
    ]) ||
    [];
  return (
    <div style={style}>
      {allEntries.map((entry, i) => (
        <BreadCrumbEntry
          key={entry.title}
          onClick={() => onClick(entry, i)}
          isLast={i === allEntries.length - 1}
          {...entry}
        />
      ))}
    </div>
  );
};

export default BreadCrumbs;
