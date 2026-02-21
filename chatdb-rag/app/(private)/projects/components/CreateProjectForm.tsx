"use client";

import { useState } from "react";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Check,
  Database,
  Server,
  Table
} from "lucide-react";

interface Table {
  table_name: string;
  table_schema: string;
  row_count: string;
}

interface CreateProjectFormProps {
  onClose: () => void;
}

const steps = [
  { id: 1, title: "Project Info", icon: Database },
  { id: 2, title: "Database Type", icon: Database },
  { id: 3, title: "Connection", icon: Server },
  { id: 4, title: "Select Tables", icon: Table },
];

const databaseOptions = [
  { value: "postgresql", label: "PostgreSQL", description: "Advanced open source database" },
  { value: "mysql", label: "MySQL", description: "Popular open source database" },
  { value: "mongodb", label: "MongoDB", description: "Document-oriented database" },
  { value: "sqlite", label: "SQLite", description: "Lightweight disk-based database" },
];

export function CreateProjectForm({ onClose }: CreateProjectFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "success" | "error">("idle");
  const [isLoadingTables, setIsLoadingTables] = useState(false);
  const [fetchedTables, setFetchedTables] = useState<Table[]>([]);

  // Form state
  const [formData, setFormData] = useState({
    projectName: "",
    databaseType: "",
    host: "",
    port: "5432",
    databaseName: "",
    username: "",
    password: "",
    useSSL: false,
    selectedTables: [] as string[],
  });

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updatePortForDatabase = (type: string) => {
    const portMap: Record<string, string> = {
      postgresql: "5432",
      mysql: "3306",
      mongodb: "27017",
      sqlite: "",
    };
    setFormData(prev => ({ ...prev, port: portMap[type] || "" }));
  };

  const handleDatabaseTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, databaseType: value }));
    updatePortForDatabase(value);
    setErrors(prev => ({ ...prev, databaseType: "" }));
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const handleTestConnection = async () => {
    setIsTestingConnection(true);
    setConnectionStatus("idle");

    // Simulate connection test
    setTimeout(() => {
      setIsTestingConnection(false);
      setConnectionStatus("success");
    }, 2000);
  };

  const toggleTableSelection = (tableName: string) => {
    setFormData(prev => {
      const currentSelected = prev.selectedTables || [];
      if (currentSelected.includes(tableName)) {
        return { ...prev, selectedTables: currentSelected.filter((t) => t !== tableName) };
      } else {
        return { ...prev, selectedTables: [...currentSelected, tableName] };
      }
    });
    setErrors(prev => ({ ...prev, selectedTables: "" }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.projectName.trim()) {
        newErrors.projectName = "Project name is required";
      }
    } else if (step === 2) {
      if (!formData.databaseType) {
        newErrors.databaseType = "Please select a database type";
      }
    } else if (step === 3) {
      if (!formData.host.trim()) newErrors.host = "Host is required";
      if (!formData.port.trim()) newErrors.port = "Port is required";
      if (!formData.databaseName.trim()) newErrors.databaseName = "Database name is required";
      if (!formData.username.trim()) newErrors.username = "Username is required";
      if (!formData.password.trim()) newErrors.password = "Password is required";
    } else if (step === 4) {
      if (!formData.selectedTables || formData.selectedTables.length === 0) {
        newErrors.selectedTables = "Please select at least one table";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      console.log("Form submitted:", formData);
      // Handle project creation
      // onClose();
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < steps.length) {
      if(currentStep==3){
        console.log(currentStep)
        handleConnection()
      }else{
        setCurrentStep(currentStep + 1);
      }
      
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConnection = async () => {
    setIsLoadingTables(true);
    try {
      const response = await fetch("http://localhost:5003/api/v1/rag/connect-db", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          host: formData.host,
          port: formData.port,
          databaseName: formData.databaseName,
          username: formData.username,
          password: formData.password,
        }),
      });

      const result = await response.json();
      if (result.success && result.data?.tables) {
        setFetchedTables(result.data.tables);
        setCurrentStep(currentStep + 1);
      } else {
        setErrors({ connection: "Failed to connect to database" });
      }
    } catch (error) {
      console.error("Connection error:", error);
      setErrors({ connection: "Failed to connect to database" });
    } finally {
      setIsLoadingTables(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-card shadow-xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="text-xl font-semibold">Create New Project</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="border-b border-border p-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;

              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                        isCompleted
                          ? "border-primary bg-primary text-primary-foreground"
                          : isCurrent
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-muted text-muted-foreground"
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <StepIcon className="h-5 w-5" />
                      )}
                    </div>
                    <span
                      className={`mt-2 text-xs font-medium ${
                        isCurrent ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 w-12 mx-2 transition-colors ${
                        isCompleted ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={onSubmit}>
          <div className="p-6">
            {/* Step 1: Project Info */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Project Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Give your project a name to get started
                  </p>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Project Name</label>
                  <input
                    value={formData.projectName}
                    onChange={(e) => handleInputChange("projectName", e.target.value)}
                    type="text"
                    placeholder="e.g., My E-commerce Database"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  {errors.projectName && (
                    <p className="mt-1 text-sm text-red-500">{errors.projectName}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Database Selection */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Select Database Type</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose the type of database you want to connect
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {databaseOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleDatabaseTypeChange(option.value)}
                      className={`flex flex-col items-start rounded-lg border-2 p-4 text-left transition-colors ${
                        formData.databaseType === option.value
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:border-primary/50"
                      }`}
                    >
                      <span className="font-medium">{option.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {option.description}
                      </span>
                    </button>
                  ))}
                </div>
                {errors.databaseType && (
                  <p className="text-sm text-red-500">{errors.databaseType}</p>
                )}
              </div>
            )}

            {/* Step 3: Database Connection */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Database Connection</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter your database connection details
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Host</label>
                    <input
                      value={formData.host}
                      onChange={(e) => handleInputChange("host", e.target.value)}
                      type="text"
                      placeholder="localhost"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {errors.host && (
                      <p className="mt-1 text-sm text-red-500">{errors.host}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Port</label>
                    <input
                      value={formData.port}
                      onChange={(e) => handleInputChange("port", e.target.value)}
                      type="text"
                      placeholder="5432"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {errors.port && (
                      <p className="mt-1 text-sm text-red-500">{errors.port}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Database Name</label>
                  <input
                    value={formData.databaseName}
                    onChange={(e) => handleInputChange("databaseName", e.target.value)}
                    type="text"
                    placeholder="mydb"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  {errors.databaseName && (
                    <p className="mt-1 text-sm text-red-500">{errors.databaseName}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Username</label>
                    <input
                      value={formData.username}
                      onChange={(e) => handleInputChange("username", e.target.value)}
                      type="text"
                      placeholder="postgres"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {errors.username && (
                      <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Password</label>
                    <input
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4">
                  <input
                    checked={formData.useSSL}
                    onChange={(e) => handleInputChange("useSSL", e.target.checked)}
                    type="checkbox"
                    id="useSSL"
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <label htmlFor="useSSL" className="text-sm font-medium">
                    Use SSL Connection
                  </label>
                </div>

                {/* Test Connection Button */}
                <button
                  type="button"
                  onClick={handleTestConnection}
                  disabled={isTestingConnection}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    connectionStatus === "success"
                      ? "bg-green-500/10 text-green-600 border border-green-500/20"
                      : "bg-muted text-muted-foreground hover:bg-muted/70"
                  }`}
                >
                  {isTestingConnection ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                      Testing...
                    </>
                  ) : connectionStatus === "success" ? (
                    <>
                      <Check className="h-4 w-4" />
                      Connection Successful
                    </>
                  ) : (
                    "Test Connection"
                  )}
                </button>
              </div>
            )}

            {/* Step 4: Select Tables */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Select Tables</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose the tables you want to include in your project
                  </p>
                </div>
                {isLoadingTables ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                  </div>
                ) : (
                  <>
                    <div className="space-y-2 grid grid-cols-2 gap-2">
                      {fetchedTables.map((table) => (
                        <button
                          key={table.table_name}
                          type="button"
                          onClick={() => toggleTableSelection(table.table_name)}
                          className={`flex items-center justify-between rounded-lg border-2 p-4 text-left transition-colors cursor-pointer ${
                            formData.selectedTables.includes(table.table_name)
                              ? "border-primary bg-primary/5"
                              : "border-border bg-card hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${
                                formData.selectedTables.includes(table.table_name)
                                  ? "border-primary bg-primary text-white"
                                  : "border-border"
                              }`}
                            >
                              {formData.selectedTables.includes(table.table_name) && <Check className="h-3 w-3" />}
                            </div>
                            <div>
                              <span className="font-medium">{table.table_name}</span>
                              <span className="ml-2 text-xs text-muted-foreground">schema: {table.table_schema}</span>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{table.row_count} rows</span>
                        </button>
                      ))}
                    </div>
                    {errors.selectedTables && (
                      <p className="text-sm text-red-500">{errors.selectedTables}</p>
                    )}
                    {errors.connection && (
                      <p className="text-sm text-red-500">{errors.connection}</p>
                    )}
                    <div className="rounded-lg bg-muted/30 p-4">
                      <p className="text-sm">
                        <span className="font-medium">{formData.selectedTables.length}</span> table(s) selected
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border p-6">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted disabled:opacity-50 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Create Project
                <Check className="h-4 w-4" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
