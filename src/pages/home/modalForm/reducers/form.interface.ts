import {TableId} from 'domain/table.interface';

export interface ITableFormData {
    id?: TableId;
    name: string;
    participants: number;
}