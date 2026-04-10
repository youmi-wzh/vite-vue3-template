<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const stageRef = ref(null);
const orbRef = ref(null);
const isExpanded = ref(false);
const lastAction = ref("idle");

let activeAnimation = null;

function playAnimation(keyframes, options) {
  if (!orbRef.value) return;

  activeAnimation?.cancel();
  activeAnimation = orbRef.value.animate(keyframes, {
    fill: "forwards",
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    ...options,
  });
}

function toggleState() {
  isExpanded.value = !isExpanded.value;
  lastAction.value = isExpanded.value ? "expand" : "collapse";

  playAnimation(
    [
      {
        transform: isExpanded.value ? "translate3d(0, 0, 0) scale(1)" : "translate3d(170px, -34px, 0) scale(1.18)",
        borderRadius: isExpanded.value ? "28px" : "48px",
        background: isExpanded.value
          ? "linear-gradient(135deg, #ff8f70 0%, #ff3d54 100%)"
          : "linear-gradient(135deg, #0f9b8e 0%, #38ef7d 100%)",
        boxShadow: isExpanded.value ? "0 18px 44px rgba(255, 61, 84, 0.35)" : "0 22px 54px rgba(15, 155, 142, 0.35)",
      },
    ],
    { duration: 520 },
  );
}

function replayEntrance() {
  lastAction.value = "entrance";
  playAnimation(
    [
      { transform: "translate3d(-120px, 64px, 0) scale(0.7)", opacity: 0.2, offset: 0 },
      { transform: "translate3d(24px, -18px, 0) scale(1.08)", opacity: 1, offset: 0.68 },
      {
        transform: isExpanded.value ? "translate3d(170px, -34px, 0) scale(1.18)" : "translate3d(0, 0, 0) scale(1)",
        opacity: 1,
        offset: 1,
      },
    ],
    { duration: 900 },
  );
}

onMounted(() => {
  replayEntrance();
});

onBeforeUnmount(() => {
  activeAnimation?.cancel();
});
</script>

<template>
  <section class="demo-card">
    <header class="demo-header">
      <div>
        <p class="eyebrow">WAAPI</p>
        <h3>Native keyframes with direct element control</h3>
      </div>
      <div class="actions">
        <button type="button" @click="toggleState">
          {{ isExpanded ? "Collapse" : "Expand" }}
        </button>
        <button type="button" class="ghost" @click="replayEntrance">Replay intro</button>
      </div>
    </header>

    <div ref="stageRef" class="stage">
      <div class="stage-grid"></div>
      <div ref="orbRef" class="orb">
        <span>WAAPI</span>
      </div>
      <div class="marker marker-start">origin</div>
      <div class="marker marker-end">target</div>
    </div>

    <div class="meta">
      <span>Last action: {{ lastAction }}</span>
      <span>
        API:
        <code>element.animate(keyframes, options)</code>
      </span>
    </div>
  </section>
</template>

<style scoped lang="scss">
.demo-card {
  padding: 24px;
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 247, 245, 0.92)),
    radial-gradient(circle at top left, rgba(255, 143, 112, 0.22), transparent 42%);
  box-shadow: 0 30px 90px rgba(155, 69, 42, 0.12);
}

.demo-header,
.actions,
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
  color: #222;
}

.eyebrow {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ff5c45;
}

.actions {
  gap: 10px;
}

.ghost {
  background: #fff3ee;
  color: #b54b2e;
}

.stage {
  position: relative;
  overflow: hidden;
  min-height: 260px;
  padding: 20px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255, 143, 112, 0.12), rgba(255, 61, 84, 0.08)), #fff;
  border: 1px solid rgba(255, 143, 112, 0.2);
}

.stage-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(181, 75, 46, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(181, 75, 46, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
}

.orb {
  position: absolute;
  top: 148px;
  left: 34px;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 92px;
  height: 92px;
  border-radius: 28px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.08em;
  background: linear-gradient(135deg, #ff8f70 0%, #ff3d54 100%);
  box-shadow: 0 18px 44px rgba(255, 61, 84, 0.35);
}

.marker {
  position: absolute;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.8rem;
  color: #6d4d46;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(10px);
}

.marker-start {
  top: 190px;
  left: 24px;
}

.marker-end {
  top: 26px;
  right: 24px;
}

.meta {
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
  font-size: 0.9rem;
  color: #6d4d46;
}

.meta code {
  padding: 2px 6px;
  border-radius: 999px;
  background: rgba(255, 92, 69, 0.12);
}

@media (max-width: 720px) {
  .demo-header,
  .meta {
    align-items: flex-start;
    flex-direction: column;
  }

  .actions {
    width: 100%;
  }

  .actions button {
    flex: 1;
  }
}
</style>
