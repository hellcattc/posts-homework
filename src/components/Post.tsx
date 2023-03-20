import React, { FC } from 'react'

const Post: FC<{header: String, text: String, deleteSelf: () => void}> = ({header, text, deleteSelf}) => {
  return (
    <div>
        <p>{header}</p>
        <p>{text}</p>
        <button onClick={() => deleteSelf()}>Удалить</button>
    </div>
  )
}

export default Post