import { useMediaQuery } from '@vueuse/core'
import { useSidebar } from 'vitepress/theme'
import { computed } from 'vue'

export function useAside() {
  const { hasSidebar } = useSidebar()
  const is960 = useMediaQuery('(min-width: 960px)')
  const is1280 = useMediaQuery('(min-width: 1280px)')

  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false
    }

    return hasSidebar.value ? is1280.value : is960.value
  })

  return {
    isAsideEnabled
  }
}
