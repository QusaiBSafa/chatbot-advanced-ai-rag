import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { QdrantService } from '../qdrant/qdrant.service';
import { OpenAIService } from '../openai/openai.service';

@Injectable()
export class ChatService {
  constructor(
    private readonly redisService: RedisService,
    private readonly qdrantService: QdrantService,
    private readonly openAIService: OpenAIService,
  ) {}

  async handleChat(message: string) {
    const cachedResponse = await this.redisService.get(message);
    if (cachedResponse) {
      return JSON.parse(cachedResponse);
    }

    const embedding = await this.openAIService.getEmbedding(message);
    const results = await this.qdrantService.search(embedding);
    const answer = await this.openAIService.getResponse(results);

    await this.redisService.set(message, JSON.stringify(answer), 'EX', 43200);
    return answer;
  }
}