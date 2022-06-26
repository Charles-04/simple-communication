import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { DepartmentController } from './department/department.controller';
import { FeesController } from './fees/fees.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, DepartmentController, FeesController],
  providers: [AppService],
})
export class AppModule {}
