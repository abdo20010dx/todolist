import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { serverConfig } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(serverConfig.port);
  console.log(`app listen on port http://localhost:${serverConfig.port}/graphql`);

}
bootstrap();
