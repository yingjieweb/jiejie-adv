<template>
  <div>
    <MobileHome v-if="$store.state.deviceType === 'mobile'" />
    <PcHome v-else />
  </div>
</template>

<script lang="js">
  import MobileHome from "../mobile/MobileHome"
  import PcHome from "../pc/PcHome"

  export default {
    name: "Layout",
    components: {
      MobileHome,
      PcHome
    }
  }
</script>

<style lang="scss" scoped>

</style>
