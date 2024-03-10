import { Module } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { TodolistResolver } from './todolist.resolver';
import { Todolist } from './entities/todolist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Todolist])],
  providers: [TodolistResolver, TodolistService]
})
export class TodolistModule { }
