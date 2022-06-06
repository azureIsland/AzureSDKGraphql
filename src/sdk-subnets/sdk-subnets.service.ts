import { NetworkManagementClient, Subnet } from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { SdkSecretService } from 'src/sdk-secret/sdk-secret.service';
import { GetVNetRelationSubnetsAllArgs } from './dto/args/get-subnetsAll.args';
import { GetSubnetFindOneArgs } from './dto/args/get-subnetsFindOne.args';
import { CreateSubnetsInput } from './dto/input/create-subnets.input';

@Injectable()
export class SdkSubnetsService {
  constructor(private readonly sdkSecretService: SdkSecretService) {}

  // VNetに紐付いたサブネット全取得
  async getVNetRelationSubNetAll(args: GetVNetRelationSubnetsAllArgs) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const subnetsList = networkClient.subnets.list(
      secret.resourceGroup,
      args.virtualNetworkName,
    );
    const subnets: Subnet[] = [];
    for await (const item of subnetsList) {
      subnets.push(item);
    }
    return subnets;
  }

  // サブネット単体取得
  async getSubNetFindOne(args: GetSubnetFindOneArgs) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const subnet = await networkClient.subnets.get(
      secret.resourceGroup,
      args.virtualNetworkName,
      args.subnetName,
    );
    console.log(subnet);
    return subnet;
  }

  // サブネットの作成
  async createSubnet(args: CreateSubnetsInput) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const subNet = await networkClient.subnets.beginCreateOrUpdateAndWait(
      secret.resourceGroup,
      args.virtualNetworkName,
      args.subnetName,
      {
        addressPrefix: args.addressPrefix,
      },
    );
    return subNet;
  }
}
