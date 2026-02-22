import { prisma } from "../../../shared/prisma";
import { User } from "../../../generated/prisma/client";
import { LedgerType } from "./rag.interface";
import { Client } from "pg";

const connectDBService = async (dbData: any) => {
  console.log(dbData);
  const { host, port, databaseName, username, password, useSSL, databaseType } =
    dbData;
  const connectionString = `postgresql://${username}:${password}@${host}:${port}/${databaseName}?sslmode=${useSSL ? "require" : "disable"}`;
  const client = new Client({ connectionString });
  await client.connect();

  // Get all tables in the database with row counts
  const query = `
    SELECT
      t.table_name,
      t.table_schema,
      COALESCE(s.n_live_tup, 0) as row_count
    FROM information_schema.tables t
    LEFT JOIN pg_stat_user_tables s
      ON s.schemaname = t.table_schema
      AND s.relname = t.table_name
    WHERE t.table_schema NOT IN ('pg_catalog', 'information_schema')
    ORDER BY t.table_schema, t.table_name;
  `;

  const result = await client.query(query);

  // Close the connection
  await client.end();

  return {
    success: true,
    tables: result.rows,
    count: result.rows.length,
  };
};

const createProjectService = async (projectData: any) => {
  console.log(projectData);

  // Map the incoming data to match Prisma schema field names
  const data: any = {
    projectName: projectData.projectName || projectData.project_name,
    databaseType: projectData.databaseType || projectData.database_type,
    host: projectData.host,
    port: projectData.port ? String(projectData.port) : null,
    databaseName: projectData.databaseName || projectData.database_name,
    username: projectData.username,
    password: projectData.password,
    useSSL: projectData.useSSL ?? projectData.use_ssl ?? false,
    selectedTables: projectData.selectedTables || projectData.selected_tables || [],
    userId: 1,
  };

  const result = await prisma.projects.create({
    data,
  });
  return result;
};

const getProjectsService = async () => {
  const result = await prisma.projects.findMany();
  return result;
};

export const RagService = {
  connectDBService,
  createProjectService,
  getProjectsService,
};
