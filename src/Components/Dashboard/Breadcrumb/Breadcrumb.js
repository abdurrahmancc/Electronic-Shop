import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ crumbs }) => {
  const isLast = (index) => index === crumbs.length - 1;

  return (
    <ul>
      {crumbs.map((crumb, ci) => {
        const disabled = isLast(ci) ? "disabled" : "";
        return (
          <li key={ci}>
            <Link to={`/${crumb?.path}`} className={`${disabled}`}>
              {crumb?.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
