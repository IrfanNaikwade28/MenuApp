const keepInMind = [
  "Menu items and prices are managed directly by the restaurant.",
  "Price may vary based on availability and customization.",
  "Taxes, packaging and delivery charges may apply.",
];

export const KeepInMind = () => {
  return (
    <div className="mt-5 rounded-2xl border border-gray-200 bg-back-secondary px-5 py-3 ">
      <h2 className="text-xl font-bold text-primary">
        Keep In Mind
      </h2>

      <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm leading-4 font-light text-primary">
        {keepInMind.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <button
        className="mt-8 w-full rounded-xl py-3 border border-red-500 text-red-500 font-semibold bg-red-500/7 hover:bg-red-50"
      >
        Report an issue with this menu
      </button>
    </div>
  );
};
