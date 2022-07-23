import { memo } from "react";
import "../Style/header.css";
function Header() {
  return (
    <div className="heading">
      <h1>Quản Lý Công Việc:</h1>
    </div>
  );
}
export default memo(Header);
