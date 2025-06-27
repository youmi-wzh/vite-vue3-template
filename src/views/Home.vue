<script setup>
import XzCard from "@/components/xz-card";
import XzComponent from "@/components/xz-component.vue";
import XzOption from "@/components/xz-option.vue";
import XzJsx from "@/components/xz-jsx";
import XzJs from "@/components/xz-js";
import XzRender from "@/components/xz-render";
import XzFunction from "@/components/xz-function";

const xzComponents = [
  {
    title: "组合式 API (.vue)",
    component: XzComponent,
    code: `<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const increment = () => count.value++;
<\/script>
`,
  },
  {
    title: "渲染函数 h() (.js)",
    component: XzJs,
    code: `import { ref, h } from "vue";

export default {
  setup() {
    const count = ref(0);
    const increment = () => count.value++;

    return () => h("div", [h("p", count.value), h("button", { onClick: increment }, "+")]);
  },
};
`,
  },
  {
    title: "JSX 组件 (.jsx)",
    component: XzJsx,
    code: `import { ref } from "vue";

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
`,
  },
  {
    title: "函数式组件 (.js)",
    component: XzFunction,
    code: `export default function FunctionalComponent(props) {
  return h("div", [h("p", props.message), h("span", props.name)]);
}
`,
    props: {
      message: "函数式组件 (.js)",
      name: "XzFunction",
    },
  },
  {
    title: "组合式 API + render (.js)",
    component: XzRender,
    code: `import { ref } from "vue";

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
`,
  },
  {
    title: "选项式 API (.vue)",
    component: XzOption,
    code: `<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
<\/script>`,
  },
];
</script>

<template>
  <h2 class="title">vue3 各种组件方式</h2>
  <div class="grid-container">
    <XzCard v-for="item in xzComponents" :key="item.title" class="grid-card" :title="item.title" :code="item.code">
      <component :is="item.component" v-bind="item.props || {}" />
    </XzCard>
  </div>
</template>

<style lang="scss" scoped>
.title {
  margin: 0 20px;
  font-size: 24px;
  color: #333;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 10px;
  padding: 20px;
  .grid-card {
    background-color: #fff;
    font-size: 20px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
