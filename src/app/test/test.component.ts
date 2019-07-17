import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @ViewChild('result')
  public resultRef: TemplateRef<any>;  

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) { }
  
  index: any;
  words = [];
  timeLeft: number = 10;
  interval: any;

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
    'estivation', 'terpsichorean', 'clerisy', 'fuliginous', 'williwaw', 'caitiff', 'funambulist', 'hypnopompic', 'pule', 'sparge',
    'write off', 'elucidate', 'provision', 'phone', 'eliminate', 'delete', 'take', 'quote', 'accept', 'adjourn', 
    'admonish', 'adhere', 'strive', 'reclaim', 'swap', 'amend', 'alleviate', 'injured', 'blanket', 'equivalent'
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

    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        // this.openModal();
      }
    },1000)
  }

  // openModal() {
  //   this.modalService.open(this.resultRef, { centered: true });
  // }
}
