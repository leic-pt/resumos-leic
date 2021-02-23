import { IconButton, Toolbar } from "@material-ui/core";
import BackIcon from "@material-ui/icons/ArrowBackRounded";
import { Link as GatsbyLink } from "gatsby";
import React from "react";

export default function TopBar({ backLink }) {
  return (
    <Toolbar>
      {backLink && (
        <IconButton component={GatsbyLink} to={backLink}>
          <BackIcon />
        </IconButton>
      )}
    </Toolbar>
  );
}
