<script>
	export let slice;
  import * as prismicH from "@prismicio/helpers";
</script>

<section class="hero">
	<div class="hero-container">
		{#if slice.primary.icon_image?.url}
		<div class="hero-image">
			<img  
			src={prismicH.asImageSrc(slice.primary.icon_image)}
			srcset={prismicH.asImageWidthSrcSet(slice.primary.icon_image).srcset} 
			alt={slice.primary.icon_image.alt} 
		  />
		</div>
		{/if}
		<div class="hero-caption--wrap">
			<div class="hero-caption">
				{@html prismicH.asHTML(slice.primary.title)}
				{@html prismicH.asHTML(slice.primary.paragraph)}
				{#if slice.primary.button_link?.url && slice.primary.button_label}
					<a href={slice.primary.button_link.url} class="btn">{slice.primary.button_label}</a>
				{/if}
			</div>
		</div>
	</div>
</section>
  
	<style>
	.hero-container {
	  width: 100%;
	  max-width: 3960px;
	  height: auto;
	  position: relative;
	}
	.hero-image{
		position: relative;
	}
	.hero-image img{
		display:block;
		margin:0;
	}
	.hero-caption{
		padding:15px;
	}
	.hero-image{
		position: relative;
	}
	.hero-image img {
		position:absolute;
		width:100%;
		height:100%;
		object-fit:cover;
	}
	@media(max-width:1024px){
		.hero-image{
			aspect-ratio:0.8;
		}
	}
	@media(min-width:600px){
		.hero-image{
			aspect-ratio:1;
		}
	}
	@media(min-width:769px){
		.hero-image{
			aspect-ratio:3/2;
		}
	}
	@media(min-width:1024px){
		.hero-image{
			height:100vh;
			width:100%
		}
		.hero-caption--wrap{		
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			display:flex;
			align-items:center;
			justify-content:space-around;
			background: linear-gradient(-45deg, rgba(229,93,135,.7), rgba(95,195,228,.7));
		}
		.hero-caption{
			color:white;
			text-align:center;
		}
	}
	.hero-caption h1 {
	  font-size: 2em;
	  margin: 0;
	  padding: 1em;
	}
	.hero-caption p {
	  font-size: 1em;
	  margin: 0;
	  padding: 1em;
	}
	</style>