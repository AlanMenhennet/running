<template>
    <div class="run" :class="run.completed ? 'completed' : ''" @click="run.completed = !run.completed">
        <h3>{{ run.description }}</h3>
        <div v-if="run.distance">
            <strong>Distance: </strong>{{ run.distance }}km
        </div>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps(["run"])
</script>


<style lang="scss">
.run {
    padding:1em;
    background:var(--color_panel_active);
    margin-bottom:1em;
    border:1px solid transparent;
    border-radius:var(--border-radius);
    

    &.completed {
        border:1px solid var(--color_completed);
        color:var(--color__completed-text);
        background:var(--color_completed);
    
        h3 {
            color:var(--color_completed);
            color:var(--color__completed-text);
        }
    }
}
</style>