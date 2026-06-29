import ProfileHeader from "@/components/profile/ProfileHeader";
import UserProfileCard from "@/components/profile/UserProfileCard";
import AccountStatistics from "@/components/profile/AccountStatistics";
import SecuritySettings from "@/components/profile/SecuritySettings";

function Profile() {
  return (
    <div className="space-y-8">

      <ProfileHeader />

      <UserProfileCard />

      <AccountStatistics />

      <SecuritySettings />

    </div>
  );
}

export default Profile;