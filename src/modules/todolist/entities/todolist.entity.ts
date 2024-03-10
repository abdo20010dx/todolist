import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
@Entity({ name: "todolist" })
@ObjectType()
export class Todolist {
  @Field()
  @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
  id?: number;

  @Field()
  @Column({ name: "user_id", type: "bigint", nullable: false })
  user_id: number | null

  @Field()
  @Column({ name: "task", type: "text", nullable: true })
  task?: string | null

  @Field()
  @CreateDateColumn({ name: "created_at", nullable: true })
  created_at?: Date | null;

  @Field()
  @UpdateDateColumn({ name: "updated_at", nullable: true })
  updated_at?: Date | null;

  @Field()
  @DeleteDateColumn({ name: "deleted_at", nullable: true })
  deleted_at?: Date | null;
}