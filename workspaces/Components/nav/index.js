import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())



const Nav = () => {
  const { data, error } = useSwr('/api/users', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <nav>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/ssg">
        <a>SSG</a>
      </Link>
      <Link href="/ssr">
        <a>SSR</a>
      </Link>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link href="/user/[id]" as={`/user/${user.id}`}>
              <a>{`User ${user.id}`}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          a {
            margin-right: 25px;
          }
        `}
      </style>
    </nav>
  )
}

export default Nav
