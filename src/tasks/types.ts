export type Task = {
  id: number;
  mother_id: number;
  name: string;
  node_path: string;
  view_id: string;
  jira_id?: number;
  sort_order?: number;
  ultimate_mother_id?: number;
  is_done?: boolean;
  view_order?: number;
  icon_name?: string;
  initial_duration?: number;
  target_duration?: number;
  begin?: string;
  deadline?: string;
  object_type?: string;
  notes?: string;
  client_id?: number;
  t_iv_1?: string;
  t_iv_2?: string;
  t_iv_3?: string;
  t_iv_4?: string;
  t_iv_5?: string;
  t_iv_6?: string;
  approve_by_project_leader?: boolean;
  is_blocked?: boolean;
  is_hidden?: boolean;
  restrict_tracking_from_to?: boolean;
  duration?: number;
  is_startable?: boolean;
  is_paid_non_working?: boolean;
};

export interface TaskCreate extends Omit<Task, 'id' | 'node_path' | 'view_id'> {}
