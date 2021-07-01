import apiClient from '../api/client'

class MarvelService  {

    client = apiClient;

    constructor(entity){
        this.entity = entity;
    }

    async getAll(page,limit){
        let offset = (page-1)*limit;
        return await this.client.get(this.entity,{ params:{limit,offset}});
    }

    
    async getById(entityId){
        return await this.client.get(`${this.entity}/${entityId}`);
    }

    async getComicsById(entityId){
        return await this.client.get(`${this.entity}/${entityId}/comics`);
    }

    async getEventsById(entityId){
        return await this.client.get(`${this.entity}/${entityId}/events`);
    }

    async getSeriesById(entityId){
        return await this.client.get(`${this.entity}/${entityId}/events`);
    }

    async getStoriesById(entityId){
        return await this.client.get(`${this.entity}/${entityId}/stories`);
    }
}


export default MarvelService;