"use client";

import { FolderKanban, MessageSquare, TrendingUp, Clock, Database } from "lucide-react";

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
}

interface RecentActivity {
  id: string;
  type: "project" | "chat";
  message: string;
  time: string;
}

const stats: StatCard[] = [
  {
    title: "Total Projects",
    value: "12",
    change: "+2 this month",
    icon: FolderKanban,
  },
  {
    title: "Total Conversations",
    value: "1,234",
    change: "+124 this week",
    icon: MessageSquare,
  },
  {
    title: "Queries Made",
    value: "8,456",
    change: "+892 this week",
    icon: TrendingUp,
  },
  {
    title: "Active Connections",
    value: "8",
    change: "All systems operational",
    icon: Database,
  },
];

const recentActivities: RecentActivity[] = [
  {
    id: "1",
    type: "project",
    message: "Created new project 'E-commerce Analytics'",
    time: "2 hours ago",
  },
  {
    id: "2",
    type: "chat",
    message: "Had 23 conversations in 'Production DB'",
    time: "5 hours ago",
  },
  {
    id: "3",
    type: "project",
    message: "Connected to MySQL database 'Analytics'",
    time: "1 day ago",
  },
  {
    id: "4",
    type: "chat",
    message: "Query results: 'Top 10 customers by revenue'",
    time: "2 days ago",
  },
];

export default function Dashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Welcome back! Here's an overview of your account
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="mt-4 text-2xl font-bold">{stat.value}</h3>
              <p className="mt-1 text-sm font-medium text-foreground">{stat.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
            </div>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <div className="mt-4 space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 rounded-lg border border-border bg-muted/30 p-4"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    activity.type === "project"
                      ? "bg-blue-500/10 text-blue-500"
                      : "bg-purple-500/10 text-purple-500"
                  }`}
                >
                  {activity.type === "project" ? (
                    <FolderKanban className="h-5 w-5" />
                  ) : (
                    <MessageSquare className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4 text-left transition-colors hover:border-primary/50 hover:bg-muted/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FolderKanban className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">New Project</p>
                <p className="text-xs text-muted-foreground">Connect a database</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4 text-left transition-colors hover:border-primary/50 hover:bg-muted/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">New Chat</p>
                <p className="text-xs text-muted-foreground">Query your data</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4 text-left transition-colors hover:border-primary/50 hover:bg-muted/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                <Database className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Browse Data</p>
                <p className="text-xs text-muted-foreground">View tables & schema</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4 text-left transition-colors hover:border-primary/50 hover:bg-muted/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Analytics</p>
                <p className="text-xs text-muted-foreground">View insights</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
