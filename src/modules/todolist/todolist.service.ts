import { Inject, Injectable } from '@nestjs/common';
import { CreateTodolistInput } from './dto/create-todolist.input';
import { UpdateTodolistInput } from './dto/update-todolist.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Todolist } from './entities/todolist.entity';
import { Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class TodolistService {
  constructor(
    @InjectRepository(Todolist) private todolistRep: Repository<Todolist>,
    @Inject(REQUEST) private request: any,
  ) { }
  async create(createTodolistInput: CreateTodolistInput) {
    return await this.todolistRep.save(createTodolistInput);
  }

  async findAll() {
    return await this.todolistRep.find();
  }

  async findOne(id: number) {
    return await this.todolistRep.findOne({ where: { id } });
  }

  async update(id: number, updateTodolistInput: UpdateTodolistInput) {
    return await this.todolistRep.update({ id }, updateTodolistInput)
  }

  async remove(id: number) {
    return await this.todolistRep.delete({ id })
  }
}
