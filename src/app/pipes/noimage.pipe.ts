import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( img: any[] ): string {
    
    // return ( !img || img.length < 1 ) ? 'assets/img/noimage.png' : img[0].url;
    if( !img ){
      return 'assets/img/noimage.png';
    }

    if( img.length > 0 ){
      return img[0].url;
    }else{
      return 'assets/img/noimage.png';
    }

  // return img[0].url;
   }

}
