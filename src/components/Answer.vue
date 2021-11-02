<template>
  <div>
    <ul>
      <li v-for="categories in $allCategories" :key="categories.id">
        <div
          v-for="categoriesQuestion in categories.questions"
          :key="categoriesQuestion.id"
        >
          <div v-if="categoriesQuestion.id === $returnAnswerId">
            <div class="answer__header">
              <a @click="changeView('Questions')"
                ><img
                  :src="require(`@/assets/images/arrow-left.svg`)"
                  alt="Arrow poiting left"
                  class="arrow-left"
                />
              </a>
              <h1 class="title">{{ categoriesQuestion.title }}</h1>
            </div>
            <p v-html="categoriesQuestion.content" class="answer__content">
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    //Mapeando a action changeView declarada no Store
    ...mapMutations(['changeView', 'myAnswerId'])
  },
  created() {
    return this.$store.dispatch('fetchCategories')
  },
  computed: {
    $allCategories() {
      return this.$store.getters.$allCategories
    },
    $returnAnswerId() {
      return this.$store.getters.$returnAnswerId
    }
  }
}
</script>

<style scoped>
.answer__header {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  align-items: center;
  margin: 2rem 1rem;
}

.arrow-left {
  width: 2rem;
  height: auto;
  padding: 0.5rem;
}

.arrow-left:hover {
  background-color: #26282c;
  border-radius: 5px;
}

.title {
  font-weight: bold;
  color: #f5f6f8;
  margin-bottom: 0.438rem;
  font-size: 1.5rem;
}

.answer__content {
  font-size: 0.875rem;
  text-align: left;
  line-height: 1.25rem;
  color: #F5F6F8;
  padding: 1.3rem 3rem 6.063rem 1.563rem;
}
</style>