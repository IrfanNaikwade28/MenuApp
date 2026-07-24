export const CuisineCard = ({CuisineCardImage, CuisineCardName}) => {
  return (
    <div className="flex flex-col items-center gap-2 min-w-18">
      <div className="flex h-18 w-18 items-center justify-center rounded-xl border border-gray-200 bg-back-secondary shadow-sm">
        <img
          src={CuisineCardImage}
          alt=""
          className="h-14 w-14 object-contain"
        />
      </div>

      <p className="text-center text-xs font-medium text-primary">
       {CuisineCardName}
      </p>
    </div>
  )
}
