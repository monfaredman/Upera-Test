<template>
    <div class="top-rated-slider">
        <h2>Top Rated</h2>
        <div class="slider">
            <div 
                v-for="(item, index) in items" 
                :key="index" 
                class="slider-item"
            >
                <img :src="item.image" :alt="item.title" />
                <p>{{ item.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopRatedSlider",
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.top-rated-slider {
    padding: 20px;
}

.slider {
    display: flex;
    overflow-x: auto;
    gap: 10px;
}

.slider-item {
    flex: 0 0 auto;
    text-align: center;
}

.slider-item img {
    max-width: 100px;
    border-radius: 8px;
}

.slider-item p {
    margin-top: 5px;
    font-size: 14px;
}
</style>