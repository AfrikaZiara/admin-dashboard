import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { MultipleChanelService } from '../../../@core/data/multiple-chanel.service';
import { ModalComponent } from '../../ui-features/modals/modal/modal.component';


@Component({
  selector: 'multiple-chanel',
  templateUrl: './multiple-chanel.component.html',
  styleUrls: ['./multiple-chanel.component.scss']
})
export class MultipleChanelComponent{
  channels$;
  constructor( private multipleChanelService: MultipleChanelService, private modalService:NgbModal) { 
    this.channels$ = this.multipleChanelService.getAllChanels()
  }

  showLargeModal(){
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

}

