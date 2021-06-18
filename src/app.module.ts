import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      database: 'nest_api_development',
      host: 'localhost',
      username: 'root',
      password: '',
      synchronize: true,
      entities: [__dirname + '/**/*.entity.{js,ts}'],
    }),
  ],
})
export class AppModule {}
