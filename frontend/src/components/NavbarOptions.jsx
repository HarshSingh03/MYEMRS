import React from "react";

function NavbarOptions({user="loggedOut"}) {
  function returnOptions(user){
    if (user === 'admin'){
      return options.admin;
    }
    else if (user === 'loggedIn'){
      return options.loggedIn;
    }
    else
      return options.loggedOut;
  }
  const options = {
    loggedIn: [
      {
        name: "All Patients",
        element: <></>,
      },
      {
        name: "Search Patients",
        element: <></>,
      },
      {
        name: "Create Patients",
        element: <></>,
      },
      {
        name: "Delete Patients",
        element: <></>,
      },
    ],
    loggedOut:[
      {
        name: "All Patients",
        element: <></>,
      },
      {
        name: "Search Patients",
        element: <></>,
      },
    ],
    admin:[
      {
        name:'All Users',
        patients:<></>
      },
      {
        name:'Find User',
        patients:<></>
      },
      {
        name:'Create User',
        patients:<></>
      },
      {
        name:'Update User',
        patients:<></>
      },
      {
        name:'Delete User',
        patients:<></>
      }
    ]
  };
  return <div className="flex flex-row gap-1.5">
    {
      returnOptions(user).map(option => <div key={Math.random()} >
          {option.name}
        </div> )
    }
  </div>;
}

export default NavbarOptions;
