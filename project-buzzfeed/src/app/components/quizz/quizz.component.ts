import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NgIf],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {

  title:string = ""

  question:any
  questionSelected:any = {} // Correção do erro no console resolvido com as chaves, garantindo que nao seja undefined

  answers:string[] = []
  answersSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  constructor(){}
  ngOnInit(): void {
      
  }

}
