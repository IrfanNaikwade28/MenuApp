export const SpecialMenuCard = ({ item }) => {
  return (
    <div className="w-72 h-28 shrink-0 snap-start overflow-hidden rounded-xl border border-gray-200 bg-back-secondary">
      <div className="flex h-full">
        <img
          src={item.image}
          alt={item.name}
          className="h-28 w-28 object-cover p-2 rounded-2xl"
        />

        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <h3 className="line-clamp-2 text-base font-semibold text-primary leading-none">
              {item.name}
            </h3>
          </div>

          <p className="text-xl font-semibold text-primary">Rs.{item.price}/-</p>
        </div>
      </div>
    </div>
  );
};
