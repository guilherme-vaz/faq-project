<template>
  <transition
    enter-active-class="animate__animated animate__fadeInLeft"
    leave-active-class="animate__animated animate__fadeOutLeft"
    appear
    
  >
    <component :is="$returnView"> </component>
  </transition>
</template>

<script>
import Home from '@/components/Home.vue'
import Questions from '@/components/Questions.vue'
import Answer from '@/components/Answer.vue'

export default {
  components: {
    Home,
    Questions,
    Answer
  },
  computed: {
    $returnView() {
      return this.$store.getters.$returnView
    }
  },
  //Dispara uma ação criada no Store quando o componente é criado
  created() {
    this.$store.dispatch('componentView', 'Home')
  }
}
</script>

<style>
</style>
