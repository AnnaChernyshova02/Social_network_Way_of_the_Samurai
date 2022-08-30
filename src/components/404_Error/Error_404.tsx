import React from 'react';
import {useNavigate} from "react-router-dom";
import s from "./Error_404.module.scss"

export const Error404 = () => {

  const navigate = useNavigate()

  return <div>
    <div id={s.notfound}>
      <div className={s.notfound}>
        <div className={s.notfound404}>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <button onClick={()=>{navigate('/profile')}} >Homepage</button>
      </div>
    </div>
  </div>
};