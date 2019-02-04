import React from "react";

import { Table, Divider, Tag, Button } from "antd";
import "antd/dist/antd.css";
import DefaultPageLayout from "../DefaultPageLayout";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Statuses",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.toUpperCase() === "OUT OF OFFICE" ? "red" : "green";
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">Edit {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    )
  }
];

const UserStatusesTable = ({data}) => {
  return (<div>
      <Table columns={columns} dataSource={data} />
      <Button>Add User</Button>
    </div>)
}

UserStatusesTable.getInitialProps = async ({ req }) => {
  const users = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["out of office", "sick"]
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["in office"]
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["in office", "in a meeting"]
    }
  ];
  const userProp = {users}
  console.log(userProp);
  return userProp;
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default () => (
  <DefaultPageLayout
    HeaderContent={<h1>User Statuses</h1>}
    PageContent={<UserStatusesTable />}
  />
);
