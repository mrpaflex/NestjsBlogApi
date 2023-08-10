import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { blogEntity } from './entity/blog.entity';


@Module({
  imports: [BlogModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'blog_api',
      entities: [blogEntity],
      synchronize: true,
    }),
],
  controllers: [],
  providers: []
})
export class AppModule {}
