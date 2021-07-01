<template>
  <div>
    <v-progress-linear v-if="isBusy" indeterminate></v-progress-linear>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        xs="12"
        md="4"
        v-for="(item, index) in items"
        :key="index"
      >
        <marvel-card
          :id="item.id"
          :title="item.title"
          :thumbnail="`${item.thumbnail.path}.${item.thumbnail.extension}`"
          :is-favorite="isFavorite(item.id)"
          @click-favorite="setFavorite"
          @click="clickCard"
          :personagem="item"
        ></marvel-card>
      </v-col>
    </v-row>
    <v-progress-linear v-if="isBusy" indeterminate></v-progress-linear>
  </div>
</template>

<script>
import MarvelService from "../services/marvelService";
import marvelListMixin from "../mixins/marvelListMixin";
import marvelFavoriteMixin from "../mixins/marvelFavoriteMixin";
import marvelCard from "../components/marvelCard.vue";

export default {
  name: "Comics",
  components: { marvelCard },
  mixins: [marvelListMixin, marvelFavoriteMixin],

  data() {
    return {
      marvelService: new MarvelService("series"),
      entityName: "series",
    };
  },
  methods: {
    clickCard(id) {
      this.$router.push(`detail/series/${id}`);
    },
  },
  async mounted() {
    window.addEventListener("scroll", this.handleScroll);
    await this.getFavoriteList(this.entityName);
    await this.getItems();
  },
};
</script>
