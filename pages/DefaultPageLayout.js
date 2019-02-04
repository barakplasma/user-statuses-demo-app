import "antd/dist/antd.css";
import { TopMenu } from "./topMenu";

const center = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

export default ({ HeaderContent, PageContent }) => (
  <div className="Layout">
    <div className="Header" style={center}>
      {HeaderContent}
      <TopMenu />
    </div>
    <div className="Content" style={center}>
      {PageContent}
    </div>
    <div className="Footer" style={{ ...center, justifyContent: "flex-end" }}>
      <h4>By Michael Salaverry</h4>
    </div>
  </div>
);
