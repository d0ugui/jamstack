import { GetServerSideProps } from "next";
import { usePageQuery, PageDocument } from "../generated/graphql";

import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Pricing } from "../components/Princing";

import { client, ssrCache } from '../lib/urql';

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: 'home'
    }
  })

  return (
    <div>
      <Hero title={data.page.title} subtitle={data.page.subtitle} />
      <Features />
      <Pricing />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PageDocument, { slug: 'home' }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}