import { BoardService } from './board';
import { ObjectLiteral } from '../../type';
import { Service } from '../lib/service';

export const services: ObjectLiteral<Service> = {
    board: BoardService,
};
