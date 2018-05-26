import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { defaultBoard, randomColor } from'../lib/color'
import { IsString, IsIn } from 'class-validator'

type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'magenta'
const colors = ['red', 'green', 'blue', 'yellow', 'magenta']


@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @IsString()
  @Column('text', {nullable: true})
  name: string

  @Column('text')
  color: Colors

  @Column('json', {default: defaultBoard})
  board: string

  async setColor(givenColor: Colors) { 
    try {
      if(!givenColor) this.color = randomColor()
      else this.color = givenColor
      }
    catch(e){
      console.error('Something went wrong when setting the color', e)
    }
  }
}