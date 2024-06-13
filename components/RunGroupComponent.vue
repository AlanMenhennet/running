<template>
    <div class="run-group">
        <h4>{{ group.name }}</h4>
        <div class="run-week-distance">{{group.getCompletedDistance()}}/{{group.getDistance()}}kms</div>
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
    margin:0em 1em 2em;

    h4 {
        margin-bottom:0;
        text-align: center;
    }

    .run-week-distance {
        text-align: center;
        margin-bottom:1em;
    }
}
</style>