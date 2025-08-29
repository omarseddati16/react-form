import React from 'react'
import articles from '../data/articles'

const Main = () => {
  return (
    <div>
      <ul>
        {articles.map((newArticle, index) => (
          <li className='list-unstyled pt-2' key={index}>
            <h2>{newArticle.title}</h2>
            <p>{newArticle.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Main