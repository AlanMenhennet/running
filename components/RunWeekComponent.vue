<template>
    <div class="run-week">
        <h2>Week {{ week.weekNumber }}</h2>
        {{week.getDistance()}}kms
        <RunComponent v-for="(run, index) in week.runs" :run="run" :key="index"></RunComponent>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(["week"])

</script>

<style lang="scss">
.run-week {
    padding:1em;
    margin-bottom:1em;
    background:var(--color_panel_group);
    border-radius:var(--border-radius);
}
</style>