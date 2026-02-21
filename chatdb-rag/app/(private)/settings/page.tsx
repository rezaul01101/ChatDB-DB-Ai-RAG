"use client";

import { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Key,
  Globe,
  Palette,
  ChevronRight,
  Mail,
  Camera
} from "lucide-react";

interface SettingSection {
  id: string;
  title: string;
  icon: React.ElementType;
  items: SettingItem[];
}

interface SettingItem {
  id: string;
  label: string;
  description: string;
  type: "navigation" | "toggle" | "input";
  value?: boolean | string;
}

const settingSections: SettingSection[] = [
  {
    id: "profile",
    title: "Profile",
    icon: User,
    items: [
      {
        id: "avatar",
        label: "Avatar",
        description: "Change your profile picture",
        type: "navigation",
      },
      {
        id: "name",
        label: "Display Name",
        description: "John Doe",
        type: "navigation",
      },
      {
        id: "email",
        label: "Email",
        description: "john@example.com",
        type: "navigation",
      },
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    icon: Bell,
    items: [
      {
        id: "email-notifications",
        label: "Email Notifications",
        description: "Receive updates via email",
        type: "toggle",
        value: true,
      },
      {
        id: "push-notifications",
        label: "Push Notifications",
        description: "Receive push notifications",
        type: "toggle",
        value: false,
      },
      {
        id: "project-updates",
        label: "Project Updates",
        description: "Get notified about project changes",
        type: "toggle",
        value: true,
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: Shield,
    items: [
      {
        id: "password",
        label: "Change Password",
        description: "Update your password",
        type: "navigation",
      },
      {
        id: "two-factor",
        label: "Two-Factor Authentication",
        description: "Add an extra layer of security",
        type: "toggle",
        value: false,
      },
      {
        id: "api-keys",
        label: "API Keys",
        description: "Manage your API keys",
        type: "navigation",
      },
    ],
  },
  {
    id: "preferences",
    title: "Preferences",
    icon: Palette,
    items: [
      {
        id: "theme",
        label: "Theme",
        description: "System",
        type: "navigation",
      },
      {
        id: "language",
        label: "Language",
        description: "English (US)",
        type: "navigation",
      },
      {
        id: "timezone",
        label: "Timezone",
        description: "UTC-5 (Eastern Time)",
        type: "navigation",
      },
    ],
  },
];

export default function SettingsPage() {
  const [sections, setSections] = useState(settingSections);

  const handleToggleChange = (sectionId: string, itemId: string) => {
    setSections((prev) =>
      prev.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.map((item) => {
              if (item.id === itemId && typeof item.value === "boolean") {
                return { ...item, value: !item.value };
              }
              return item;
            }),
          };
        }
        return section;
      })
    );
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your account and preferences
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {sections.map((section) => {
          const SectionIcon = section.icon;
          return (
            <div key={section.id} className="rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 border-b border-border p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <SectionIcon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold">{section.title}</h2>
              </div>
              <div className="divide-y divide-border">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-6 transition-colors hover:bg-muted/30"
                  >
                    <div className="flex items-center gap-4">
                      {item.id === "avatar" && (
                        <div className="relative">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <User className="h-6 w-6" />
                          </div>
                          <button className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                            <Camera className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {item.type === "toggle" ? (
                      <button
                        onClick={() => handleToggleChange(section.id, item.id)}
                        className={`relative h-6 w-11 rounded-full transition-colors ${
                          item.value ? "bg-primary" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                            item.value ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Danger Zone */}
        <div className="rounded-xl border border-red-500/20 bg-red-500/5">
          <div className="border-b border-red-500/20 p-6">
            <h2 className="text-lg font-semibold text-red-600 dark:text-red-400">
              Danger Zone
            </h2>
          </div>
          <div className="divide-y divide-red-500/20">
            <div className="flex items-center justify-between p-6">
              <div>
                <p className="font-medium">Delete Account</p>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all data
                </p>
              </div>
              <button className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-500/20 dark:text-red-400">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
