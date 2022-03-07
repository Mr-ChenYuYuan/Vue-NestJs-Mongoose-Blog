import { Test, TestingModule } from '@nestjs/testing';
import { CommentPostsController } from './comment-posts.controller';

describe('CommentPostsController', () => {
  let controller: CommentPostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentPostsController],
    }).compile();

    controller = module.get<CommentPostsController>(CommentPostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
