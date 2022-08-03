import { useState, useEffect } from 'react'

const useFetch = (url) => {

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          console.log(res)
          if(!res.ok) {
            throw Error('Could not fetch correctly the data')
          }
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setIsPending(false)
          setData(data)
          setError(null)
        })
        .catch((err) => {
          setIsPending(false)
          setError(err.message)
        })
    }, 1000);

  }, [url])

  return {data, isPending, error }

}

export default useFetch
