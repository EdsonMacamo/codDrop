/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [MongooseModule.forRoot('mongodb+srv://api:ruYHsDVMNPxDB5c8@cluster0.uriaw.mongodb.net/test'
  ),

  UsersModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
