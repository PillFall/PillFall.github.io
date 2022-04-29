<template lang="pug">
router-link(to="/")
    pill-button Home
router-link(to="/about")
    pill-button About
</template>

<script>
import PillButton from "@/components/PillButton.vue";

export default {
    name: "RouterNavigation",
    components: {
        PillButton,
    },
};
</script>
