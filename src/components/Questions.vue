<template>
  <div>
    <ul class="questions">
      <li v-for="categories in $allCategories" :key="categories.id">
        <div v-if="categories.id === $returnId">
          <div class="questions__header">
            <a @click="changeView('Home')"
              ><img
                :src="require(`@/assets/images/arrow-left.svg`)"
                alt="Arrow poiting left"
                class="arrow-left"
              />
            </a>
            <div class="title_and_subtitle">
              <h1 class="title">{{ categories.title }}</h1>
              <p class="subtitle">Selecione uma pergunta</p>
            </div>
            <img
              :src="require(`@/assets/images/${categories.icon}`)"
              alt="A rocket icon"
              class="question__icon"
            />
          </div>
          <ul>
            <li
              v-for="questionTitle in categories.questions"
              :key="questionTitle.id"
              class="questions__titles"
              @click="changeView('Answer'); myAnswerId(questionTitle.id)"
            >
              {{ questionTitle.title }}
            </li>
          </ul>
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
    $returnId() {
      return this.$store.getters.$returnId
    }
  }
}
</script>

<style scoped>
.arrow-left {
  width: 2rem;
  height: auto;
  margin-top: 0.5rem;
  padding: 0.5rem
}

.arrow-left:hover {
  background-color: #26282C;
  border-radius: 5px;
  
}

.questions {
  padding: 1rem;
}

.questions__header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: start;
  grid-column-gap: 1rem;
  padding: 1rem;
  margin: 1rem 0;
}

.title {
  font-weight: bold;
  color: #f5f6f8;
  margin-bottom: 0.438rem;
  font-size: 1.5rem;
}

.subtitle {
  color: #f5f6f8;
  font-size: 1rem;
}

.question__icon {
  width: 2.5rem;
  height: auto;
  align-self: center;
}

ul {
  list-style: none;
}

.questions__titles {
  padding: 2rem 1.125rem;
  color: #f5f6f8;
  font-size: 1.3rem;

  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;

}

.questions__titles:hover {
  background-color: rgba(63, 68, 82, 0.7);
}
</style>