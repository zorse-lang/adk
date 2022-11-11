import * as rosSpec from "@alicloud/ros-cdk-spec";

import { generate } from "./cfn";

async function main() {
	for (const ns of rosSpec.namespaces()) {
		// version is from:
		// "ROSTemplateFormatVersion":
		// https://www.alibabacloud.com/help/en/resource-orchestration-service/latest/api-operation-examples-template-operations
		const out = `.gen/ros/${ns.replace(/::/g, ".").toLowerCase()}/2015-09-01`;
		await generate(rosSpec, ns, out, "RosBaseResource");
	}
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
