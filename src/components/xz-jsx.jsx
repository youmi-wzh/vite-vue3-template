import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    const increment = () => count.value++;

    return () => (
      <div>
        <p>{count.value}</p>
        <button onClick={increment}>+</button>
      </div>
    );
  },
};
