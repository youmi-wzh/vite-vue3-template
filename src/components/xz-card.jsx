import { defineComponent } from "vue";

export default defineComponent({
  name: "XzCard",
  props: {
    title: {
      type: String,
      default: "User List",
    },
    content: {
      type: String,
      default: "",
    },
    code: {
      type: String,
      default: "",
    },
  },
  setup(props, { slots }) {
    const isExpanded = ref(false);
    return () => (
      <div class="xz-card">
        <div class="xz-card-header">
          {slots.header ? slots.header() : <h3>{`${props.title}`}</h3>}
          <button onClick={() => (isExpanded.value = !isExpanded.value)}>
            {isExpanded.value ? "Collapse" : "Expand"}
          </button>
        </div>
        <div class="xz-card-content">{slots.default ? slots.default() : props.content}</div>
        {isExpanded.value && (
          <div class="xz-card-code">
            {slots.expanded ? (
              slots.expanded()
            ) : (
              <pre>
                <code class="language-js">{props.code}</code>
              </pre>
            )}
          </div>
        )}
      </div>
    );
  },
});
