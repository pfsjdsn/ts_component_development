<template>
    <!-- 
        teleport：传送，瞬间转移 
        解决的问题：Dialog 被包裹在其它组件中，容易被干扰，样式在其它组件中容易变得混乱，解决Dialog组件嵌套比较深的问题
     -->
    <teleport to="#modal">
        <div id="center">
            <h2>this is modal</h2>
        </div>
    </teleport>
</template>
<script lang="ts">
export default {

}
</script>
<style>
#center {
    width: 200px;
    height: 200px;
    border: 2px solid #000;
    background: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
}
</style>