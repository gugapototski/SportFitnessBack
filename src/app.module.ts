import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TreinosModule } from './modules/treinos/treinos.module';
@Module({
  imports: [UserModule, TreinosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
