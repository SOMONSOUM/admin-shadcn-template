import "server-only";

import { ApolloClient, from, InMemoryCache } from "@apollo/client";
import type { ApolloLink, NormalizedCacheObject } from "@apollo/client";
import { mainServerLink } from "./links";
import { setContext } from "@apollo/client/link/context";
import { sha256 } from "@noble/hashes/sha256";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { getCookie } from "@/utils";

const authLink = setContext(async (_, { headers }) => {
  const token = await getCookie();

  return {
    headers: {
      authorization: token ? `Bearer ${token}` : "",
      ...headers,
    },
  };
});

export const linkChain = createPersistedQueryLink({
  sha256: (query) =>
    Buffer.from(sha256(new TextEncoder().encode(query))).toString("hex"),
  useGETForHashedQueries: true,
});

const createClient = (
  link: ApolloLink
): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, linkChain, link]),
    ssrMode: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
      mutate: {
        errorPolicy: "all",
      },
    },
  });
};

export const fetch = createClient(mainServerLink);
