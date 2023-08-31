<script>
	export let slice;
  import * as prismicH from "@prismicio/helpers";

	// set container from slice label
	let container = 'container'
	if(slice.slice_label){
		container += ' container--' + slice.slice_label
	}
</script>

<section class="section-text">
	<div class="{container}">
		{@html prismicH.asHTML(slice.primary.section_title)}
		{@html prismicH.asHTML(slice.primary.section_text)}
		{#if slice.items && prismicH.asText(slice.items[0]) }
		<ul class="list-items">
		{#each slice.items as item, index}
			<li class="item" key={`item-${index}`}>
			<p>{@html prismicH.asHTML(item.section_bulletpoint)}</p>
			</li>
		{/each}
		</ul>
		{/if}
	</div>
</section>
	
