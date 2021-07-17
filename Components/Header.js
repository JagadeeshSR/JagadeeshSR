function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="/">
              Tasker
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <h1>Task Tracker</h1>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Header