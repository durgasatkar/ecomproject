import { Controller, Request, Post, UseGuards, Get, Body, UseInterceptors, Param, Res, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { User } from './users/users.entity';
import { diskStorage } from  'multer';
@Controller()
export class AppController {

  constructor(private authService: AuthService) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('auth/register')
  async register(@Body() user: User) {
    return this.authService.register(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('uploadFile')
  @UseInterceptors(FileInterceptor('image',
      {
        storage: diskStorage({
          destination: './images', 
          filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          return cb(null, `${randomName}${extname(file.originalname)}`)
        }
        })
      }
    )
    )
  async uploadedFile(@UploadedFile() file) {
      const response = {
        originalname: file.originalname,
        filename: file.filename,
      };
      return response;
  }

  @Get('images/:imgpath')
  getFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }

  
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
