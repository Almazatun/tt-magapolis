import React, {ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps, useState} from 'react';
import style from './Button.module.css'

type  ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    { title: string } & { backgroundAfter: string, borderColor: string }

export const Button: React.FC<ButtonPropsType> = ({title, ...props}) => {

    const [isShown, setIsShown] = useState(false)

    let background: CSSProperties = {
        transition: "all .3s ease-out",
        backgroundColor: !isShown ? '' : props.backgroundAfter,
        border: `2px solid ${props.borderColor}`,
        color: !isShown ? '' : 'white'
    }

    return (
        <button className={style.btn}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                style={background} {...props}>
            {title}
        </button>
    )
}