# adk

Atmosphere Development Kit: mixed multi-cloud infrastructure as code.

Currently supported providers:

- [x] AWS CloudFormation (same L1s as AWS CDK)
- [x] Azure Resource Manager (all supported Bicep types)
- [x] Google Cloud Deployment Manager (base types + gcp-types)
- [x] Alibaba Cloud Resource Orchestration Service
- [ ] HashiCorp Terraform (planned)
- [ ] Kubernetes (planned)

## alleged usage

```ts
import * as adk from '@zorse/adk';
import HighLevelComponent from 'some-npm-package';

// step 1: create a system
const system = new adk.System();

// step 2: add scenes of supported providers
system.scenes.add(new adk.AWSCloudFormationScene());
system.scenes.add(new adk.MicrosoftAzureResourceManagerScene());
system.scenes.add(new adk.GoogleCloudDeploymentManagerScene());
system.scenes.add(new adk.AlibabaCloudResourceOrchestrationServiceScene());
// system.scenes.add(new HashiCorpTerraformAWSScene());
// system.scenes.add(new HashiCorpTerraformAzureScene());
// system.scenes.add(new KubernetesScene());
// ...

// step 3: add entities
const entity = new adk.Entity(system);

// step 4: add components
new adk.AWSComponentType1(entity, { ...props1 });
new adk.AWSComponentType2(entity, { ...props2 });
new adk.AzureComponentType1(entity, { ...props1 });

// step 5: add nested entities (optional - for logical grouping)
const nested = new adk.Entity(entity);
new adk.GDMComponentType(nested, { ...props });
new adk.ROSComponentType1(nested, { ...props1 });
new adk.ROSComponentType2(nested, { ...props2 });

// step 6: add higher level components (optional - for abstractions)
new HighLevelComponent(nested);

// step 7: compose the system
const composition = await system.compose();

// step 8: print or save the composition result
console.log(composition.gizmos());
```

## generating components

```shell
npm install
npm run generate
```
