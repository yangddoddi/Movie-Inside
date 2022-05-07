import React from 'react'


const default ListItem = ({ title, release, poster }) => {
    return (
        <article className={styles.card}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} />
        <h4>{title}</h4>
        <span>{release}</span>
      </article>
    )
}