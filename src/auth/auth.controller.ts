import { Body, Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { User } from '../users/user.entity';
import { AuthSignUpCmd } from './cmd/auth-sign-up.cmd';
import { AuthService } from './auth.service';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { LoginGuard } from './guards/login.guard';
import { Request as ERequest, Response } from 'express';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

  @Post('signup')
  public async signUp(@Body() user: AuthSignUpCmd): Promise<any> {
    return await this.authService.signUp(new User(user));
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Request() req: ERequest) {
    return req.user;
  }

  @Get('/logout')
  logout(@Request() req, @Res() res: Response) {
    req.logout();
    res.redirect('/');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/home')
  getHome(@Request() req) {
    return { home: 'hello home!' };
  }
}
