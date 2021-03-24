export interface TodoTask {
  id: number;
  user_id: number;
  node_id: number;
  _assign_to_child_nodes: boolean;
}

export type TodoTaskCreate = Partial<TodoTask> & Pick<TodoTask, 'user_id' | 'node_id'>;
