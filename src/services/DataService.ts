import { Space } from '../models/Model';
export class DataService {

    public async getSpaces(): Promise<Space[]> {
        const result: Space[] = []
        result.push({
            location: 'Paris',
            name: 'Best Location',
            id: '123'
        });
        result.push({
            location: 'Paris',
            name: 'Best Location',
            id: '124'
        });
        result.push({
            location: 'Paris',
            name: 'Best Location',
            id: '125'
        });
        return result;
    }
}