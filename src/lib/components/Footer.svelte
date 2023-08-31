<script>
	export let data;
	import * as prismic from '@prismicio/client';
	let footerItems = [];
  const mainMenu = data.document.find((item) => item.uid === 'footer-menu');
  if (mainMenu && mainMenu.data.items) {
    footerItems = mainMenu.data.items;
  }
</script>

<footer class="main-footer">
	<div class="container">
		<nav>
			{#if footerItems}
				{#each footerItems as item}
					{#if item.link.url}
						<a href={prismic.asLink(item.link)}>
							{item.name}
						</a>
					{/if}
				{/each}
			{/if}
		</nav>
	</div>
</footer>

<style>
.main-footer{
	background:#efefef;
	padding:30px 0;
}
</style>
