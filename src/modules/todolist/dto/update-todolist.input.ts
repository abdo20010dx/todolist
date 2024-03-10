import { CreateTodolistInput } from './create-todolist.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTodolistInput extends PartialType(CreateTodolistInput) {
  @Field(() => Int)
  id: number;
}
