import "antd/dist/antd.css";

import { TopMenu } from "./topMenu";
import DefaultPageLayout from "./DefaultPageLayout";

export default () => (
  <DefaultPageLayout
    HeaderContent={<h1>About the User Management Demo</h1>}
    PageContent={
      <div>
        <h3>This demo is meant as an example CRUD app for user management.</h3>
        <h4>This app will have:</h4>
        <ul>
          <li>a login page</li>
          <li>a user list</li>
          <li>a user add/edit page</li>
          <li>
            track user statuses (in office, out of office, vacation, sick)
          </li>
        </ul>

        <h3>
          On the backend, there will be a simple server with a datastore for the
          user data.
        </h3>
      </div>
    }
  />
);
