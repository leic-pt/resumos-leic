import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import AttachmentIcon from "@material-ui/icons/AttachFileRounded";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import TopBar from "./TopBar";

export default function PageLayout({ children, pageContext, path }) {
  const { frontmatter } = pageContext;
  return (
    <div>
      <TopBar backLink={`/${path.split("/").slice(1, -2).join("/")}`}></TopBar>
      <Container>
        {frontmatter.attachments && (
          <div>
            <Typography variant="h5" component="h3">
              Recursos
            </Typography>
            <List dense>
              {frontmatter.attachments.map(({ title, url }) => {
                const itemProps = url.startsWith("/")
                  ? { component: GatsbyLink, to: url, replace: true }
                  : {
                      component: "a",
                      href: url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    };
                return (
                  <ListItem key={url} button {...itemProps}>
                    <ListItemIcon>
                      <AttachmentIcon />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        )}
        {children}
      </Container>
    </div>
  );
}
