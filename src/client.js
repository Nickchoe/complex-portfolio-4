import { createClient } from "@sanity/client";
//import { ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
//sanityClient(config: ClientConfig): SanityClient
export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
