<script>
	export let data;
	import * as prismic from '@prismicio/client';
	import { page } from '$app/stores';
	let menuItems = [];
	const mainMenu = data.document.find((item) => item.uid === 'main-menu');
	if (mainMenu && mainMenu.data.items) {
		menuItems = mainMenu.data.items
	}
	let active = false;
	$: $page.url && (active = false)
</script>
<header class="main-header">
	<div class="main-header--wrap">
		<div class="logo">Logo</div>
		<span class="main-nav--toggle" id="menuToggle"
			 data-label-active="Close"
			 data-label="Menu"
			 class:active
			 on:click={() => active = !active}>Menu</span>
		<nav class="main-nav">
			{#if menuItems}
			<ul class="main-nav--list">
				{#each menuItems as item}
					{@const activeLink = item.link.url === $page.url.pathname}
					<li class="main-nav--item">
					{#if activeLink}
						<span class="main-nav--link">{item.name}</span>
					{:else}
						<a href={prismic.asLink(item.link)} class="main-nav--link">{item.name}</a>
					{/if}
					</li>
				{/each}
			</ul>
			{/if}
		</nav>
	</div>
</header>