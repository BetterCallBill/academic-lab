import { defineCollection } from 'astro:content';

const teamCollection = defineCollection({ type: 'content' });
const publicationsCollection = defineCollection({ type: 'content' });
const researchCollection = defineCollection({ type: 'content' });
const newsCollection = defineCollection({ type: 'content' });

export const collections = {
  team: teamCollection,
  publications: publicationsCollection,
  research: researchCollection,
  news: newsCollection,
};
