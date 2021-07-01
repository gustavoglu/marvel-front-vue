import marvelStorageService from "../services/marvelStorageService";
export default {
  data() {
    return {  favoriteList: [] };
  },
  methods: {
    isFavorite(characterId) {
      return this.favoriteList.indexOf(characterId) >= 0;
    },
    async setFavorite(characterId) {
      await marvelStorageService.setFavorite(this.entityName, characterId);
      await this.getFavoriteList();
    },
    async getFavoriteList() {
      this.favoriteList = await marvelStorageService.getFavoriteList(
        this.entityName
      );
    },
  },
};
