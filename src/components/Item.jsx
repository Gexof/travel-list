function Item({ item }) {
  return (
    <li>
      <span className={item.packed ? "line-through" : ""}>
        {item.quantity}
        {item.description}
      </span>

      <button>X</button>
    </li>
  );
}

export default Item;
