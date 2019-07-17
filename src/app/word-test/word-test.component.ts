import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IndexColor } from '../model/index-color-model';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';

@Component({
  selector: 'app-word-test',
  templateUrl: './word-test.component.html',
  styleUrls: ['./word-test.component.css']
})
export class WordTestComponent implements OnInit {

  @ViewChild('modal')
  public modalRef: TemplateRef<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router
  ) { }

  correctWords = [];
  randomWords = [];
  shuffleWords = [];
  selectWords = [];
  resultWords = [];

  correctWordsColor: Array<IndexColor> = [];
  userSelected = [];
  resultsUserSelected = [];
  userCorrect: Array<IndexColor> = [];

  allScore: number;
  yellowScore = 0;
  blueScore = 0;
  orangeScore = 0;
  pinkScore = 0;
  greenScore = 0;

  timeLeft: number = 30;
  interval: any;

  wrongWords = [
    'heavyhearted', 'drunken', 'badmouth', 'drone', 'plantation', 'jackknife', 'rotten', 'banquet', 'ballistics', 'elevator',
    'pretend', 'homeless', 'annihilate', 'perplexing', 'cellblock', 'coastal', 'poison', 'limitless', 'bleakness', 'apocalypse'
  ]

  ngOnInit() {

    this.correctWordsColor = JSON.parse(localStorage.getItem("indexColorList"));

    // random word for user select
    this.correctWords = JSON.parse(localStorage.getItem("wordsList"));
    //shuffle correct words
    this.correctWords.sort(() => Math.random() - 0.5);
    //select 30 correct words
    this.selectWords = this.correctWords.slice(0, 30);
    //sum words
    this.onSumWords();
    //shuffle all words
    this.resultWords = this.selectWords.sort(function () { return 0.5 - Math.random() });

    this.startTimer();
  }

  // correct + wrong
  onSumWords() {
    for (let i = 0; i < this.wrongWords.length; i++) {
      this.selectWords.push(this.wrongWords[i]);
    }
    return this.selectWords;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.onLoopWords()
      }
    }, 1000)
  }

  onCheckbox(word: string, event: boolean) {
    if (event) {
      this.userSelected.push(word);
    }
    if (!event) {
      let index = this.userSelected.indexOf(word);
      if (index > -1) {
        this.userSelected.splice(index, 1);
      }
    }
  }

  // loop from words user selected
  onLoopWords() {
    for (let i = 0; i < this.userSelected.length; i++) {
      let tempWord = this.userSelected[i]
      this.onCheckWords(tempWord)
    }
    this.onCheckScore()
  }

  // check words a user selected correctly
  onCheckWords(word: string) {
    let tempUserCorrect = this.correctWordsColor.filter(
      wordColor => wordColor.data === word);

    if (tempUserCorrect.length != 0) {
      this.userCorrect.push(tempUserCorrect[0])
    }
  }

  onCheckScore() {
    console.log(this.userCorrect)
    this.userCorrect.forEach((word) => {
      if (word.color == "#A0DDE0") {
        this.blueScore++;
      } else if (word.color == "#DFDD6C") {
        this.greenScore++;
      } else if (word.color == "#FF97A5") {
        this.pinkScore++;
      } else if (word.color == "#FEB78D") {
        this.orangeScore++;
      } else if (word.color == "#FCD353") {
        this.yellowScore++;
      }
    })
    // open modal
    this.modalService.open(this.modalRef, { centered: true, keyboard: false, backdrop: 'static'});
  }

  close() {
    this.router.navigate(['']);
  }
}
