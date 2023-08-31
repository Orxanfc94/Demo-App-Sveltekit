<script>
	import { SliceZone } from '@prismicio/svelte';
  import { dev } from "$app/environment"
  export let data
  import * as components from "$lib/slices"
	import * as prismic from '@prismicio/client';
</script>

<svelte:head>
  <title>{prismic.asText(data?.document?.data?.title)}</title>
</svelte:head>

{#if data && data.document}
{#if data.document.data.image.url}
<div class="blog-image">
  <div class="image-container">
    <img  
      src={prismic.asImageSrc(data.document.data.image)}
      srcset={prismic.asImageWidthSrcSet(data.document.data.image).srcset} 
      alt={data.document.data.image.alt} />
  </div>
</div>
{/if}
<div class="container container--small">
  {@html prismic.asHTML(data.document.data.title)}
  {@html prismic.asHTML(data.document.data.description)}
</div>
<SliceZone slices={data.document.data.body} {components} {dev} />
<div class="blog-footer">
  <div class="container">
    <a href="/blog" title="Back to Blog" class="btn">Back to Blog</a>
  </div>
</div>
{/if}

<style>
.blog-image{
  max-width:1024px;
  margin:0 auto;
}
.blog-image .image-container {
  aspect-ratio: 3/2;
}
.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.blog-footer{
  padding:30px 0;
  text-align:center;
}
</style>