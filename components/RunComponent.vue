<template>
    <div class="run">
        <h3>{{ run.description }}</h3>
        <div v-if="run.distance">
            <strong>Distance: </strong>{{ run.distance }}
        </div>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps(["run"])
</script>


<style lang="scss">
.run {
    padding:1em;
    background:var(--color_panel);
    margin-bottom:1em;
    border-radius:var(--border-radius);
}
</style>