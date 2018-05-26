import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { defaultBoard } from'../lib/color'
import { IsString, IsIn } from 'class-validator'

type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'magenta'
const colors = ['red', 'green', 'blue', 'yellow', 'magenta']


@Entity()
export default class Game extends BaseEntity {

@PrimaryGeneratedColumn()
id: number

@IsString()
@Column('text', {nullable: false})
name: string

@Column('text', {nullable: false})
color: Colors

@Column('json', {default: defaultBoard})
board: string


}