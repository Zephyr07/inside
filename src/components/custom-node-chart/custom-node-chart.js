import React from "react";
import OrganizationChart from "../chart/ChartContainer";
import MyNode from "./my-node";

const CustomNodeChart = () => {
  const ds = {
    id: "n1",
    name: "Lao Lao",
    image: "https://avatars.githubusercontent.com/u/5689075?s=48&v=4",
    title: "department manager",
    phone: "696 969 699",
    ipphone: "21 300"  ,
    city: 'Yaoundé',
    children: [
      { id: "n2", name: "Bo Miao", title: "department manager", phone: 696969699, ipphone: 21300 },
      {
        id: "n3",
        name: "Su Miao",
        title: "department manager",
        children: [
          { id: "n4", name: "Tie Hua", title: "senior engineer" },
          {
            id: "n5",
            name: "Hei Hei",
            title: "senior engineer",
            children: [
              { id: "n6", name: "Dan Dan", title: "engineer" },
              { id: "n7", name: "Xiang Xiang", title: "engineer" }
            ]
          },
          { id: "n8", name: "Pang Pang", title: "senior engineer" }
        ]
      },
      { id: "n9", name: "Hong Miao", title: "department manager" },
      {
        id: "n10",
        name: "Chun Miao",
        title: "department manager",
        children: [{ id: "n11", name: "Yue Yue", title: "senior engineer" }]
      }
    ]
  };

  return <OrganizationChart datasource={ds} chartClass="myChart" NodeTemplate={MyNode}/>;
};

export default CustomNodeChart;
