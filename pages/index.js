import React, {useState} from "react"
import Nav from "../components/Nav"

export default function Home() {

  const [page, setPage] = useState("home")

  const pageStyle = {
    backgroundColor: "#ffcdd2"
  }
  return (
    <div>
      <img src="./bnc" alt="" style={{position: "absolute", left: 0, top: 0}}/>
      <img src="./childCare.jpg" alt="" style={{width: "100%"}}/>

      <Nav setPage={setPage} />

      {page == "home" ?
        <h1> home</h1>
        :
        null
      }

      {page == "contact" ?
        <h1> contact </h1>
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
        <h1> services</h1>
        :
        null
      }
      {page == "nannies" ?
        <h1> nannies </h1>
        :
        null
      }

      
    </div>
  )
}
