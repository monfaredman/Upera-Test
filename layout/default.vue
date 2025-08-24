<template>
    <div :class="[$colorMode.preference]">
        <AppHeader />
        <Nuxt />
    </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
export default { components: { AppHeader } }
</script>