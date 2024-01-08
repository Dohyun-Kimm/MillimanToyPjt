import React, { useState } from "react";
import { Collapse, CollapseProps, ConfigProvider } from "antd";
import Treeview from "./Treeview";
import { Resizable } from "re-resizable";
import "./Sidebar.css";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
type Props = {};

export default function Sidebar() {
  const [clpsHeight, setClpsHeight] = useState<number>(277);
  const handleHeight = (e: { height: number }) => {
    setClpsHeight((prev) => prev + e.height);
    console.log(clpsHeight);
  };
  const cat1: CollapseProps["items"] = [
    {
      key: "1",
      label: "Category1",
      children: (
        <Resizable
          className="resize__boundary"
          enable={{ bottom: true }}
          onResizeStop={(e, direction, ref, d) => {
            handleHeight(d);
          }}
        >
          <CollapsePanel
            key={"1"}
            header={<Treeview />}
            style={{
              height: clpsHeight,
              overflow: "auto",
            }}
          ></CollapsePanel>
        </Resizable>
      ),
    },
    {
      key: "2",
      label: "Category2",
      children: <Treeview />,
      className: "cat2",
    },
  ];
  // const cat2: CollapseProps["items"] = [
  //   {
  //     key: "2",
  //     label: "Category2",
  //     children: <Treeview />,
  //     className: "cat2",
  //   },
  // ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            paddingSM: 3,
            marginSM: 4,
          },
        },
        token: {
          borderRadius: 0,
          colorBorder: "none",
          fontSize: 10,
          fontFamily: "inter",
        },
      }}
    >
      <Collapse
        className="collapse"
        size="small"
        items={cat1}
        defaultActiveKey={[]}
      />
      {/*  */}
      {/* <Collapse size="small" items={cat2} defaultActiveKey={[]} /> */}
    </ConfigProvider>
  );
}
