import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3001);

  console.log('\n############################################');
  console.log('\n  Mailer iniciado ✉️');
  console.log(`     Porta: ${process.env.PORT} 💻`);
  console.log('     Debug: ', process.env.DEBUG ? 'ativo ✅' : 'inativo 🚫');
  console.log('\n############################################');
}
bootstrap();
