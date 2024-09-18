import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  popUpState: string = '';
  noteToShow: any;
  notesArray: any = []
  // notesArray: any = [{
  //   "title": "My-to-do-1",
  //   "description": "1. Add manual\n2. Add kitchen\n3. Add spice",
  //   "status": "To Do",
  //   "startDate": "2024-09-19",
  //   "endDate": "2024-09-20"
  // },
  // {
  //   "title": "My-to-do-2",
  //   "description": "Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed.",
  //   "status": "To Do",
  //   "startDate": "2024-09-19",
  //   "endDate": "2024-09-20"
  // },
  // {
  //   "title": "My-to-do-3",
  //   "description": "Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.",
  //   "status": "To Do",
  //   "startDate": "2024-09-19",
  //   "endDate": "2024-09-20"
  // },
  // ];
  addNotesStatus: boolean = false;
  setWidthOfProgressBar: any = [0, 0, 0];
  cards: any = [
    {
      status: 'To Do',
      count: 0,
      class: 'bg-dark'
    },
    {
      status: 'In Progress',
      count: 0,
      class: 'bg-primary',
    },

    {
      status: 'Completed',
      count: 0,
      class: 'bg-success'
    }
  ]
  countInProgress = 0;
  countToDo = 0;
  countCompleted = 0;

  setWidth() {
    this.countInProgress = 0;
    this.countToDo = 0;
    this.countCompleted = 0;
    this.notesArray.forEach((item: any, index: number) => {
      console.log('index', index);

      if (item.status == 'In Progress') {
        this.countInProgress++;
      }
      else if (item.status == 'To Do') {
        this.countToDo++;
      }
      else {
        this.countCompleted++;
      }
    })
    this.cards[1].count = this.countInProgress
    this.cards[0].count = this.countToDo
    this.cards[2].count = this.countCompleted

  }

  openAddNotesPopup() {
    this.addNotesStatus = true;
    this.popUpState = 'showAddNote';

  }
  addNotes(note: any) {
    console.log('NOTE ADDED', note);
    this.notesArray.push(note);
    this.setWidth();

  }

  closePopup(event: any) {
    console.log('IN MAIN', event);
    this.addNotesStatus = event;
  }

  changeStatus(event: any, obj: any, i: number) {
    console.log(obj, i, event.target.value);
    let currentStatus = event.target.value
    this.notesArray[i].status = currentStatus
    this.setWidth();
  }

  moreInfo(note: any, i: number) {
    console.log('note', note);
    this.popUpState = 'showNote';

    if (!this.notesArray[i]['showNote']) {
      this.notesArray[i]['showNote'] = true;
    }
    else {
      this.notesArray[i]['showNote'] = false;
    }
    // return this.notesArray[i]['showNote']
    // this.noteToShow = note;
    // this.addNotesStatus = true;

  }

  ngOnInit() {
    this.setWidth();

  }
  ngAfterViewInit(): void {

  }

}
