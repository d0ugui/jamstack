import { 
  createClient, 
  ssrExchange, 
  dedupExchange, 
  cacheExchange, 
  fetchExchange
} from 'urql';

//* Verificando se o código tá rodando no lado do client ou servidor
const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: 'https://api-sa-east-1.graphcms.com/v2/ckzqw4tz7010901wc1538000j/master',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };