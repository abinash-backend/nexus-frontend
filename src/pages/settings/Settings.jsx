import SettingsHeader from "@/components/settings/SettingsHeader";
import GeneralSettings from "@/components/settings/GeneralSettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";

function Settings() {
  return (
    <div className="space-y-8">

      <SettingsHeader />

      <GeneralSettings />

      <AppearanceSettings />

      <NotificationSettings />

    </div>
  );
}

export default Settings;