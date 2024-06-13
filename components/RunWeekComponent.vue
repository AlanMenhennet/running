<template>
    <div class="run-week" 
        
        :class="!viewRuns ? 'closed' : ''">
        <div class="run-week-header" @click="toggleViewRuns()">
            <h2>Week {{ week.weekNumber }}</h2>
            <div class="run-week-distance">{{week.getCompletedDistance()}}/{{week.getDistance()}}kms</div>
        </div>
        <div class="run-week-progress">
            <div class="run-week-progress__inner" :style="getProgressStyle()">

            </div>
        </div>
        
        <Transition>
            <div v-if="viewRuns" class="run-week__runs">
                <RunComponent v-for="(run, index) in week.runs" :run="run" :key="index"></RunComponent>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    const {week} = defineProps(["week"])

    const viewRuns = ref(true)

    function getProgressStyle(){
        return {
            width : `${week.getCompletedDistance() / week.getDistance() * 100}%`
        }
    }

    function toggleViewRuns(){
        viewRuns.value = !viewRuns.value
    
    }

</script>

<style lang="scss">
.run-week {
    padding:1em;
    margin-bottom:1em;
    background:var(--color_panel_group);
    border-radius:var(--border-radius);
    transition: .3s;

    .run-week-header {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 100px;
        align-items: center;
        

        .run-week-distance {
            text-align: right;
        }
    }

    .run-week-progress {
        width:calc(100% - 5px);
        height:10px;
        background:var(--color_completed);
        box-shadow:0 0 0px 5px var(--color_completed);
        margin:1em 0 0;
        border-radius:5px;
        position: relative;

        .run-week-progress__inner {
            height:100%;
            position: absolute;
            top:0;
            border-radius:5px;
            left:0;
            background:var(--color_progress);
            transition:.5s ease-in-out;
        }
    }

   

    .run-week__runs {
        margin-top:2em;
        transition:.5s;
        overflow: hidden;
        max-height:900px;

        
        &.v-enter-from,
        &.v-leave-to {
            max-height: 0;
        }

        .run:nth-last-child(1){
            margin-bottom:0;
        }
    }



}




</style>