import { Test, TestingModule } from '@nestjs/testing';
import { NiveisController } from './niveis.controller';

describe('NiveisController', () => {
  let controller: NiveisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NiveisController],
    }).compile();

    controller = module.get<NiveisController>(NiveisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
