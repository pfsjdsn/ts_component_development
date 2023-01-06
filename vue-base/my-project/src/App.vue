<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{ count }}</h1>
  <h1>{{ double }}</h1>
  <ul>
    <li v-for="number in numbers" :key="number">
      <h1>{{ number }}</h1>
    </li>
  </ul>
  <h1>{{ person.name }}</h1>
  <h1>{{ greetings }}</h1>
  <h1>x:{{ x }} y:{{ y }}</h1>
  <ModalDig />
  <h1 v-if="loading">Loading!</h1>
  <!-- <img v-if="loaded" :src="result.message"> -->
  <img v-if="loaded" :src="result[0].url">
  <button @click="increase">+1</button>
  <button @click="updateGreeting">update title</button>
</template>

<script lang="ts">
import { __values } from 'tslib';
import {
  ref, computed, reactive, toRefs, onUpdated, onRenderTriggered, watch
  , onMounted, onUnmounted
} from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader';
import ModalDig from './components/ModalDig.vue'
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string }
}
interface DogResult {
  message: string;
  status: string;
}
interface CatResult {
  id: string;
  url: string;
  width: string;
  height: string;
}
export default {
  name: 'App',
  components: {
    ModalDig
  },
  setup() {
    /**
     * ref的使用
     */
    // const count = ref(0)
    // const double = computed(()=>{
    //   return count.value *2
    // })
    // const increase = () =>{
    //   count.value++
    // }
    // return{
    //   count,
    //   increase,
    //   double
    // }

    /**
     * reactive
     * toRefs
     */
    onMounted(() => {
      console.log('Mounted')
    })
    onUpdated(() => {
      console.log('Updated')
    })
    //  onRenderTriggered调试函数，监测更新的数据
    onRenderTriggered((event) => {
      console.log(event)
    })
    const data: DataProps = reactive({
      count: 0,
      increase: () => { data.count++ },
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    })
    const greetings = ref('')
    const updateGreeting = () => {
      greetings.value += 'hello'
    }
    /**
     * 获取当前鼠标坐标移动位置
     */
    // const x = ref(0)
    // const y = ref(0)
    // const updateMouse = (e: MouseEvent) => {
    //   x.value = e.pageX
    //   y.value = e.pageY
    // }
    // onMounted(() => {
    //   document.addEventListener('click', updateMouse)
    // })
    // onUnmounted(() => {
    //   document.removeEventListener('click', updateMouse)
    // })

    /**
     * hooks的使用： 获取当前鼠标坐标移动位置
     */
    const { x, y } = useMousePosition()
    /**
     * hooks的使用： 显示和隐藏loading状态
     */
    // const { result, loading, loaded } = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random')
    /**
 * hooks的使用： 泛型改造
 */
    const { result, loading, loaded } = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
    watch(result, () => {
      if (result.value) {
        console.log(result.value[0].url, 'value');

      }
    })
    watch([greetings, () => data.count], (newValue, oldValue) => {
      console.log(newValue, 'new')
      console.log(oldValue, 'old')
      document.title = 'updated' + greetings.value + data.count
    })
    data.numbers[0] = 5
    data.person.name = "xiaoming"
    const refData = toRefs(data)
    return {
      ...refData,
      updateGreeting,
      greetings,
      x,
      y,
      result,
      loading,
      loaded
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
