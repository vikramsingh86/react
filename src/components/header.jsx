import React, { Component } from 'react';
class Header extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <header>

<div id="sticker" class="header-area">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12">

        <nav class="navbar navbar-default">

          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

            <a class="navbar-brand page-scroll sticky-logo" href="index.html">
              <h1><span>e</span>Business</h1>

            </a>
          </div>

          <div class="collapse navbar-collapse main-menu bs-example-navbar-collapse-1" id="navbar-example">
            <ul class="nav navbar-nav navbar-right">
              <li class="active">
                <a class="page-scroll" href="#home">Home</a>
              </li>
              <li>
                <a class="page-scroll" href="#about">About</a>
              </li>
              <li>
                <a class="page-scroll" href="#services">Services</a>
              </li>              
            </ul>
          </div>

        </nav>
    
      </div>
    </div>
  </div>
</div>

</header>
    </React.Fragment>
        );
    }
}
 
export default Header;