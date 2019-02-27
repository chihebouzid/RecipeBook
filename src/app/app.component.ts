import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "recipe-project";
  loadedFeature = "recipe";

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBjY7uJWk49B-HtWftz6uroi_s0l0DG2h4",
      authDomain: "recipe-book-ece7f.firebaseapp.com"
    })
  }
}
