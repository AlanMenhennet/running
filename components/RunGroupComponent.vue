<template>
    <div class="run-group">
        <h4>{{ group.name }}</h4>
    <RunWeekComponent v-for="(week, index) in group.weeks" 
                    :week="week"
                    :key="index"></RunWeekComponent>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(["group"])
</script>

<style lang="scss">
.run-group {
    padding:1em;
    margin:1em;
}
</style>