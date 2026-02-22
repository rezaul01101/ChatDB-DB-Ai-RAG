"use client";

import { useState, useEffect } from "react";
import { Plus, FolderKanban, Clock, Database, MoreVertical, Server } from "lucide-react";
import { CreateProjectForm } from "./components/CreateProjectForm";
import Link from "next/link";

interface Project {
  id: string;
  projectName: string;
  databaseType: string;
  host: string;
  port: string;
  databaseName: string;
  username: string;
  selectedTables: string[];
  createdAt: string;
}

export default function ProjectsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:5003/api/v1/rag/projects");
      const result = await response.json();
      if (result.success) {
        setProjects(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  

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
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Create Project
        </button>
      </div>

      {/* Projects List */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-muted-foreground">Loading projects...</div>
        </div>
      ) : projects.length > 0 ? (
        <div className="space-y-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FolderKanban className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{project.projectName}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Database className="h-3.5 w-3.5" />
                        <span className="capitalize">{project.databaseType}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Server className="h-3.5 w-3.5" />
                        {project.host}:{project.port}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FolderKanban className="h-3.5 w-3.5" />
                        {project.selectedTables.length} tables
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {new Date(project.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ">
                  <Link href={`/projects/${project.id}`} className="cursor-pointer rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/70 hover:border-primary/50">
                    Open Project
                  </Link>
                  <button className="cursor-pointer rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>
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
        <CreateProjectForm
          onClose={() => {
            setIsCreateModalOpen(false);
            fetchProjects();
          }}
        />
      )}
    </div>
  );
}
