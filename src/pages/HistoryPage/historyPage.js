import React, { useState, useEffect, useContext } from "react";
import img from './img.jpg';
import { UserContext } from "../../UserContext"

export default function AboutPage() {

  const [user, setUser] = useContext(UserContext);
  const [historyUser, setHistoryUser] = useState([]);

  useEffect(() => {
    setHistoryUser([...historyUser, user])
  }, [user])

  console.log(historyUser)

  return (
    <section className='container justify-content-center mx-auto'>
      <h1 className='display-3 text-center my-4'>HISTORY PAGE</h1>
      <h1 className='display-3 text-center my-4'>COMING SOON...</h1>
      <div className='text-center'>
      <img className='img-responsive w-25' alt="git hut logo"src={img}></img>
      </div>
    </section>
  )
}
