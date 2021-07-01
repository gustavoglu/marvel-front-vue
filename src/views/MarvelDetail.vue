<template>
  <div>
    <v-progress-linear indeterminate v-if="isBusy"></v-progress-linear>
    <marvel-detail
      v-if="entity"
      :title="
        entity.title
          ? entity.title
          : entity.name
          ? entity.name
          : entity.fullName
      "
      :description="entity.description"
      :thumbnail="`${entity.thumbnail.path}.${entity.thumbnail.extension}`"
      :stories="entity.stories ? entity.stories.items : null"
      :series="entity.series ? entity.series.items : null"
      :urls="entity.urls ? entity.urls : null"
    >
      ></marvel-detail
    >
  </div>
</template>

<script>
import MarvelService from "../services/marvelService";
import marvelDetail from "../components/marvelDetail.vue";
import marvelDetailMixin from "../mixins/marvelDetailMixin";
export default {
  props: ["id", "entityName"],
  components: { marvelDetail },
  mixins: [marvelDetailMixin],
  data() {
    return {
      marvelService: new MarvelService(this.entityName),
    };
  },
};
</script>

<style>
</style>