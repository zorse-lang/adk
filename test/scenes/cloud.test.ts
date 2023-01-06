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
		const expected = [
			{
				Components: [
					{
						Bucket1: {
							Type: "AWS::S3::Bucket",
							Properties: { LogicalId: "Bucket1" },
						},
					},
					{
						Bucket2: {
							Type: "AWS::S3::Bucket",
							Properties: { LogicalId: "Bucket2", BucketName: { "Fn::GetAtt": ["Bucket1", "Arn"] } },
						},
					},
				],
			},
		];
		expect(result).toEqual(expected);
	});

	it("should be able to compose basic ROS templates", async () => {
		const system = new ECS.System();
		new RosScene(system);
		const entity = new ECS.Entity(system);
		const bucket1 = new ROSBucket(entity, { LogicalId: "Bucket1", BucketName: "test-bucket1" });
		new ROSBucket(entity, { LogicalId: "Bucket2", BucketName: bucket1.DomainName });
		const composition = await system.compose();
		const result = composition.gizmos();
		const expected = [
			{
				Components: [
					{
						Bucket1: {
							Type: "ALIYUN::OSS::Bucket",
							Properties: { LogicalId: "Bucket1", BucketName: "test-bucket1" },
						},
					},
					{
						Bucket2: {
							Type: "ALIYUN::OSS::Bucket",
							Properties: { LogicalId: "Bucket2", BucketName: { "Fn::GetAtt": ["Bucket1", "DomainName"] } },
						},
					},
				],
			},
		];
		expect(result).toEqual(expected);
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
		const expected = [
			{
				Components: [
					{
						name: "Bucket1",
						type: "storage.v1.Buckets",
						properties: { name: "Bucket1", storageClass: "STANDARD", location: "US" },
					},
					{
						name: "Bucket2",
						type: "storage.v1.Buckets",
						properties: { kind: "$(ref.Bucket1.properties.kind)", name: "Bucket2" },
					},
				],
			},
		];
		expect(result).toEqual(expected);
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
		const expected = [
			{
				Components: [
					{
						name: "Bucket1",
						type: "Microsoft.Storage/storageAccounts",
						apiVersion: "2022-09-01",
						properties: { name: "Bucket1", location: "westus", sku: { name: "Standard_LRS" }, kind: "BlobStorage" },
					},
					{
						name: "Bucket2",
						type: "Microsoft.Storage/storageAccounts",
						apiVersion: "2022-09-01",
						properties: {
							name: "Bucket2",
							location: "westus",
							sku: { name: "Standard_LRS" },
							kind: "BlobStorage",
							tags: { "test-tag": "tag-[reference(resourceId('Microsoft.Storage/storageAccounts', 'Bucket1')).id]" },
						},
					},
				],
			},
		];
		expect(result).toEqual(expected);
	});
});
