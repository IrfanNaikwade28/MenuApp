import { Phone, Clock } from "../../constants/icons";

export const BusinessInfo = ({ business }) => {
  if (!business) {
    return <div>Its Loading</div>;
  }
  return (
    <div className="mt-2 rounded-2xl border border-gray-200 bg-back-secondary p-5">
      {/* Business Name */}
      <div>
        <h2 className="text-2xl font-bold text-primary">{business.name}</h2>

        <p className="mt-2 text-sm leading-6 text-primary font-light">
          {business.address.full}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-5 flex gap-3">
        <a
          href={`tel:${business.contact.phone}`}
          className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-primary transition-all duration-150 active:scale-105 active:bg-gray-100"
        >
          <Phone className="h-4 w-4" />
          Contact Restaurant
        </a>
      </div>

      {/* Opening Status */}
      <div className="my-5 border-y border-gray-200 py-3">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />

          <span className="font-medium text-green-600">
            {business.openingHours.isOpen ? "Open Now" : "Closed"}
          </span>

          <span className="text-secondary">•</span>

          <span className="text-secondary">
            Closes {business.openingHours.close}
          </span>
        </div>
      </div>

      {/* Legal Information */}
      <div className="space-y-4">
        <div>
          <p className="text-xs text-primary font-extralight">Legal Name</p>

          <h3 className="text-base font-semibold text-primary">
            {business.legal.name}
          </h3>
        </div>

        <div>
          <p className="text-xs text-primary font-extralight">GST Number</p>

          <h3 className="text-base font-semibold text-primary">
            {business.legal.gstNumber}
          </h3>
        </div>

        <div>
          <p className="text-xs text-primary font-extralight">
            FSSAI License No.
          </p>

          <h3 className="text-base font-semibold text-primary">
            {business.legal.fssaiLicense}
          </h3>
        </div>
      </div>
    </div>
  );
};
