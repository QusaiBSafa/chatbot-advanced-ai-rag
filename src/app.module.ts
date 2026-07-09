import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { DocumentModule } from './document/document.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ChatModule,
    DocumentModule,
  ],
})
export class AppModule {}