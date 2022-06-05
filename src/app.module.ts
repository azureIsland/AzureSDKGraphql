import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SdkVNetModule } from './sdk-vnet/sdk-vnet.module';
import { SdkSubnetsModule } from './sdk-subnets/sdk-subnets.module';
import { SdkNetworkSecurityGroupModule } from './sdk-network-security-group/sdk-network-security-group.module';
import { SdkRouteTablesModule } from './sdk-route-tables/sdk-route-tables.module';
import { SdkSecretModule } from './sdk-secret/sdk-secret.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    SdkVNetModule,
    SdkSubnetsModule,
    SdkNetworkSecurityGroupModule,
    SdkRouteTablesModule,
    SdkSecretModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
