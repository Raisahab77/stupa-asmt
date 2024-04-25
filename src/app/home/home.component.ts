import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  dogsData = [
    {
      "img":"../../../assets/images/Bichon_Frise.jpg",
      "dogName":"Charlie",
      "dogBreed":"Bichon Frise",
      "dogRating":"4.5"
    },
    {
      "img":"../../../assets/images/Boston_Terrier.jpg",
      "dogName":"Cooper",
      "dogBreed":"Boston Terrier",
      "dogRating":"4.1"
    },
    {
      "img":"../../../assets/images/Boxer.jpg",
      "dogName":"Max",
      "dogBreed":"Boxer",
      "dogRating":"3.6"
    },
    {
      "img":"../../../assets/images/Dachshund.jpg",
      "dogName":"Oliver",
      "dogBreed":"Dachshund",
      "dogRating":"3.9"
    },
    {
      "img":"../../../assets/images/French_Bulldog.jpg",
      "dogName":"Buddy",
      "dogBreed":"Bulldog",
      "dogRating":"3.7"
    },
    {
      "img":"../../../assets/images/Havanese.jpg",
      "dogName":"Lily",
      "dogBreed":"Havanese",
      "dogRating":"4.2"
    }
  ]

  ngOnInit(): void {
  }

}
