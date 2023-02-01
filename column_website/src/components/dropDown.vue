<!-- <li><a class="dropdown-item" href="#">新建文章</a></li>
            <li><a class="dropdown-item" href="#">编辑资料</a></li> -->
<template>
    <div class="dropdown" ref="dropdownRef">
        <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{ title }}</a>
        <ul class="dropdown-menu" :style="{display:'block'}" v-if="isOpen">
            <li><a class="dropdown-item" href="#">新建文章</a></li>
            <li><a class="dropdown-item" href="#">编辑资料</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted, onUnmounted, watch } from "vue";
import useClickOutside from "../hooks/useClickOutside"
export default defineComponent({
    name: "DropDown",
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup() {
        const isOpen = ref(false)
        const dropdownRef = ref(null)
        const toggleOpen = () => {
            isOpen.value = !isOpen.value
        }
        const isClickOutside = useClickOutside(dropdownRef)
        watch(isClickOutside, () => {
            if (isOpen.value && isClickOutside.value) {
                isOpen.value = false
            }
        })
        // const handler = (e: MouseEvent) => {
        //     // 点击除了下拉框位置，也可以关闭当前下拉框
        //     if (dropdownRef.value) {
        //         if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
        //             isOpen.value = false
        //         }
        //     }
        // }
        // onMounted(() => {
        //     document.addEventListener('click', handler)
        // })
        // onUnmounted(() => {
        //     document.removeEventListener('click', handler)
        // })
        return {
            isOpen,
            toggleOpen,
            dropdownRef
        }
    }

});
</script>
