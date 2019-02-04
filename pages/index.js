import "antd/dist/antd.css";

import DefaultPageLayout from "./DefaultPageLayout";

export default () => (
  <DefaultPageLayout
    HeaderContent={<h1>User Management Demo</h1>}
    PageContent={<h4>For more information, see About. For user list, check "User Statuses". Login for management</h4>}
  />
);
