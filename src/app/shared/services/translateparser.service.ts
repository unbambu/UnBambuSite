import { Injectable } from '@angular/core';
import {TranslateDefaultParser} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateAppParser extends TranslateDefaultParser {

  override getValue(target: any, key: string): any {
    
    target = super.getValue(target, key);
    console.log( target)
    if (target instanceof Array) {
      target = target.join(' ');
    }
    console.log( target)
    return target;
  }
}