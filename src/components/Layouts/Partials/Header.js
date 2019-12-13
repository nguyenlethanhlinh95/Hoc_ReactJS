import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Header</h1>
              <nav className="navbar navbar-expand navbar-light bg-light">
                  <div className="nav navbar-nav">
                      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                      <a className="nav-item nav-link" href="#">Home</a>
                  </div>
              </nav>
            </div>
          </div>
            
        </div>
    );
  }
}

export default Header;

