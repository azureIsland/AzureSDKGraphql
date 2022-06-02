import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SdkVNetModule } from './sdk-vnet/sdk-vnet.module';
import { SdkSubnetModule } from './sdk-subnet/sdk-subnet.module';
import { SdkNetworkSecurityGroupModule } from './sdk-network-security-group/sdk-network-security-group.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    SdkVNetModule,
    SdkSubnetModule,
    SdkNetworkSecurityGroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
