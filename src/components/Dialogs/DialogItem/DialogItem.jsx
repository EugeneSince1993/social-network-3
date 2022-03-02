import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>
        <img src={"/img/" + props.avatarName} alt=""/>
        <div className={s.dialogName}>{props.name}</div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
