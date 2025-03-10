import React from "react";
import { options } from "../content/pageOptionsArray.jsx";

function NavbarOptions({ user = "loggedOut", setContent }) {
  function returnOptions(user) {
    if (user === 'admin') {
      return options.admin;
    }
    else if (user === 'loggedIn') {
      return options.loggedIn;
    }
    else
      return options.loggedOut;
  }
  return <div className="flex flex-row gap-4 ">
    {
      returnOptions(user).map((option, index) => <div onClick={(index) => setContent(index)} key={index} >
        {option.name}
      </div>)
    }
  </div>;
}

export default NavbarOptions;
