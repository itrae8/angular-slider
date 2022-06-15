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
  valeurDefaut = 2;
  value = 2;

  constructor() {}

  onChange(event: MatSliderChange) {
    if (event.value < 2) {
      event.source.value = 2;
      this.value = 2;
    }
    console.log(this.value);
  }

  formatValeur = (valeur: number) => {
    return valeur - this.valeurDefaut;
  };
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
