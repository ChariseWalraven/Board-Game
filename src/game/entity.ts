import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { defaultBoard, randomColor } from'../lib/color'
import { IsString} from 'class-validator'

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @IsString()
  @Column('text', {nullable: true})
  name: string

  @Column('text')
  color: string

  @Column('json', {default: defaultBoard})
  board: string

  async setColor(givenColor: string) { 
    try {
      if(!givenColor) this.color = randomColor()
      else this.color = givenColor
      }
    catch(e){
      console.error('Something went wrong when setting the color', e)
    }
  }
}