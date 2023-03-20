import React, { FC, useState } from "react";

const NewPost: FC<{createPost: (arg1: string, arg2: string) => void}> = ({createPost}) => {
    const [header, setHeader] = useState('')
    const [text, setText] = useState('')

    return (
        <div>
            <input type="text" placeholder="Заголовок" onChange={(e) => setHeader(e.target.value)} value={header}></input>
            <input type="text" placeholder="Текст поста" onChange={(e) => setText(e.target.value)} value={text}></input>
            <button onClick={() => createPost(header, text)}>Создать пост</button>
        </div>
    )
}

export default NewPost