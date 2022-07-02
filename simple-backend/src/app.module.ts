import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { DepartmentController } from './department/department.controller';
import { FeesController } from './fees/fees.controller';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [FileUploadModule],
  controllers: [AppController, UserController, DepartmentController, FeesController],
  providers: [AppService],
})
export class AppModule {}
