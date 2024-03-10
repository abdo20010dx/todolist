import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodolistModule } from './modules/todolist/todolist.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormOptions } from './database/ormconfig';
import { Todolist } from './modules/todolist/entities/todolist.entity';
import { CreateTodolistInput } from './modules/todolist/dto/create-todolist.input';
@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: [TodolistModule],
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    TodolistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
