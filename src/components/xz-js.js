import { ref, h } from "vue";

export default {
  setup() {
    const count = ref(0);
    const increment = () => count.value++;

    return () => h("div", [h("p", count.value), h("button", { onClick: increment }, "+")]);
  },
};
