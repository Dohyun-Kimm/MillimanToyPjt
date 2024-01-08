import React from "react";
import { TreeView, TreeItem } from "@mui/x-tree-view";
import type {} from "@mui/x-tree-view/themeAugmentation";
import "./Treeview.css";
import { ThemeProvider, createTheme } from "@mui/material";

export default function () {
  const files: number[] = Array.from({ length: 10 }, (_, index) => index + 1);
  const theme = createTheme({
    components: {
      MuiTreeItem: {
        styleOverrides: {
          label: {
            fontSize: "0.625rem",
            fontFamily: "inter",
          },
        },
      },
    },
  });

  return (
    <div className="treeview">
      <ThemeProvider theme={theme}>
        <TreeView defaultCollapseIcon={<></>} defaultExpandIcon={<></>}>
          <TreeItem key={1} nodeId={`element`} label={`Folder1`}>
            {files.map((el) => (
              <TreeItem key={el} nodeId={`${el}`} label={`File${el}`} />
            ))}
          </TreeItem>
        </TreeView>

        <TreeView defaultCollapseIcon={<></>} defaultExpandIcon={<></>}>
          <TreeItem key={1} nodeId={`element`} label={`Folder2`}>
            {files.map((el) => (
              <TreeItem key={el} nodeId={`${el}`} label={`File${el}`} />
            ))}
          </TreeItem>
        </TreeView>
      </ThemeProvider>
    </div>
  );
}
