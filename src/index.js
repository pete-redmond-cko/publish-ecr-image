const core = require('@actions/core');
const github = require('@actions/github');
const { execSync } = require('child_process');

function run(cmd, options = {}) {
    if (!options.hide) {
        console.log(`$ ${cmd}`);
    }
    return execSync(cmd, {
        shell: '/bin/bash',
        encoding: 'utf-8',
        env: {
            ...process.env,
        },
    });
}

try {
  const imageTag = core.getInput('image-tag');
  
  run(`docker build -t ${imageTag} .`)
  run(`docker image ls`);

} catch (error) {
  core.setFailed(error.message);
}