import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RedditService{
    constructor(private _http: Http){}
    
    private reddit_url = ' https://www.reddit.com/.json';
    fetchFrontPage(){
        this._http.get(this.reddit_url)
         .map(res=>res.json())
         .subscribe(data => {
             console.log(data);
            });
    }
}