import Table from "react-bootstrap/Table";

function ResponsiveBreakpointsExample() {
  return (
    <div>
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Warehause</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ResponsiveBreakpointsExample;
