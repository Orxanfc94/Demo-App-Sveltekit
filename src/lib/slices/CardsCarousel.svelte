<script>
    import { onMount, afterUpdate } from 'svelte';
    import SwiperCore from 'swiper';
  import { Navigation, Pagination } from 'swiper/modules'
    import 'swiper/swiper-bundle.css';
    import * as prismicH from "@prismicio/helpers";
  
    export let slice;
    export let carouselId = randomString(12, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  
    function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }
    
    SwiperCore.use([Navigation, Pagination]);
    let swiperInstance;
  
    onMount(() => {
      swiperInstance = new SwiperCore(`.${carouselId}-mySwiper`, {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: `.${carouselId}-swiper-button-next`,
          prevEl: `.${carouselId}-swiper-button-prev`,
        },
        pagination: {
          el: `.${carouselId}-swiper-pagination`,
          clickable: true,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }
      });
    });
  
    afterUpdate(() => {
      swiperInstance.update();
    });
  </script>
      
  <section class="carousel">
    <div class="container">
      <div class="section-header">
        {@html prismicH.asHTML(slice.primary.eyebrow_headline)}
        {@html prismicH.asHTML(slice.primary.title)}
        {@html prismicH.asHTML(slice.primary.description)}
      </div>
      <div class="swiper mySwiper {carouselId}-mySwiper">
        <div class="swiper-wrapper">
          {#each slice.items as item}
            <div class="swiper-slide">
              <div class="card">
                <div class="image">
                  <img  
                  src={prismicH.asImageSrc(item.image)}
                  srcset={prismicH.asImageWidthSrcSet(item.image).srcset} 
                  alt={item.image.alt} 
                  />
                </div>
                <div class="card-body">
                  {@html prismicH.asHTML(item.title)}
                  {@html prismicH.asHTML(item.content)}
                  {@html prismicH.asHTML(item.additional_info)}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
      <div class="{carouselId}-swiper-pagination swiper-pagination"></div>
    </div>
  </section>
  <style>
    .carousel{
      position: relative;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .eyebrow_headline {
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 10px;
    }	
    .image {
      margin-bottom: 20px;
    }
    .image img {
      width: 100%;
      height: auto;
      display: block;
    }
  </style>