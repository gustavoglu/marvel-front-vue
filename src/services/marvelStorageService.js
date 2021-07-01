import Vue from "vue";

export default {
  async setFavorite(type,characterId) {
    if(!type) return;
    let favoriteList = await Vue.prototype.$getItem(`${type}FavoriteList`);
    if (!favoriteList) {
      await Vue.prototype.$setItem(`${type}FavoriteList`, [characterId]);
      return;
    }

    let index = favoriteList.indexOf(characterId);
    if (index < 0) favoriteList.push(characterId);
    else favoriteList.splice(index, 1);

    await Vue.prototype.$setItem(`${type}FavoriteList`, favoriteList);
  },
  async getFavoriteList(type) {
    if(!type) return;
    let favoriteList = await Vue.prototype.$getItem(`${type}FavoriteList`);
    if (!favoriteList) {
      await Vue.prototype.$setItem(`${type}FavoriteList`, []);
      return [];
    }
    return favoriteList;
  },
};
