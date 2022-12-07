import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  linearModel: tf.Sequential;
  prediction: any;

  ngOnInit(): void {
    this.train();
  }

  async train() {

  }

  predict(val) {

  }
}
