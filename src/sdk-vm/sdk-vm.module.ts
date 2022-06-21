import { Module } from '@nestjs/common';
import { SdkSecretModule } from 'src/sdk-secret/sdk-secret.module';
import { SdkVmResolver } from './sdk-vm.resolver';
import { SdkVmService } from './sdk-vm.service';

@Module({
  imports: [SdkSecretModule],
  providers: [SdkVmResolver, SdkVmService],
  exports: [SdkVmService],
})
export class SdkVmModule {}
