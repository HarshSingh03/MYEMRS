import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import { options } from '../content/pageOptionsArray.jsx'
import { useContext } from 'react';

function PatientsPage() {
  const [content, setContent] = useState(0);
  const display = options["loggedOut"];

  return (<>
    <Navbar user="loggedOut" setContent={setContent} />
    <div>


    </div>
    <div>PatientsPage</div>
  </>
  )
}

export default PatientsPage