<script>
	export let slice
  import * as prismicH from "@prismicio/helpers";
  import { useLazyImage as lazyImage } from 'svelte-lazy-image';
  let align = slice.primary.image_side
</script>

<section class="alternate-grid">
  <div class="container"> 
    <div class="alternate-grid--container image-align--{align}">
      <div class="image-container">
        <img  
        data-src={prismicH.asImageSrc(slice.primary.optional_image)}
        data-srcset={prismicH.asImageWidthSrcSet(slice.primary.optional_image).srcset} 
        alt={slice.primary.optional_image.alt} 
        use:lazyImage
        />
      </div>
      <div class="text-container">
        <h2 class="eyebrow-headline">{@html slice.primary.eyebrow_headline[0].text}</h2>
        <h1 class="title">{@html slice.primary.title[0].text}</h1>
        <p class="description">{@html slice.primary.description[0].text}</p>
      </div>
    </div>
  </div>
</section>
	  
<style>
.alternate-grid--container{
  display: flex;
  flex-direction:column;
}
.image-container{
  order:1;
}
.text-container{
  order:2;
}
@media(min-width:769px){
  .alternate-grid--container {
    align-items: center;
    flex-direction:row;
    justify-content: space-between;
  }
  .image-align--right .image-container{
    order:2;
  }
  .image-align--right .text-container{
    order:1;
  }
  .image-container {
    flex-basis: calc(50% - 20px);
  }
  .text-container {
    flex-basis: calc(50% - 20px);
    margin-left: 20px;
  }
}
.eyebrow-headline {
  text-transform: uppercase;
  margin-bottom: 10px;
}
.title {
  margin-bottom: 20px;
}
.description {
  margin-bottom: 40px;
}
</style>
