import style from '@/styles/components/header.module.scss'
import { useEffect, useState } from 'react'

type Props = {
    title: string
}

export default function Header(props: Props) {

    const [state, setState] = useState({
        title: props.title
    })

    useEffect(() => {
        setState({
            ...state,
            title: props.title
        })
    }, [props])

    return (
        <>
            <header className={style.head}>
                <h1>{state.title}</h1>
            </header>
        </>
    )
}