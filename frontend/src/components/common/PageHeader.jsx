import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "../../constants/icons";
export const PageHeader = ({title}) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 items-center">
      <div>
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="h-7 w-7 cursor-pointer text-primary"
        />
      </div>

      <h1 className="text-center text-xl font-semibold text-primary tracking-wide">
        {title}
      </h1>

      <div />
    </div>
  );
};
