import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Output() cancelButtonClickStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() addedNote: EventEmitter<any> = new EventEmitter();
  @Input() popUpState: string = ''
  @Input() noteToShow: any;

  addNotesForm!: FormGroup;
  notesStatus = [{
    id: '0',
    status: 'In Progress'
  },
  {
    id: '1',
    status: 'To Do'
  },
  {
    id: '2',
    status: 'Completed'
  }
  ]
  dateToday = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  dateStart: any ;

  ngOnInit() {
    
      this.addNotesForm = new FormGroup({
        title: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required]),
        status: new FormControl(this.notesStatus[1].status, [Validators.required]),
        startDate: new FormControl(null, [Validators.required]),
        endDate: new FormControl(null, [Validators.required])
      })
    
  }

  onClickCancelButton() {
    this.cancelButtonClickStatus.emit(false)
  }

  onSubmit() {
    this.addedNote.emit(this.addNotesForm.value);
    this.cancelButtonClickStatus.emit(false);

  }
}
