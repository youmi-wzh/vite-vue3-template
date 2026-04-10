<script setup>
import { motion } from "motion-v";
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
    label: "SFC",
    accent: "coral",
    component: XzComponent,
    summary: "Vue 3 最主流的写法，语义清晰，组合逻辑也更自然。",
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
    label: "Render",
    accent: "amber",
    component: XzJs,
    summary: "更贴近底层节点结构，适合需要精细控制渲染输出的场景。",
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
    label: "JSX",
    accent: "blue",
    component: XzJsx,
    summary: "把模板思维切到 JavaScript 表达式，对复杂条件组合很顺手。",
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
    label: "Functional",
    accent: "mint",
    component: XzFunction,
    summary: "没有实例状态，适合很纯粹的展示型小组件。",
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
    label: "Hybrid",
    accent: "violet",
    component: XzRender,
    summary: "组合式状态和 render 结合，兼顾逻辑组织和输出掌控。",
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
    label: "Options",
    accent: "rose",
    component: XzOption,
    summary: "老朋友风格，更适合帮助理解 Vue 组件的传统组织方式。",
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
  <main class="home-page">
    <motion.section
      class="hero"
      :initial="{ opacity: 0, y: 26 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.55, ease: 'easeOut' }"
    >
      <div class="hero-copy">
        <p class="eyebrow">Vue 3 showcase</p>
        <h1>把同一个交互，用不同组件写法都跑起来</h1>
        <p class="hero-text">
          这里把 `SFC`、`JSX`、`render`、函数式组件和 `Options API`
          放到同一页里，方便你横向比较语法体验、可读性和适用场景。
        </p>
        <div class="hero-tags">
          <span>Composition API</span>
          <span>JSX</span>
          <span>Render Function</span>
          <span>Options API</span>
        </div>
      </div>

      <div class="hero-stats">
        <div class="stat-card">
          <span>Patterns</span>
          <strong>{{ xzComponents.length }}</strong>
        </div>
        <div class="stat-card">
          <span>Files</span>
          <strong>`.vue` + `.js` + `.jsx`</strong>
        </div>
      </div>
    </motion.section>

    <section class="section-head">
      <div>
        <p class="eyebrow">Component gallery</p>
        <h2>选择一种你最顺手的写法</h2>
      </div>
      <p class="section-text">每张卡片都可以直接交互，也可以展开查看示例代码。</p>
    </section>

    <div class="grid-container">
      <motion.div
        v-for="(item, index) in xzComponents"
        :key="item.title"
        class="card-shell"
        :initial="{ opacity: 0, y: 28, scale: 0.96 }"
        :animate="{ opacity: 1, y: 0, scale: 1 }"
        :while-hover="{ y: -8, scale: 1.01 }"
        :transition="{
          duration: 0.42,
          delay: 0.12 + index * 0.08,
          ease: 'easeOut',
        }"
      >
        <XzCard class="grid-card" :title="item.title" :code="item.code">
          <template #header>
            <div class="card-heading">
              <div>
                <span class="card-badge" :data-accent="item.accent">{{ item.label }}</span>
                <h3>{{ item.title }}</h3>
              </div>
            </div>
          </template>

          <div class="card-preview">
            <p class="card-summary">{{ item.summary }}</p>
            <div class="card-demo">
              <component :is="item.component" v-bind="item.props || {}" />
            </div>
          </div>
        </XzCard>
      </motion.div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.home-page {
  min-height: calc(100vh - 72px);
  padding: 34px 20px 64px;
  background:
    radial-gradient(circle at top left, rgba(255, 143, 112, 0.18), transparent 22%),
    radial-gradient(circle at top right, rgba(77, 103, 245, 0.16), transparent 20%),
    linear-gradient(180deg, #fffdf8 0%, #f5f8ff 100%);
}

.hero,
.section-head,
.grid-container {
  max-width: 1260px;
  margin-inline: auto;
}

.hero {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
  margin-bottom: 26px;
  padding: 32px;
  border: 1px solid rgba(26, 40, 64, 0.08);
  border-radius: 32px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 247, 242, 0.92)),
    radial-gradient(circle at top left, rgba(255, 143, 112, 0.15), transparent 34%);
  box-shadow: 0 24px 80px rgba(56, 71, 106, 0.12);
  backdrop-filter: blur(12px);
}

.eyebrow {
  margin: 0 0 10px;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #4d67f5;
}

.hero h1,
.section-head h2 {
  margin: 0;
  letter-spacing: -0.04em;
  color: #16233d;
}

.hero h1 {
  max-width: 760px;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  line-height: 0.98;
}

.hero-text,
.section-text {
  color: #566784;
  line-height: 1.7;
}

.hero-text {
  max-width: 740px;
  margin: 16px 0 0;
  font-size: 1rem;
}

.hero-text :deep(code) {
  padding: 2px 7px;
  border-radius: 999px;
  background: rgba(77, 103, 245, 0.08);
  color: #24365d;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.hero-tags span,
.card-badge {
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 0.84rem;
  font-weight: 700;
}

.hero-tags span {
  color: #314567;
  background: rgba(49, 69, 103, 0.07);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 14px;
  min-width: min(330px, 100%);
}

.stat-card {
  padding: 18px 20px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(247, 250, 255, 0.98), rgba(237, 243, 255, 0.92));
}

.stat-card span {
  display: block;
  color: #60708d;
}

.stat-card strong {
  display: block;
  margin-top: 10px;
  font-size: 1.9rem;
  line-height: 1.05;
  color: #16233d;
}

.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 18px;
}

.section-head h2 {
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  line-height: 1.05;
}

.section-text {
  max-width: 360px;
  margin: 0;
  text-align: right;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}

.card-shell {
  min-width: 0;
}

.grid-card {
  height: 100%;
  font-size: 1rem;
}

.card-heading {
  display: flex;
  align-items: center;
}

.card-heading h3 {
  margin: 10px 0 0;
  font-size: 1.1rem;
  color: #17253f;
}

.card-badge {
  color: #24365d;
  background: rgba(49, 69, 103, 0.08);
}

.card-badge[data-accent="coral"] {
  color: #a5472f;
  background: rgba(255, 143, 112, 0.16);
}

.card-badge[data-accent="amber"] {
  color: #8e5b11;
  background: rgba(255, 194, 82, 0.18);
}

.card-badge[data-accent="blue"] {
  color: #294fd8;
  background: rgba(77, 103, 245, 0.15);
}

.card-badge[data-accent="mint"] {
  color: #177f68;
  background: rgba(36, 177, 149, 0.15);
}

.card-badge[data-accent="violet"] {
  color: #6842bc;
  background: rgba(145, 112, 255, 0.14);
}

.card-badge[data-accent="rose"] {
  color: #b64070;
  background: rgba(241, 117, 168, 0.15);
}

.card-preview {
  text-align: left;
}

.card-summary {
  margin: 0 0 16px;
  color: #5d6d88;
  line-height: 1.65;
}

.card-demo {
  padding: 18px;
  border: 1px solid rgba(23, 37, 63, 0.07);
  border-radius: 22px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 248, 255, 0.94)),
    radial-gradient(circle at top left, rgba(77, 103, 245, 0.08), transparent 26%);
}

:deep(.xz-card) {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(26, 40, 64, 0.08);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 22px 70px rgba(33, 50, 86, 0.1);
  overflow: hidden;
}

:deep(.xz-card-header) {
  height: auto;
  padding: 22px 24px 18px;
  border-bottom: 1px solid rgba(26, 40, 64, 0.07);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(249, 251, 255, 0.92));
}

:deep(.xz-card-header button) {
  padding: 9px 14px;
  font-size: 0.92rem;
  font-weight: 700;
  color: #274067;
  background: rgba(77, 103, 245, 0.1);
}

:deep(.xz-card-content) {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 22px 24px 24px;
}

:deep(.xz-card-code) {
  border-top: 1px solid rgba(26, 40, 64, 0.07);
  padding: 18px 24px 24px;
  background: #f6f8fc;
}

:deep(.xz-card-code pre) {
  overflow: auto;
  padding: 16px;
  border-radius: 18px;
  background: #16233d;
  color: #f5f7ff;
}

@media (max-width: 980px) {
  .hero,
  .section-head {
    align-items: flex-start;
    flex-direction: column;
  }

  .hero-stats {
    width: 100%;
  }

  .section-text {
    max-width: none;
    text-align: left;
  }
}

@media (max-width: 640px) {
  .home-page {
    padding-inline: 14px;
  }

  .hero {
    padding: 22px;
    border-radius: 26px;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  :deep(.xz-card-header),
  :deep(.xz-card-content),
  :deep(.xz-card-code) {
    padding-inline: 18px;
  }
}
</style>
