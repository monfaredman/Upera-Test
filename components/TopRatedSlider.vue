<template>
    <div class="top-rated-slider">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="mb-0">فیلم های برگذیده</h5>
            <b-dropdown :text="`نمایش ${itemsToShow}`" size="sm" variant="text" style="color: white; font-size: 14px;"
                dir="rtl">
                <b-dropdown-item @click="setItemsToShow(10)" class="text-white text-right">نمایش 10</b-dropdown-item>
                <b-dropdown-item @click="setItemsToShow(20)" class="text-white text-right">نمایش 20</b-dropdown-item>
                <b-dropdown-item @click="setItemsToShow(50)" class="text-white text-right">نمایش 50</b-dropdown-item>
                <b-dropdown-item @click="setItemsToShow(items.length)" class="text-white text-right">نمایش
                    همه</b-dropdown-item>
            </b-dropdown>
        </div>
        <div class="slider-wrapper">
            <swiper ref="topRatedSwiper" :options="swiperOptions" @slideChange="onSlideChange">
                <swiper-slide v-for="(item, index) in displayedItems" :key="index">
                    <img :src="item.poster" :alt="item.title" class="w-100 rounded" />
                    <h6 class="mt-2 text-right">{{ item.title }}</h6>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import 'swiper/css/swiper.css'
import coverImage from '@/assets/images/featured-image.png'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
    name: "TopRatedSlider",
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            itemsToShow: 20,
            activeIndex: 0,
            swiperOptions: {
                slidesPerView: 6.5,
                slidesPerGroup: 1,
                spaceBetween: 15,
                loop: false,
                watchOverflow: true,
                observer: true,
                observeParents: true,
                breakpoints: {
                    1400: { slidesPerView: 6.5 },
                    1200: { slidesPerView: 5.5 },
                    992: { slidesPerView: 4.5 },
                    768: { slidesPerView: 3.5 },
                    576: { slidesPerView: 2.5 },
                    0: { slidesPerView: 2.5 }
                }
            }
        }
    },
    computed: {
        displayedItems() {
            return [
                { id: 1, title: 'انگاشته', poster: coverImage },
                { id: 2, title: 'انگاشته', poster: coverImage },
                { id: 3, title: 'انگاشته', poster: coverImage },
                { id: 4, title: 'انگاشته', poster: coverImage },
                { id: 5, title: 'انگاشته', poster: coverImage },
                { id: 6, title: 'انگاشته', poster: coverImage },
                { id: 7, title: 'انگاشته', poster: coverImage },
                { id: 8, title: 'انگاشته', poster: coverImage },
                { id: 9, title: 'انگاشته', poster: coverImage },
                { id: 10, title: 'انگاشته', poster: coverImage },
                { id: 11, title: 'انگاشته', poster: coverImage },
                { id: 12, title: 'انگاشته', poster: coverImage },
                { id: 13, title: 'انگاشته', poster: coverImage },
                { id: 14, title: 'انگاشته', poster: coverImage },
                { id: 15, title: 'انگاشته', poster: coverImage }
            ]
        }
    },
    mounted() {
        this.$nextTick(() => {
            const inst = this.$refs.topRatedSwiper && this.$refs.topRatedSwiper.$swiper
            if (inst) {
                inst.update()
                this.activeIndex = inst.activeIndex || 0
            }
        })
    },
    methods: {
        setItemsToShow(count) {
            this.itemsToShow = count
            this.$nextTick(() => {
                const inst = this.$refs.topRatedSwiper && this.$refs.topRatedSwiper.$swiper
                if (inst) {
                    inst.update()
                }
            })
        },
        onSlideChange() {
            const inst = this.$refs.topRatedSwiper && this.$refs.topRatedSwiper.$swiper
            if (inst) {
                this.activeIndex = inst.activeIndex || 0
            }
        }
    }
}
</script>

<style scoped>
.swiper-slide {
    flex-shrink: 0;
}

h5 {
    font-family: 'dana-700';
}

.top-rated-slider {
    position: relative;
    direction: rtl;
    background-color: black;
    width: 100%;
    max-width: 97%;
    margin: 0 auto;
    padding: 20px;
    margin-top: 4rem;
}

.slider-wrapper {
    position: relative;
    background-color: black;
}

.swiper-slide img {
    border-radius: 8px;
}

.swiper-slide h6 {
    color: white;
    font-size: 1.2rem;
    text-align: center;
}

/* Decrease title size on small screens */
@media (max-width: 576px) {
    .top-rated-slider h5 {
        font-size: 14px;
    }

    .top-rated-slider {

        margin-top: 1rem;
    }

    .swiper-slide h6 {
        font-size: 0.8rem;
    }
}
</style>