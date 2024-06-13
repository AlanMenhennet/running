<template>
  <h1>Run<span>Fire</span></h1>
  <RunGroupComponent v-for="(group, index) in groups" :group="group"></RunGroupComponent>
</template>


<script setup lang="ts">
import { RunGroup } from "./model/RunGroup";

let groups : Ref<RunGroup[]> = ref([]);

onMounted( async () =>{
    const resp : any[] = await $fetch("/parsed.json");
    console.log(resp)
    const arr : RunGroup[] = [];
    resp.forEach( groupJson=> {
        const group = new RunGroup();
        group.fromJSON(groupJson);
        arr.push(group);
    });
    groups.value = arr;
})



</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
    margin:.5em 0 0;

    span {
        color:var(--color_progress)
    }
}


</style>
