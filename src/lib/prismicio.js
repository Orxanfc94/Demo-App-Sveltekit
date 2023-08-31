import * as prismic from '@prismicio/client';

const repoName = '2ten'; // Fill in your repository name
const accessToken = ''; // If your repository is private, add an access token

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
  {
    type: 'page',
    uid: 'home',
    path: '/',
  },
  {
    type: 'page',
    path: '/:uid',
  },
  {
    type: 'blog',
    path: '/blog/:uid',
  },
  {
    type: 'blog_list',
    path: '/blog',
  },
];

const createClient = ({ request, fetch } = {}) => {
  const clientOptions = {
    fetch,
    accessToken,
    routes,
  };
  const client = prismic.createClient(repoName, clientOptions);

  if (request) {
    client.enableAutoPreviewsFromReq(request);
  }

  return client;
};

export default createClient;
