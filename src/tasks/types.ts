export type Task = {
  id: number;
  mother_id: number;
  name: string;
  node_path: string;
  view_id: string;
  jira_id: number | null;
  sort_order: number;
  ultimate_mother_id: number;
  is_done: boolean;
  view_order: number | null;
  icon_name: string;
  initial_duration: number;
  target_duration: number;
  begin: string | null;
  deadline: string | null;
  object_type: string;
  notes: string;
  client_id: number;
  t_iv_1: string | null;
  t_iv_2: string | null;
  t_iv_3: string | null;
  t_iv_4: string | null;
  t_iv_5: string | null;
  t_iv_6: string | null;
  approve_by_project_leader: boolean;
  is_blocked: boolean;
  is_hidden: boolean;
  restrict_tracking_from_to: boolean;
  duration: number;
  is_startable: boolean;
  is_paid_non_working: boolean;
};

export type TaskCreate = Omit<Task, 'id' | 'node_path' | 'view_id'>;
