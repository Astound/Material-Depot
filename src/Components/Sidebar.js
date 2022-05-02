import React, { Component } from 'react'
import './App.css';
export class Sidebar extends Component {
  render() {
    return (
        <div className='sidebar'>
        <ul className="list-group">
    <li className="list-group-item d-flex align-items-center">
        <div className='image-parent mx-1'>
        <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-1'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H12.5V15.5H0.5V0.5ZM27.5 0.5H15.5V9.5H27.5V0.5ZM9.5 12.5V3.5H3.5V12.5H9.5ZM24.5 6.5V3.5H18.5V6.5H24.5ZM24.5 15.5V24.5H18.5V15.5H24.5ZM9.5 24.5V21.5H3.5V24.5H9.5ZM27.5 12.5H15.5V27.5H27.5V12.5ZM0.5 18.5H12.5V27.5H0.5V18.5Z" fill="#828282"/>
</svg>

        </div>
         <span className='mx-1'>Projects</span>
    </li>
    <li className="list-group-item d-flex align-items-center">
    <div className='image-parent mx-1'>
    <svg width="24" height="19" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-1'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 6.5H21V3.5L18 0.5H12L9 3.5V6.5H3C1.35 6.5 0 7.85 0 9.5V17C0 18.125 0.6 19.07 1.5 19.595V24.5C1.5 26.165 2.835 27.5 4.5 27.5H25.5C27.165 27.5 28.5 26.165 28.5 24.5V19.58C29.385 19.055 30 18.095 30 17V9.5C30 7.85 28.65 6.5 27 6.5ZM12 3.5H18V6.5H12V3.5ZM27 9.5H3V17H10.5V12.5H19.5V17H27V9.5ZM16.5 18.5H13.5V15.5H16.5V18.5ZM4.5 24.5H25.5V20H19.5V21.5H10.5V20H4.5V24.5Z" fill="black" fill-opacity="0.54"/>
</svg>
        </div>
        <span>Classrooms</span>
        </li>
        <li className="list-group-item active d-flex align-items-center" style={{color:'red'}}>
        <div className='image-parent mx-1' style={{color:'red'}}>
        <svg width="16" height="22" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-1'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 6.5L14 0.5L27.5 6.5V15.5C27.5 23.825 21.74 31.61 14 33.5C6.26 31.61 0.5 23.825 0.5 15.5V6.5ZM24.5 16.985H14V3.785L3.5 8.45V17H14V30.395C19.58 28.67 23.705 23.165 24.5 16.985Z" fill="#FE0D0D"/>
</svg>

        </div>
         <span className='mx-2'>
         <b>Permissions</b>
         </span>
    </li>
    </ul>
</div>
    )
  }
}
export default Sidebar;