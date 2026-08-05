import { useNavigate } from "react-router-dom";
import { settings } from "../../constants/settings";
import { SettingsItem } from "../../components/profile/SettingsItem";
import { PageHeader } from "../../components/common/PageHeader";
import { ProfileCard } from "../../components/profile/ProfileCard";

export const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className="px-3 pt-3">
      <PageHeader title={"Profile"} />
      <ProfileCard
        image={null}
        name={"Guest User"}
        description={
          "Sign in to sync your facourites and access your account across devices."
        }
        buttonText="Sign In"
      />
      <div className="mt-4 flex flex-col gap-2 pb-28">
        {settings.length > 0 &&
          settings.map((item) => (
            <SettingsItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              onClick={() => navigate(item.route)}
            />
          ))}
      </div>
    </div>
  );
};
