<!--eslint-disable prettier/prettier-->
<template>
  <div class="home__container">
    <img :src="require('@/assets/images/astronaut.svg')" alt="Little astronaut" />
    <div class="content__container">
      <h2 class="title">Perguntas frequentes</h2>
      <p class="subtitle">Esolha a categoria desejada</p>
    </div>
    <ul>
      <li
        class="list__item"
        v-for="categories in $allCategories"
        :key="categories.id"
        @click="changeView('Questions'); myQuestionId(categories.id)"
      >
        <img
          class="title__icons"
          :src="require(`@/assets/images/${categories.icon}`)"
          alt=""
        />
        <span class="categorie__title">{{ categories.title }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data(){
    return{
      id: 0
    }
  },
  computed: {
    $allCategories() {
      return this.$store.getters.$allCategories
    }
  },
  methods: {
    //Mapeando a action changeView declarada no Store
    ...mapMutations(['changeView', 'myQuestionId'])
  },
  created() {
    this.$store.dispatch('fetchCategories')
  }
}
</script>

<style scoped>
img {
  margin: 1rem 0;
}

.title {
  font-weight: bold;
  color: #f5f6f8;
  margin-bottom: 0.438rem;
}

.subtitle {
  color: #f5f6f8;
}

.content__container {
  margin-top: 1.5rem;
  padding: 1rem 3rem;
}

ul {
  list-style: none;
  padding: 0.75rem;
  margin-top: 1rem;
}

.list__item {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 2rem;
  align-content: center;
  align-items: center;

  padding: 0.5rem 2rem;
}

.list__item:hover {
  background-color: rgba(63, 68, 82, 0.7);
}

.title__icons {
  width: auto;
  height: 2rem;
}

.categorie__title {
  font-size: 1.3rem;
  color: #f5f6f8;
}
</style>
