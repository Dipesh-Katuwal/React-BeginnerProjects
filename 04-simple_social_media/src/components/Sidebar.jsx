let SideBar = ({SelectedTab,setSelectedTab}) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary bar"
      style={{ width: "280px" }}
    >
      {" "}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        {" "}
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>{" "}
        <span className="fs-4">Navigation</span>{" "}
      </a>{" "}
      <hr />{" "}
      <ul className="nav nav-pills flex-column mb-auto">
        {" "}
        <li className="nav-item" onClick={()=> setSelectedTab("Home")}>
          {" "}
          <a href="#" className={`nav-link ${SelectedTab=='Home' && 'active'}`} aria-current="page">
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>{" "}
        </li>{" "}
        <li onClick={()=> setSelectedTab("Create Post")}>
          {" "}
          <a href="#" className={`nav-link ${SelectedTab=='Create Post' && 'active'}`}>
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />{" "}
      <div className="dropdown">
        {" "}
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {" "}
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />{" "}
          <strong>profile</strong>{" "}
        </a>{" "}
        {" "}
      </div>{" "}
    </div>
  );
};

export default SideBar;
