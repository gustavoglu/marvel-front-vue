export default {
  data() {
    return {
      marvelService: null,
      isBusy: false,
      pagination: {
        page: 1,
        limit: parseInt(process.env.VUE_APP_LIMIT_ROWS),
        total: 0,
      },
      items: [],
    };
  },
  methods: {
    async getItems() {
      if(this.isBusy) return ;
      this.isBusy = true;
      let res = await this.marvelService.getAll(
        this.pagination.page,
        this.pagination.limit
      );
      this.isBusy = false;

      if (res.statusText == "OK") {
        this.items.push(...res.data.data.results);
        this.pagination.total = res.data.data.total;
      }
    },
    async handleScroll() {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.pagination.page++;
        await this.getItems();
      }
    },
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  async mounted() {
    window.addEventListener("scroll", this.handleScroll);
    await this.getItems();
  },
};
