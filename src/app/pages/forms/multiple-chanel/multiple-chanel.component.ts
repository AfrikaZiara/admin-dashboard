import { Component, OnInit } from '@angular/core';
import { MultipleChanelService } from '../../../@core/data/multiple-chanel.service';

@Component({
  selector: 'multiple-chanel',
  templateUrl: './multiple-chanel.component.html',
  styleUrls: ['./multiple-chanel.component.scss']
})
export class MultipleChanelComponent{
  channels$;
  constructor( private multipleChanelService: MultipleChanelService) { 
    this.channels$ = this.multipleChanelService.getAllChanels()
  }


}
