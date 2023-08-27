import { Body, Controller, Get, Post, Param, Put, Delete} from '@nestjs/common';
import { BlogService } from './blog.service';
import { blogDto } from 'src/dto/blog.dto';

@Controller()
export class BlogController {

    constructor(private blogService: BlogService){}

    //this is to send or create infos or datas to the 
    @Post('create')
   async created(@Body() createblogDto: blogDto){
        return await this.blogService.createblog(createblogDto)
        //note the await helps the people to wait while the program is running 
    }

    @Get('getall')
    async getallfieldInDb(){
        return await this.blogService.getall()
    }

    @Get(':id')
    async getById(@Param('id') id){
        return await this.blogService.findyById(id)
    }

    //update
    @Put(':id')
    updatePost(@Param('id') id: number, @Body() updatedto: blogDto){
        return this.blogService.updatePostById(id, updatedto);
    }

    //delete

    @Delete(':id')
    deletedDb(@Param('id') id: number) {
      return this.blogService.deleteDbId(id);
    }
}
