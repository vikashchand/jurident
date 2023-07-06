import React from "react";
class EditProfile extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <b> PROFILE</b>
        </h1>
        <div class="options">
          <center>
            {" "}
            <img
              src="assets/avatar.jpeg"
              width="184"
              height="184"
              alt="NOT FOUND"
            />
            <h2>Dante Lucca</h2>
            Business Lawer
          </center>
          <hr />
          <a href="#">Language</a>
          <br />
          <br />
          <a href="#">Terms and Conditions</a>
          <br />
          <br />
          <a href="#">About Us</a>
          <br />
          <br />
          <a href="#">Dark Mode</a>
          <label class="switch1">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
          <br />
          <br />
          <a href="#">Notifications</a>
          <label class="switch2">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
          <br />
          <br />
          <a href="#">Contact Us</a>
          <br />
          <br />
          <a href="#">Support Chat</a>
          <br />
          <br />
          <a href="#">FAQ</a>
          <br />
          <br />
          <a href="#">Feedback Page</a>
          <br />
          <hr />
          <div class="logout">
            <center>
              <button class="button">Logout</button>
            </center>
          </div>
        </div>
        <div class="editprofile">
          Home- <b>Edit Profile</b>
          <br />
          <br />
          LAWYER NAME
          <br />
          <input type="text" />
          <br />
          Hint
          <br />
          <br />
          LAWYER ID
          <br />
          <input type="text" />
          <br />
          Hint
          <br />
          <br />
          LAW DEGREE
          <br />
          <select name="degree">
            <option value="Bsc LLB">Bsc LLB</option>
            <option value="BBA LLB">BBA LLB</option>
            <option value="B Com LLB">B Com LLB</option>
            <option value="BA LLB">BA LLB</option>
          </select>
          <br />
          <br />
          EMAIL
          <br />
          <input type="text" />
          <br />
          Hint
          <br />
          <br />
          PHONE NUMBER
          <br />
          <input type="text" />
          <br />
          Hint
        </div>
        <div class="buttons">
          <br />
          <button class="button1">SAVE PROFILE</button>
          <br />
          <br />
          <button class="button2">DISCARD CHANGES</button>
          <br />
          <br />
          <button class="button3">CHANGE PAASWORD</button>
        </div>
      </div>
    );
  }
}
export default EditProfile;
