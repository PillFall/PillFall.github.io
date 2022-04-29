<template lang="pug">
router-view
</template>

<script>
import { RouterView } from "vue-router";

export default {
    name: "App",
    components: {
        RouterView,
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
</style>
