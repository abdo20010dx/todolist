import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodolistInput {
  @Field({ description: "the user id of this task" })
  user_id: number | null

  @Field({ description: "the content of this task" })
  task?: string | null
}
