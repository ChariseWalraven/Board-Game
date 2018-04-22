import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { defaultBoard } from'../lib/color'
import { IsString, IsIn } from 'class-validator'

const colors = ['red', 'green', 'blue', 'yellow', 'magenta']

const isValidColor = (color) => {
  return colors.includes(color)
}

@Entity()
export default class Game extends BaseEntity {

@PrimaryGeneratedColumn({readonly: true})
id: number

@IsString()
@Column('text', {nullable: false})
name: string

// @IsIn(values: ['red', 'green', 'blue', 'yellow', 'magenta'])
@Column('text', {nullable: false})
color: string

@Column('json', {default: defaultBoard})
board: string


}