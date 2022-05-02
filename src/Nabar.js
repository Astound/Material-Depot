import React, { Component } from 'react'
import './Components/App.css';
export class Nabar extends Component {
  render() {
    return (
        <div className='main'>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" >
          <a class="nav-link" href="#">
          <div style={{color:"red"}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-2'>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.330078 0.330078V4.57508C10.8751 4.57508 19.4251 13.1251 19.4251 23.6701H23.6701C23.6701 10.7851 13.2151 0.330078 0.330078 0.330078ZM3.60008 17.1302C1.79411 17.1302 0.330078 18.5942 0.330078 20.4002C0.330078 22.2061 1.79411 23.6702 3.60008 23.6702C5.40605 23.6702 6.87008 22.2061 6.87008 20.4002C6.87008 18.5942 5.40605 17.1302 3.60008 17.1302ZM0.330078 13.0652V8.82016C8.53508 8.82016 15.1801 15.4652 15.1801 23.6702H10.9351C10.9351 17.8202 6.18008 13.0652 0.330078 13.0652Z" fill="#FE0D0D"/>
  </svg>
  
          
              <b>Permissions</b>
              </div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
          <svg width="24" height="18" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-2'>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 0.25V19.75H25.75V0.25H0.25ZM15.25 3.25V8.5H10.75V3.25H15.25ZM7.75 3.25H3.25V8.5H7.75V3.25ZM3.25 16.75V11.5H7.75V16.75H3.25ZM10.75 11.5V16.75H15.25V11.5H10.75ZM22.75 16.75H18.25V11.5H22.75V16.75ZM18.25 3.25V8.5H22.75V3.25H18.25Z" fill="#CFD3DA"/>
  </svg>
  
              Approval Matrix
          </a>
        </li>
      </ul>
    </div>
    <div>
    <svg width="24" height="17" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-2'>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 12H5C5 5.37 10.37 0 17 0C19.355 0 21.545 0.690001 23.39 1.86L21.2 4.05C19.955 3.375 18.515 3 17 3C12.035 3 8 7.035 8 12H12.5L6.5 18L0.5 12ZM17 21C21.965 21 26 16.965 26 12H21.5L27.5 6L33.5 12H29C29 18.63 23.63 24 17 24C14.645 24 12.455 23.31 10.61 22.14L12.8 19.95C14.045 20.625 15.485 21 17 21Z" fill="black" fill-opacity="0.54"/>
  </svg>
  
      Last synced 15 mins ago
    </div>
  
  </nav>
      </div>
    )
  }
}
export default Nabar;