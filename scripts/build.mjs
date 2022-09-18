#!/usr/bin/env zx

console.log(chalk.blue('开始构建...'));

await $`sudo docker build -t app:v1 .`;
await $`sudo docker run -itd -p 8000:80 --name pub-test app:v1"`;
