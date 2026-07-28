export const MenuListItem = ({ item }) => {
  return (
    <div className="flex justify-between">
      <div className="text-sm tracking-wide text-primary">
        {item.name}
      </div>

      <div className="text-sm text-primary">
        ₹{item.price}
      </div>
    </div>
  );
};
