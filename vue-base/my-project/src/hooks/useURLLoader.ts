import { ref } from "vue";
import axios from 'axios'

function useURLLoader<T>(url: string) {
    const result = ref<T | null>(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)

    axios.get(url).then((rawData: { data: null; }) => {
        loading.value = false
        loaded.value = true
        result.value = rawData.data
    }).catch((e: null) => {
        error.value = e
        loading.value = false
    })
    return {
        result,
        loading,
        error,
        loaded
    }
}
export default useURLLoader