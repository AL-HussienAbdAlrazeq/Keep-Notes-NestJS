import { NestMiddleware } from '@nestjs/common';
export declare class CheakEmailExistMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
