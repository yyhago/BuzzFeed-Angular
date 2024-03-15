import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import quizz_questions from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {

  title:string = ""

  questions:any
  questionSelected:any = {} // Correção do erro no console resolvido com as chaves, garantindo que nao seja undefined

  answers:string[] = []
  answersSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  constructor(){}
  ngOnInit(): void {
      if(quizz_questions){
        this.finished = false
        this.title = quizz_questions.title

        this.questions = quizz_questions.questions
        this.questionSelected = this.questions[this.questionIndex]

        this.questionIndex = 0
        this.questionMaxIndex = this.questions.length

      }
  }


  playerChoose(value:string){
    this.answers.push(value)
  }

  async nestStop(){
    this.questionIndex+=1

    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      this.finished = true
    }

  }

}
