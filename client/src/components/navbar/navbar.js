import React from "react";

function Navbar(props) {
  return (
    <nav className="main-navbar">
    <section>
      <div>
        <img className="logo" src="/logo.png" alt=""/>
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="fa fa-lg fa-search"></i></button>
          <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>
      </div>
      <div>left</div>
    </section>

    <section>
      <div>right</div>
      <div>left</div>
    </section>
  </nav>
  );
}

export default Navbar;
