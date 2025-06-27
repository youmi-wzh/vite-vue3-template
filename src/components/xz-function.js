export default function FunctionalComponent(props) {
  return h("div", [h("p", props.message), h("span", props.name)]);
}
