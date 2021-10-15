import useSWR from 'swr'

import Page from '@theorylabs/page-layout'
import Person from '@theorylabs/person-component'


const fetcher = (url) => fetch(url).then((res) => res.json())



export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
    <Page />
    <ul>
      {data.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>
    </>
  )
}
