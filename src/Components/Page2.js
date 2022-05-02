import React, { Component } from 'react'
import Innercomp from './Innercomp';
import Navbar2 from './Navbar2'

export class Page2 extends Component {
  constructor(){
    super();
    this.state={
      isPlus : false
    }
  }
  changeIcon(){
    console.log("State changed");
    this.setState({isPlus: !this.state.isPlus})
    console.log(this.state.isPlus);
 }
  render() {  
    return (
        <div className="main">
      <div className="page1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left mx-2"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        <span style={{ color: "red" }}>
          <b>Teachers</b>
        </span>
        <span className="mx-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil mx-5"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
        </span>

        <div className="container mx-2 my-2">
          <Navbar2 />

          <div className="my-1">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Department/Role Name</th>
                  <th scope="col">Access Level</th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Summary
                  </th>
                  <th scope="col">Last updated</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </td>
                  <td>Enrolling Students</td>
                  <td>
                    <div class="green-boxed">All Access</div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    View <span className="text-muted">|</span> Create{" "}
                    <span className="text-muted">|</span> Edit{" "}
                    <span className="text-muted">|</span> Delete
                  </td>
                  <td>1 min ago</td>
                  <td>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        style={{ backgroundColor: "#27AE60" }}
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      class="btn "
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      onClick={this.changeIcon.bind(this)}
                     >
                       {this.state.isPlus?
                       (
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM15 9H5V11H15V9Z" fill="black" fill-opacity="0.54"/>
                        </svg>
                       )
                       :(
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                        )
                       }
                    </button>
                  </td>
                  <td>Financial Details</td>
                  <td>
                    <div class="no-boxed">No Access</div>
                  </td>
                  <td style={{ textAlign: "center" }}>-</td>
                  <td>1 min ago</td>
                  <td>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr class="collapse" id="collapseExample">
                  <td>&nbsp;</td>
                  <td colSpan="5">
                    <div className="">
                      All aspects in the financial details module
                      <div className="container mx-3 my-2">
                        <Innercomp/>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </td>
                  <td>Furniture Order</td>
                  <td>
                    <div class="red-boxed">Restricted Access</div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    View <span className="text-muted">|</span> Create
                  </td>
                  <td>1 min ago</td>
                  <td>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        style={{ backgroundColor: "#27AE60" }}
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </td>
                  <td>Technological Equipment</td>
                  <td>
                    <div class="red-boxed">Restricted Access</div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    View <span className="text-muted">|</span> Create
                  </td>
                  <td>1 min ago</td>
                  <td>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        style={{ backgroundColor: "#27AE60" }}
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </td>
                  <td>Orginisational Modification</td>
                  <td>
                    <div class="green-boxed">All Access</div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    View <span className="text-muted">|</span> Create{" "}
                    <span className="text-muted">|</span> Edit{" "}
                    <span className="text-muted">|</span> Delete
                  </td>
                  <td>1 min ago</td>
                  <td>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        style={{ backgroundColor: "#27AE60" }}
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </td>
                  <td>Permissions & Access Control</td>
                  <td>
                    <div class="no-boxed">No Access</div>
                  </td>
                  <td style={{ textAlign: "center" }}>-</td>
                  <td>1 min ago</td>
                  <td>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Page2;