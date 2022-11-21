import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TELEGRAM_MODULE_OPTIONS } from './telegram.constant';
import { TelegramService } from './telegram.service';

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: TELEGRAM_MODULE_OPTIONS,
      useFactory: async (configService: ConfigService) => ({
          botKey: configService.get('telegram.botKey'),
        }),
      inject: [ConfigService],
    },
    TelegramService,
  ],
  exports: [TelegramService],
})
export class TelegramModule {}
