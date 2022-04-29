<template lang="pug">
router-navigation
router-view
</template>

<script>
import { RouterNavigation } from "@/components/router";
import { RouterView } from "vue-router";

export default {
    name: "App",
    components: {
        RouterNavigation,
        RouterView,
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
</style>
