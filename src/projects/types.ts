import { ProjectStatus } from '../enums';

export type Project = {
  id: number;
  mother_id: number;
  view_id: string;
  name: string;
  sort_order: number;
  node_path: string;
  ultimate_mother_id: number;
  is_done: boolean;
  view_order: number;
  icon_name: string;
  custom_icon_name: string;
  initial_duration: number;
  target_duration: number;
  begin: string | null;
  deadline: string | null;
  object_type: 'subproject';
  notes: string;
  client_id: number;
  t_iv_1: string | null;
  t_iv_2: string | null;
  t_iv_3: string | null;
  t_iv_4: string | null;
  t_iv_5: string | null;
  t_iv_6: string | null;
  approve_by_project_leader: boolean;
  duration: number;
  color: string;
  has_children: boolean;
  translate_task_name: number;
  allow_task_project_edit: boolean;
  allow_task_project_delete: boolean;
  status: ProjectStatus;
  external_id: string;
  is_restricted: boolean;
  project_leader_id: number;
  budget: number;
  last_started: string | null;
  target_duration_sum_up_by_task: boolean;
};
