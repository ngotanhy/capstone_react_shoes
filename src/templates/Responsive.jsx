import React, { useEffect, useState } from 'react'

export default function Responsive(props) {
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const setWidth = () => {
            setScreen({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.onresize = setWidth;
        return () => {
            window.removeEventListener('resize',null);
        }
    }, [])



    if (screen.width < 768 && props.componentMobile) {
        // let timeout=setTimeout(() => {window.location.reload()},0)
        // timeout;
        return [<props.componentMobile />]
    }

    return (
        <props.component />
    )
}
