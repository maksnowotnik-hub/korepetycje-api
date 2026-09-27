import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('register')
  @ApiOperation({
    summary: 'Tworzy nowego użytkownika',
    description: 'Rejestruje konto nauczyciela w bazie danych.'
  })
  @ApiResponse({ status: 201, description: 'Użytkownik został pomyślnie utworzony.' })
  @ApiResponse({ status: 400, description: 'Błędne dane wejściowe (np. za krótkie hasło).' })
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(
      createUserDto.email,
      createUserDto.password,
    );
  }
}
