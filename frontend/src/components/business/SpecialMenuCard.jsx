export const SpecialMenuCard = ({ item }) => {
  return (
    <div className="w-72 shrink-0 snap-start overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="flex h-full">
        <img
          src={item.image}
          alt={item.name}
          className="h-32 w-32 object-cover"
        />

        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <h3 className="line-clamp-2 text-lg font-semibold text-primary">
              {item.name}
            </h3>
          </div>

          <p className="text-2xl font-bold text-primary">₹{item.price}</p>
        </div>
      </div>
    </div>
  );
};
