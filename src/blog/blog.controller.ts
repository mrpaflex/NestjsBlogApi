import { Body, Controller, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { blogDto } from 'src/dto/blog.dto';

@Controller('api')
export class BlogController {

    constructor(private blogService: BlogService){}

    @Post('create')
   async created(@Body() createblogDto: blogDto){
        return await this.blogService.creaeblog(createblogDto)
        //note the await helps the people to wait while the program is running 
    }
}
