<template>
  <div class="home">
    <PdfUrlSetting />
  </div>
</template>

<script>
// @ is an alias to /src
import PdfUrlSetting from '@/components/PdfUrlSetting.vue'

export default {
  name: 'Setting',
  components: {
    PdfUrlSetting
  }
}
</script>
