import React, { Component } from 'react'

export  class Navbarhead extends Component {
  render() {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div className='container mr-auto'>
      <div>
  <span className="iconn">
              <svg width="30" height="31" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-2'>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40.5C31.0457 40.5 40 31.5457 40 20.5C40 9.45431 31.0457 0.5 20 0.5C8.9543 0.5 0 9.45431 0 20.5C0 31.5457 8.9543 40.5 20 40.5Z" fill="url(#paint0_linear_1_52)"/>
              <defs>
              <linearGradient id="paint0_linear_1_52" x1="-0.0940166" y1="33.2676" x2="33.7193" y2="-3.92347" gradientUnits="userSpaceOnUse">
              <stop offset="0.276042" stop-color="#FF0000"/>
              <stop offset="1" stop-color="#7329C6"/>
              </linearGradient>
              </defs>
              </svg>
      </span>
                            <span className="textico2 mx-2">
                              <b>ClassRoom
                              <span>
                                <br />
                                Manager
                              </span>
                              </b>
                            </span>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
            <span className='iconn'>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="18" cy="18" r="18" fill="#C5CEE0"/>
  </svg>
            </span>
              <span className='textico2 my-2 mx-1'>
              <b>Kishore</b>
              </span>
          
        
        <li class="nav-item">
          <a class="nav-link" href="#">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell mx-1" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
              </svg>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle mx-1" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg>
          </a>
        </li>
      </ul>
    </div>
  </nav>
      </div>
    )
  }
}
export default Navbarhead
