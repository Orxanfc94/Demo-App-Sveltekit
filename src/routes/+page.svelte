<script>
    export let data;
    import { SliceZone } from '@prismicio/svelte';
    import { dev } from "$app/environment"
    import * as components from "$lib/slices"
      import * as prismic from '@prismicio/client';
  </script>
  
  <svelte:head>
    <title>{prismic.asText(data?.document?.data?.title)}</title>
  </svelte:head>
  
  {#if data && data.document}
    <SliceZone slices={data.document.data.body} {components} {dev} />
  {/if}