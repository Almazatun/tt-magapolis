import React from 'react';
import style from './Background.module.css'

type BackgroundPropsType = { show: boolean }

export const Background: React.FC<BackgroundPropsType> = (props) => {
    return props.show ? (
        <div className={style.Backdrop}> </div>
    ) : null;
}