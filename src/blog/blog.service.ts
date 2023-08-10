import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { blogEntity } from 'src/entity/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
    constructor(@InjectRepository(blogEntity) private blogRepository: Repository<blogEntity> ) {}

    async creaeblog(anything){
        const data  = await this.blogRepository.save(anything)///you can use return and ignore the below code...
        return {
            statusCode: 201,
            message: 'successfully created',
            datas:data
        }
    }
}
