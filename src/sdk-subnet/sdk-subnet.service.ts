import { NetworkManagementClient } from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { SdkSecretService } from 'src/sdk-secret/sdk-secret.service';
import { CreateSubnetInput } from './dto/input/create-subnet.input';

@Injectable()
export class SdkSubnetService {
  constructor(private readonly sdkSecretService: SdkSecretService) {}

  async createSubnet(createSubNetInput: CreateSubnetInput) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: createSubNetInput.id } },
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
      createSubNetInput.virtualNetworkName,
      createSubNetInput.subnetName,
      {
        addressPrefix: createSubNetInput.addressPrefix,
      },
    );
    console.log(subNet);
  }
}
