import { Menu, Avatar } from "antd";
import "antd/dist/antd.css";

import Link from "next/link";

export const TopMenu = (props) => (
    <Menu mode="horizontal">
      <Menu.Item key="Home">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link href="/about">
          <a>About</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="user-statuses">
        <Link href="/user-statuses">
          <a>User Statuses</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link href="/login">
          <a><Avatar>Login</Avatar></a>
        </Link>
      </Menu.Item>
    </Menu>
)