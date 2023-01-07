import * as ECS from "@zorse/adk/core/object";

import { ArmScene, AwsScene, GdmScene, RosScene } from "@zorse/adk/scenes";

import { storageAccounts as ARMBucket } from "@zorse/adk/clouds/arm/microsoft.storage/2022-09-01/storage";
import { Bucket as AWSBucket } from "@zorse/adk/clouds/cfn/aws.s3/2010-09-09";
import { Buckets as GDMBucket } from "@zorse/adk/clouds/gdm/gcloud.storage/v1/buckets";
import { Bucket as ROSBucket } from "@zorse/adk/clouds/ros/aliyun.oss/2015-09-01";

describe("Cloud Scene tests", () => {
	it("should be able to compose basic CFN templates", async () => {
		const system = new ECS.System();
		new AwsScene(system);
		const entity = new ECS.Entity(system);
		const bucket1 = new AWSBucket(entity, { LogicalId: "Bucket1" });
		new AWSBucket(entity, { LogicalId: "Bucket2", BucketName: bucket1.Arn });
		const composition = await system.compose();
		const result = composition.gizmos();
		expect(result).toMatchSnapshot();
	});

	it("should be able to compose basic ROS templates", async () => {
		const system = new ECS.System();
		new RosScene(system);
		const entity = new ECS.Entity(system);
		const bucket1 = new ROSBucket(entity, { LogicalId: "Bucket1", BucketName: "test-bucket1" });
		new ROSBucket(entity, { LogicalId: "Bucket2", BucketName: bucket1.DomainName });
		const composition = await system.compose();
		const result = composition.gizmos();
		expect(result).toMatchSnapshot();
	});

	it("should be able to compose basic GDM templates", async () => {
		const system = new ECS.System();
		new GdmScene(system);
		const entity = new ECS.Entity(system);
		const bucket1 = new GDMBucket(entity, {
			name: "Bucket1",
			storageClass: "STANDARD",
			location: "US",
		});
		new GDMBucket(entity, {
			name: "Bucket2",
			kind: bucket1.properties.kind,
		});
		const composition = await system.compose();
		const result = composition.gizmos();
		expect(result).toMatchSnapshot();
	});

	it("should be able to compose basic ARM templates", async () => {
		const system = new ECS.System();
		new ArmScene(system);
		const entity = new ECS.Entity(system);
		const bucket1 = new ARMBucket(entity, {
			name: "Bucket1",
			location: "westus",
			sku: { name: "Standard_LRS" },
			kind: "BlobStorage",
		});
		new ARMBucket(entity, {
			name: "Bucket2",
			location: "westus",
			sku: { name: "Standard_LRS" },
			kind: "BlobStorage",
			tags: { "test-tag": `tag-${bucket1.id}` },
		});
		const composition = await system.compose();
		const result = composition.gizmos();
		expect(result).toMatchSnapshot();
	});
});
