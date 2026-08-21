export interface Env {
  DB: D1Database;
}

export interface D1Database {
  prepare(query: string): {
    bind(...params: (string | number | null)[]): {
      first(): Promise<unknown>;
      all(): Promise<{
        results: unknown[];
        success: boolean;
        meta: { last_row_id?: number };
      }>;
      run(): Promise<{
        success: boolean;
        meta: { last_row_id?: number };
      }>;
    };
  };
}
