import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Social</Link>
          </li>
          <li>
            <Link to="/Warehaose">Warehaose</Link>
          </li>
          <li>
            <Link to="/Marketplace">MarketPlace</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
