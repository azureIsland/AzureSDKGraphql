# AzureSDKGraphQL

## 開発を始める前に

以下の vscode の拡張機能をインストールしてください。

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 必要パッケージのインストール 
```console
yarn
```

初回は時間かかります。

### DBの準備（SQLite3）
```console
yarn prisma migrate dev
```

#### DB内の確認
```console
yarn prisma studio
```

## 操作可能なAzureリソース
詳細はGraphGL内のDOCSを確認してください
### 取得(Query)
- VNetの全体取得`findAllVNets`・単体取得`findOneVNets`
- VNetに紐づくサブネットの取得`findVNetRelationSubnetAll`・単体取得`findOneSubnet`
- ルートテーブルの全体取得`findAllRouteTables`・単体取得`findOneRouteTables`
- NetworkSecurityGroupの全体取得`findAllNSG`・単体取得`findOneNSG`

### 作成・更新(Mutation)
- VNetの作成・更新`createVNet`
- サブネットの作成・更新`createSubnet`
- ルートテーブルの作成・更新`createRouteTables`
- NetworkSecurityGroupの作成・更新`createNSG`

## 開発サーバの立て方・使い方

9000 と 5555 番ポートを使います。空けといてください。

### GraphQLプレイグラウンド
```
# ブラウザで確認
http://localhost:9000/graphql
```

### SecretテーブルにAzureリソースを操作するためのキーの登録
詳細はGraphQL内のDOCSを確認してください。

#### 登録
**Azureリソースを操作するためにこの操作が必要になります。**  
登録後取得できるIDを使う必要があります。  
キーについては各チームのインフラ担当・リーダーに聞いてください。

```graphql
mutation {
  createSecret(data:{
    clientId:"xxxxxxxx",
    tenantId:"xxxxxxxx",
    clientSecret: "xxxxxxxx",
    subscriptionId: "xxxxxxxx",
    resourceGroup: "xxxxxxxx",
    location: "xxxxxxxx"
  }) {
    id
    clientId
    tenantId
    clientSecret
    subscriptionId
    resourceGroup
    location
  }
}
```

#### 取得
```graphql
query {
  findOneSecret(where:{
    id: {
      equals:1
    }
  }) {
    id
    clientId
    tenantId
    clientSecret
    subscriptionId
    location
    resourceGroup
  }
}
```

## 開発環境
- 言語：TypeScript
- フレームワーク：NestJS
- ORM：Prisma
- API：GraphQL
