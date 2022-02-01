export class CreateTodoDto {
  name: string;
  status: boolean;
}

export class UpdateTodoDto {
  name?: string;
  status?: boolean;
}
