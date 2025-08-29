import React from 'react'
import articles from '../data/articles'
import { useState } from 'react'

const Main = () => {
  const [articlesProduct, setArticlesProduct] = useState(articles)
  const [search, setSearch] = useState('')


  const handleForm = (event) => {
    event.preventDefault();
    const sanitize = search.trim();
    const newProduct = {
      title: sanitize
    }

    const copyArticles = [...articlesProduct, newProduct]
    setArticlesProduct(copyArticles)
  }


  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
        <button className='btn mt-2 btn-primary d-flex'>albero</button>
      </form>

      <div>
        <ul>
          {articlesProduct.map((newArticle, index) => (
            <li className='list-unstyled pt-2' key={index}>
              <h5>{newArticle.title}</h5>
              <p>{newArticle.description}</p>
              <button className='btn mt-2 btn-danger '
                onClick={() => {
                  setArticlesProduct(
                    articlesProduct.filter((item, i) => i !== index)
                  )
                }}
              >
                delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Main