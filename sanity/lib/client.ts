import { createClient, QueryOptions, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
import { token } from "./token";
import { draftMode } from 'next/headers';
import { cache } from 'react';


export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const isDraftMode = cache(async () => {
  try {
    const draft = await draftMode();
    return draft.isEnabled;
  } catch (error) {
    console.log(error);
    return false;
  }
});

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  const draftModeEnabled = await isDraftMode();

  if (draftModeEnabled && !token) {
    throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
  }

  const queryOptions: QueryOptions = {};
  let maybeRevalidate = revalidate;

  if (draftModeEnabled) {
    queryOptions.token = token;
    queryOptions.perspective = "previewDrafts";
    queryOptions.stega = true;

    maybeRevalidate = 0; // Do not cache in Draft Mode
  } else if (tags.length) {
    maybeRevalidate = false; // Cache indefinitely if tags supplied
  }

  return client.fetch(query, params, {
    ...queryOptions,
    next: {
      revalidate: maybeRevalidate,
      tags,
    },
  });
}