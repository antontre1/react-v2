import { useState, useEffect } from 'react'

const useFetch = (url) => {

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const abortContent = new AbortController()

    setTimeout(() => {
      fetch(url, { signal: abortContent.signal })
        .then(res => {
          if(!res.ok) {
            throw Error('Could not fetch correctly the data')
          }
          return res.json()
        })
        .then((data) => {
          setIsPending(false)
          setData(data)
          setError(null)
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log("fetch aborted")
          }
          else {
            setIsPending(false)
            setError(err.message)
          }
        })
    }, 1000)

    return () => abortContent.abort()

  }, [url])

  return {data, isPending, error }

}

export default useFetch
