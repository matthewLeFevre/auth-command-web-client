import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProjectModal from "./AddProjectModal";

export default function Applications({ apps }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='app__list'>
      {apps.map(app => (
        <Application key={app.id} app={app} />
      ))}
      <div className='app__btn' onClick={() => setToggle(true)}>
        Add Application
      </div>
      {toggle ? <AddProjectModal closeModal={() => setToggle(false)} /> : null}
    </div>
  );
}

const Application = ({ app }) => {
  return (
    <Link to={`/details/${app.id}`} className='app'>
      <div className='app__name'>{app.name}</div>
      <div className='app__stats'>
        <div className={`app__stat ${app.status}`}>{app.status}</div>
      </div>
    </Link>
  );
};
