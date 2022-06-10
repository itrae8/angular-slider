import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider/typings/slider';

/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-overview-example',
  templateUrl: 'slider-overview-example.html',
  styleUrls: ['slider-overview-example.css'],
})
export class SliderOverviewExample {
  value = 2;

  constructor() {}

  onChange(event: MatSliderChange) {
    console.log(event.value);
    if (event.value < 2) {
      event.source.value = 2;
    }
  }
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
