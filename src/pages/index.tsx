import { usePageQuery } from "../generated/graphql"

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: 'about'
    }
  })

  return (
    <div>
      <h1>{data?.page.title}</h1>
    </div>
  )
}
