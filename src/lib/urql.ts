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
  url: 'Content API do graphCMS',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };