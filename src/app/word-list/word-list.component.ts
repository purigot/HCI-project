import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IndexColor } from '../model/index-color-model';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  @ViewChild('modal')
  public modalRef: TemplateRef<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router
  ) { }

  index: any;
  words = [];
  timeLeft: number = 60;
  interval: any;
  indexColorList: Array<IndexColor> = [];
  timeOut = false;

  setA = [
    'pace', 'panic', 'paragraph', 'bright', 'soul', 'constraint', 'ferry', 'stance', 'dairy', 'plank',
    'ledge', 'throttle', 'reproach', 'pittance', 'ajar', 'botch', 'inveigle', 'mawkish', 'raiment', 'legerdemain',
    'drab', 'dagger', 'streamline', 'napkin', 'resilient', 'topple', 'simmer', 'stead', 'natter', 'deflect',
    'flurry', 'whim', 'shaggy', 'shrill', 'trundle', 'rampant', 'judicious', 'whiff', 'tandem', 'scathing',
    'rind', 'strife', 'grouse', 'bawl', 'spool', 'ostrich', 'shrivel', 'easel', 'mayhem', 'rascal'
  ]
  setB = [
    'fledgling', 'signet', 'befit', 'lore', 'extol', 'strop', 'stirrup', 'midget', 'pastiche', 'eavesdrop',
    'welter', 'squall', 'abscond', 'shard', 'barnacle', 'chaste', 'bludgeon', 'cozy', 'conflate', 'sapling',
    'awry', 'burgeon', 'tawdry', 'minutiae', 'redolent', 'nib', 'rancid', 'dirge', 'midriff', 'chivvy',
    'udder', 'prig', 'sully', 'adumbrate', 'bugbear', 'manacle', 'prurient', 'lampoon', 'seamy', 'parsimonious',
    'purloin', 'visage', 'sobriquet', 'bloat', 'soothsayer', 'mammon', 'disjunctive', 'nostrum', 'lothario', 'mien'
  ]
  setC = [
    'trollop', 'puckish', 'duplicitous', 'noisome', 'leitmotiv', 'verdure', 'imbroglio', 'maladroit', 'impolitic', 'epigone',
    'potboiler', 'captious', 'bibulous', 'malapropism', 'tricorn', 'bruit', 'pabulum', 'valetudinarian', 'cenacle', 'cantle',
    'estivation', 'terpsichorean', 'clerisy', 'fuliginous', 'williwaw', 'caitiff', 'funambulist', 'accept', 'pule', 'sparge',
    'write off', 'elucidate', 'provision', 'phone', 'eliminate', 'delete', 'equivalent', 'quote', 'hypnopompic', 'adjourn',
    'admonish', 'adhere', 'strive', 'reclaim', 'swap', 'amend', 'alleviate', 'injured', 'blanket', 'take'
  ]

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.index = params['index'];
    })

    if (this.index == 1) {
      this.words = this.setA;
    } else if (this.index == 2) {
      this.words = this.setB;
    } else {
      this.words = this.setC;
    }

    this.onSetColor();
    localStorage.setItem("wordsList", JSON.stringify(this.words));
    localStorage.setItem("indexColorList", JSON.stringify(this.indexColorList));
    this.startTimer();
  }

  //set word color
  onSetColor() {
    for (let i = 0; i < this.words.length; i++) {
      let indexColor = new IndexColor();

      if (i == 0 || i == 5 || i == 18 || i == 8 || i == 13 || i == 25 || i == 29 || i == 46 || i == 44 || i == 48) {
        indexColor = { data: this.words[i], color: "#A0DDE0" } //blue
      } else if (i == 1 || i == 9 || i == 17 || i == 19 || i == 24 || i == 27 || i == 32 || i == 38 || i == 45 || i == 36) {
        indexColor = { data: this.words[i], color: "#DFDD6C" } //green
      } else if (i == 2 || i == 14 || i == 20 || i == 16 || i == 23 || i == 28 || i == 33 || i == 41 || i == 42 || i == 49) {
        indexColor = { data: this.words[i], color: "#FF97A5" } //pink
      } else if (i == 3 || i == 6 || i == 11 || i == 10 || i == 22 || i == 26 || i == 37 || i == 40 || i == 30 || i == 47) {
        indexColor = { data: this.words[i], color: "#FEB78D" } //orange
      } else if (i == 4 || i == 21 || i == 7 || i == 12 || i == 15 || i == 17 || i == 31 || i == 43 || i == 35 || i == 39 || i == 34) {
        indexColor = { data: this.words[i], color: "#FCD353" } //yellow
      }
      this.indexColorList.push(indexColor);
    }
    return this.indexColorList;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        // open modal
        this.modalService.open(this.modalRef, { centered: true, keyboard: false, backdrop: 'static' });
        this.timeOut = true;
      }
    }, 1000)
  }
}
