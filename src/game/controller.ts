import { JsonController, Get, Post, Put, Param, Body, HttpCode, NotFoundError, MethodNotAllowedError } from 'routing-controllers'
import Game from './entity'
import { isValidColor } from '../lib/color';

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
    const valid = await isValidColor(color)
    if(valid) {
      await entity.setColor(color)
      const game = await entity.save()
      return {game}
    }
    else throw new MethodNotAllowedError('Invalid Color')
  }
}