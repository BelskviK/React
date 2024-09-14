import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function FillExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="longer-tab" title="ნაშთი"></Tab>
      <Tab eventKey="home" title="მიღებული"></Tab>
      <Tab eventKey="profile" title="გაცემული"></Tab>
      <Tab eventKey="contact" title="Contact" disabled></Tab>
    </Tabs>
  );
}

export default FillExample;
