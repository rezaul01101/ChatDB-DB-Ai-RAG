"use client";

import { useState } from "react";
import { Plus, FolderKanban, Clock, Database, MoreVertical } from "lucide-react";
import { CreateProjectForm } from "./components/CreateProjectForm";

interface Project {
  id: string;
  name: string;
  databaseType: string;
  tablesCount: number;
  createdAt: string;
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "E-commerce Production",
    databaseType: "postgresql",
    tablesCount: 12,
    createdAt: "2 hours ago",
  },
  {
    id: "2",
    name: "Analytics Database",
    databaseType: "mysql",
    tablesCount: 8,
    createdAt: "1 day ago",
  },
];

export default function ProjectsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your database projects and connections
        </p>
      </div>

      {/* Actions */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              className="w-64 rounded-lg border border-border bg-background pl-10 pr-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
        >
          <Plus className="h-4 w-4" />
          Create Project
        </button>
      </div>

      {/* Projects Grid */}
      {mockProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FolderKanban className="h-6 w-6" />
                </div>
                <button className="rounded-lg p-1.5 text-muted-foreground opacity-0 transition-opacity hover:bg-muted group-hover:opacity-100">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{project.name}</h3>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Database className="h-4 w-4" />
                  <span className="capitalize">{project.databaseType}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FolderKanban className="h-4 w-4" />
                  <span>{project.tablesCount} tables</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Created {project.createdAt}</span>
                </div>
              </div>
              <button className="mt-4 w-full rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/70 hover:border-primary/50">
                Open Project
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border py-16">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <FolderKanban className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">No projects yet</h3>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Create your first project to get started with ChatDB AI
          </p>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="mt-6 flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            <Plus className="h-4 w-4" />
            Create Your First Project
          </button>
        </div>
      )}

      {/* Create Project Modal */}
      {isCreateModalOpen && (
        <CreateProjectForm onClose={() => setIsCreateModalOpen(false)} />
      )}
    </div>
  );
}
