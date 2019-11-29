const core = require('@actions/core');
const github = require('@actions/github');

try {
  const imageTag = core.getInput('image-tag');
  console.log(`building image with tag -> ${imageTag}`);
  core.setOutput("message", `building image with tag -> ${imageTag}`);
} catch (error) {
  core.setFailed(error.message);
}