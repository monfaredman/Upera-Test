<template>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="movie in newMovies" :key="movie.id">
        <img :src="movie.poster" class="w-100 rounded" />
        <h6 class="mt-2">{{ movie.title }}</h6>
      </swiper-slide>
    </swiper>
  </template>
  
  <script>
  export default {
    props: ['newMovies'],
    data() {
      return {
        swiperOptions: {
          slidesPerView: 3,
          spaceBetween: 20,
          loop: true,
          breakpoints: {
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 }
          }
        }
      }
    }
  }
  </script>
  