import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';
import * as prismic from '@prismicio/client';

export async function load({ fetch, request, url }) {
  const client = createClient({ fetch, request });
  const document = await client.getSingle('blog_list');

  // filter by tags
  const filters = [];
  //filters[0] = prismic.filter.at('document.tags', ['Street','Night'])

  // set the orderings keep this in case we allow user to choose
  // const orderings = {}
  // orderings['field'] = 'document.first_publication_date'
  // orderings['direction'] = 'desc'

  // pagination todo: pageSize can be a setting
  let pageSize = 2;

  let pageNum = url.searchParams.get('page');
  if (!pageNum) {
    pageNum = 1;
  }

  const blogs = await client.getByType('blog', {
    filters: filters,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    pageSize: pageSize,
    page: pageNum,
  });

  return {
    documents: {
      document,
      blogs,
    },
  };

  error(404, 'Not found');
}
