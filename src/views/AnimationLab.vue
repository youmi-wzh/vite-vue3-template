<script setup>
import MotionDemo from "@/components/MotionDemo.vue";
import WaapiDemo from "@/components/WaapiDemo.vue";
</script>

<template>
  <main class="animation-lab">
    <section class="hero">
      <p class="eyebrow">Animation compare</p>
      <h1>WAAPI vs Motion</h1>
      <p class="summary">
        左边是浏览器原生
        <code>element.animate()</code>
        ，右边是 Motion for Vue 的声明式写法。两个示例都在做位移、缩放和形态切换，但开发心智模型不一样。
      </p>
    </section>

    <section class="compare-grid">
      <WaapiDemo />
      <MotionDemo />
    </section>

    <section class="notes">
      <article>
        <h2>什么时候选 WAAPI</h2>
        <p>不想加依赖、只控制少量元素、需要直接拿到 Animation 实例时，原生 API 会更轻。</p>
      </article>
      <article>
        <h2>什么时候选 Motion</h2>
        <p>动画会越来越多，需要 spring、hover、滚动或状态联动时，声明式组件更省心。</p>
      </article>
    </section>
  </main>
</template>

<style scoped lang="scss">
.animation-lab {
  min-height: 100vh;
  padding: 40px 20px 64px;
  background:
    radial-gradient(circle at top left, rgba(255, 143, 112, 0.18), transparent 30%),
    radial-gradient(circle at top right, rgba(56, 239, 125, 0.18), transparent 24%),
    linear-gradient(180deg, #fffdf9 0%, #f8fbff 100%);
}

.hero {
  max-width: 860px;
  margin: 0 auto 28px;
}

.hero h1 {
  margin: 8px 0 12px;
  font-size: clamp(2.4rem, 4vw, 4.2rem);
  line-height: 0.96;
  letter-spacing: -0.04em;
  color: #12223b;
}

.eyebrow {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #5e6d8f;
}

.summary {
  max-width: 720px;
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.7;
  color: #41506d;
}

.summary code {
  padding: 2px 6px;
  border-radius: 999px;
  background: rgba(18, 34, 59, 0.06);
}

.compare-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  max-width: 1280px;
  margin: 0 auto;
}

.notes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  max-width: 1280px;
  margin: 22px auto 0;
}

.notes article {
  padding: 22px 24px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(18, 34, 59, 0.08);
  box-shadow: 0 18px 50px rgba(32, 56, 91, 0.08);
}

.notes h2 {
  margin: 0 0 10px;
  font-size: 1.05rem;
  color: #1f3152;
}

.notes p {
  margin: 0;
  color: #4a5b79;
  line-height: 1.65;
}

@media (max-width: 980px) {
  .compare-grid,
  .notes {
    grid-template-columns: 1fr;
  }
}
</style>
