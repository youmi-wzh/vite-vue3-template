<script setup>
import { motion } from "motion-v";
import { ref } from "vue";

const isExpanded = ref(false);
const chips = ["spring", "hover", "drag-free", "timeline-like"];

function toggleState() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <section class="demo-card">
    <header class="demo-header">
      <div>
        <p class="eyebrow">Motion for Vue</p>
        <h3>Declarative animation state on a motion component</h3>
      </div>
      <button type="button" @click="toggleState">
        {{ isExpanded ? "Reset state" : "Animate state" }}
      </button>
    </header>

    <div class="stage">
      <motion.div
        class="panel"
        :initial="{ opacity: 0, y: 36, scale: 0.92, rotate: -8 }"
        :animate="
          isExpanded
            ? {
                opacity: 1,
                y: -16,
                x: 112,
                scale: 1.12,
                rotate: 8,
                borderRadius: '42px',
                background: 'linear-gradient(135deg, #0f9b8e 0%, #38ef7d 100%)',
              }
            : {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                rotate: 0,
                borderRadius: '26px',
                background: 'linear-gradient(135deg, #3758f9 0%, #6fb1fc 100%)',
              }
        "
        :while-hover="{ scale: isExpanded ? 1.16 : 1.04, rotate: isExpanded ? 6 : -2 }"
        :transition="{
          type: 'spring',
          stiffness: 260,
          damping: 18,
          mass: 0.9,
        }"
      >
        <strong>motion.div</strong>
        <span>animate / whileHover / spring</span>
      </motion.div>

      <div class="chips">
        <motion.div
          v-for="(chip, index) in chips"
          :key="chip"
          class="chip"
          :initial="{ opacity: 0, y: 18 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            delay: 0.18 + index * 0.08,
            duration: 0.36,
            ease: 'easeOut',
          }"
        >
          {{ chip }}
        </motion.div>
      </div>
    </div>

    <div class="meta">
      <span>
        State-driven:
        <code>:animate="{ x, scale, rotate }"</code>
      </span>
      <span>Hover feels natural with spring tuning</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
.demo-card {
  padding: 24px;
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(242, 255, 250, 0.94)),
    radial-gradient(circle at top right, rgba(56, 239, 125, 0.2), transparent 38%);
  box-shadow: 0 30px 90px rgba(24, 112, 88, 0.12);
}

.demo-header,
.meta {
  display: flex;
  align-items: center;
}

.demo-header {
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.demo-header h3 {
  margin: 4px 0 0;
  font-size: 1.25rem;
  color: #14342e;
}

.eyebrow {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #0f9b8e;
}

.stage {
  min-height: 260px;
  padding: 24px;
  border-radius: 24px;
  background:
    radial-gradient(circle at top left, rgba(111, 177, 252, 0.22), transparent 28%),
    linear-gradient(135deg, rgba(15, 155, 142, 0.08), rgba(56, 239, 125, 0.06)), #fff;
  border: 1px solid rgba(15, 155, 142, 0.16);
}

.panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min(220px, 72vw);
  min-height: 124px;
  padding: 22px;
  color: #fff;
  background: linear-gradient(135deg, #3758f9 0%, #6fb1fc 100%);
  box-shadow: 0 24px 54px rgba(55, 88, 249, 0.24);
}

.panel strong {
  font-size: 1.1rem;
}

.panel span {
  margin-top: 8px;
  line-height: 1.4;
  opacity: 0.9;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.chip {
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.88rem;
  color: #14554a;
  background: rgba(15, 155, 142, 0.1);
  border: 1px solid rgba(15, 155, 142, 0.12);
}

.meta {
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
  font-size: 0.9rem;
  color: #32685e;
}

.meta code {
  padding: 2px 6px;
  border-radius: 999px;
  background: rgba(15, 155, 142, 0.12);
}

@media (max-width: 720px) {
  .demo-header,
  .meta {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
