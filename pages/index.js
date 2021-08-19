import React, {useState} from "react"

import NavBar from "../components/NavBar"
import Services from "../components/Services"

export default function Home() {

  const [page, setPage] = useState("home")

  return (
    <div>
      <NavBar setPage={setPage}/>
      {page == "home" ?
        <h1> home </h1>
        :
        null
      }

      {page == "owners" ?
        <h1> owners </h1>
        :
        null
      }

      {page == "faq" ?
        <h1> faq</h1>
        :
        null
      }

      {page == "services" ?
        <Services />
        :
        null
      }


    </div>
  )
}
