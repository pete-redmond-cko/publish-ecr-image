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
  const docker = {
      tag: core.getInput('tag'),
      username: core.getInput('docker-username'),
      password: core.getInput('docker-password'),
  }
  
  run(`docker build -t ${docker.username}/${docker.tag} .`)
  run(`docker login -u ${docker.username} -p ${docker.password}`)
  run(`docker push ${docker.username}/${docker.tag}`);

} catch (error) {
  core.setFailed(error.message);
}