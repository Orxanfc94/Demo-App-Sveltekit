<script>
    export let data;
    import { SliceZone } from '@prismicio/svelte';
    import Pagination from '$lib/components/Pagination.svelte';
    import BlogItem from '$lib/components/BlogItem.svelte';
    import { dev } from "$app/environment"
    import * as components from "$lib/slices"
      import * as prismic from '@prismicio/client';
  </script>
  
  <svelte:head>
    <title>{prismic.asText(data?.documents?.document?.data?.title)}</title>
  </svelte:head>
  
  {#if data && data.documents.document}
    <div class="container">
    {@html prismic.asHTML(data.documents.document.data.title)}
    {@html prismic.asHTML(data.documents.document.data.description)}
    </div>
    <SliceZone slices={data.documents.document.data.body} {components} {dev} />
  {/if}
  
  <div class="container">
    <div class="blog-grid">
      {#if data && data.documents.blogs.results}
        {#each data.documents.blogs.results as blog}
          <BlogItem {blog} />
        {/each}
      {/if}
    </div>
    <Pagination data={data.documents.blogs} />
  </div>
  
  <style>
  .blog-grid {
    display: grid;
    gap: 20px;
  }
  @media (min-width: 640px) {
    .blog-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 960px) {
    .blog-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  </style>