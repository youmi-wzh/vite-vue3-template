import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    return { count };
  },
  render() {
    return h("div", [
      h("p", this.count),
      h(
        "button",
        {
          onClick: () => this.count++,
        },
        "+",
      ),
    ]);
  },
};
