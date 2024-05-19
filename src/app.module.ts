import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TreinosModule } from './modules/treinos/treinos.module';
import { TreinoDiaModule } from './modules/treinodia/treinodia.module';
import { DietaModule } from './modules/dieta/dieta.module';
@Module({
  imports: [UserModule, TreinosModule, TreinoDiaModule, DietaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
