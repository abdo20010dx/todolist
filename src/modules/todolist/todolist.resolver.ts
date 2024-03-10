import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodolistService } from './todolist.service';
import { Todolist } from './entities/todolist.entity';
import { CreateTodolistInput } from './dto/create-todolist.input';
import { UpdateTodolistInput } from './dto/update-todolist.input';

@Resolver(() => Todolist)
export class TodolistResolver {
  constructor(private readonly todolistService: TodolistService) { }

  @Mutation(() => Todolist)
  createTodolist(@Args('createTodolistInput') createTodolistInput: CreateTodolistInput) {
    return this.todolistService.create(createTodolistInput);
  }

  @Query(() => [Todolist], { name: 'allTodolist' })
  findAll() {
    return this.todolistService.findAll();
  }

  @Query(() => Todolist, { name: 'todolist' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todolistService.findOne(id);
  }

  @Mutation(() => Todolist)
  updateTodolist(@Args('updateTodolistInput') updateTodolistInput: UpdateTodolistInput) {
    return this.todolistService.update(updateTodolistInput.id, updateTodolistInput);
  }

  @Mutation(() => Todolist)
  removeTodolist(@Args('id', { type: () => Int }) id: number) {
    return this.todolistService.remove(id);
  }
}
