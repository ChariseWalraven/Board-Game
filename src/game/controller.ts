import { JsonController, Get, Post, Put, Param, Body, HttpCode, NotFoundError, BadRequestError } from 'routing-controllers'
import Game from './entity'
import { randomColor, defaultBoard } from '../lib/color';

const colors = ['red', 'green', 'blue', 'yellow', 'magenta']

const isValidColor = (color) => {
  return colors.includes(color)
}

@JsonController()
export default class GameController {

  @Get('/games')
    async allGames(){
    const games = await Game.find()
    return { games }
  }

  
  @Put('/games/:id')
  async updateGame(
    @Param('id') id: number,
    @Body() update: Partial<Game>
  ) {
    const game = await Game.findOne(id)
    if(!game) throw new NotFoundError('Cannot find game!')
    else return Game.merge(game, update).save()
  }
  
  @Post('/games')
  @HttpCode(201)
  async createGame(
  @Body() data: Game
  ) {
    const {color, ...rest} = data
    const entity = Game.create(rest)
    await entity.setColor(color)
    const game = await entity.save()
    return {game}
  }
}