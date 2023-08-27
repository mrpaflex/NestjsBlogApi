import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { blogDto } from 'src/dto/blog.dto';
import { blogEntity } from 'src/entity/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
    constructor(@InjectRepository(blogEntity) private blogRepository: Repository<blogEntity> ) {}

    // async creaeblog(anything): Promise<any>{
    //     const data  = await this.blogRepository.save(anything)///you can use return and ignore the below code...
    //     return {
    //        statusCode: 201,
    //         message: 'successfully created',
    //         datas:data
    //     }
    // }

    //use this one too

    async createblog(anything): Promise<{statusCode: number, message: string, datas: blogEntity}>{
        const data = await this.blogRepository.save(anything)
        return {
            statusCode: 201,
            message: 'successful',
            datas: data
        }
    }

    async getall():Promise<blogEntity []>{

        return await this.blogRepository.find()/////the find() is a built in keyword
    }
    
    async findyById(id){
        const find = await this.blogRepository.findOne({where: {id:id}});//same with the findOne() built in keyword

        if(!find){
            throw new HttpException(`this is not found`, 404);
        }else{
            return find;
        }
    }


    //update 
    async updatePostById(id: number, payload: blogDto){
        const findPost  = await this.blogRepository.findOneBy({id})
        if (!findPost) {
            throw new HttpException(`sorry tis can not found`, 404)
        }
        return this.blogRepository.update(id, payload);
    }

    //delete
    async deleteDbId(id: number){
        const findId = await this.blogRepository.findOne({where: {id:id}});
        if (!findId) {
            throw new HttpException('not found', 400);
        }

        //return await this.blogRepository.delete(id);
        const deletedId = await this.blogRepository.delete(id)
        return{
            statusCode: 200,
            message: "successfully deleted",
            //
            info: deletedId,
        }
    }
}
