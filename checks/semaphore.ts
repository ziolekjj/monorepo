import { codechecks } from "@codechecks/client";

export default async function() {
  await codechecks.success({
    name: "Semaphore",
    shortDescription: "works!",
    longDescription: "```" + JSON.stringify(codechecks.context, null, 2) + "```\n",
  });
}