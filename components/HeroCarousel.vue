<template>
    <div class="hero-carousel">
        <swiper :options="{ loop: true, autoplay: { delay: 5000 } }">
            <swiper-slide v-for="(item, i) in items" :key="i">
                <div class="position-relative">
                    <img :data-src="item.backdrop" class="w-100 d-block" v-lazy="item.backdrop" />
                    <div class="position-absolute p-4 text-white"
                        style="bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.7))">
                        <h2>{{ item.title }}</h2>
                        <b-button :to="`/movie/${item.slug}`" variant="danger">Watch</b-button>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>


<script>
export default { props: { items: { type: Array, default: () => [] } } }
</script>