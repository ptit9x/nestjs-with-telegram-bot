import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { TelegramMessage, TelegramSendMessageParams, TelegramUser, Update } from './modules/telegram/interfaces';
import { TelegramService } from './modules/telegram/telegram.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly telegram: TelegramService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-bot')
  testBot(): Observable<TelegramUser> {
    return this.telegram.getMe();
  }

  @Get('get-updates')
  getUpdates(): Observable<any> {
    const data = {
      offset: 1,
      limit: 10,
    }
    return this.telegram.getUpdates(data);
  }

  @Get('test-send-message')
  sendMessage(): Observable<TelegramMessage> {
    const data: TelegramSendMessageParams = {
      chat_id: -420236001, // id call from api get-updates
      text: `*Hello* [@HuynhDN](tg://user?id=548554168) is reading [cafef](https://cafef.vn/)`,
      parse_mode: 'markdown'
    }
    return this.telegram.sendMessage(data);
  }
}
