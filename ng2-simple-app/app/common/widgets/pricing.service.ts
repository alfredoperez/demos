import {Injectable} from 'angular2/core';

@Injectable()
export class PricingService {
    public half(price){
        return price * 0.5;
    }
}