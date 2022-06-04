import { Module } from '@nestjs/common';
import { SdkSecretService } from './sdk-secret.service';
import { SdkSecretResolver } from './sdk-secret.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [SdkSecretService, SdkSecretResolver, PrismaService],
  exports: [SdkSecretService],
})
export class SdkSecretModule {}
