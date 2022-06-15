import { Component, ElementRef, ViewChild } from '@angular/core';
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
  valeurDefaut = 3;
  value = 3;

  @ViewChild('sliderTest', { read: ElementRef })
  slider: ElementRef;

  constructor() {}

  ngAfterViewInit(){
    var trackWrapper = this.slider.nativeElement.querySelector('.mat-slider-track-wrapper');
    trackWrapper.insertAdjacentHTML('beforeend', `<div class="mat-slider-track-fill" ng-reflect-ng-style="[object Object]" style="transform: translateX(0px) scale3d(0.${this.valeurDefaut}, 1, 1);background-color: #ff4040;"></div>`);
  }

  onChange(event: MatSliderChange) {
    if (event.value < this.valeurDefaut) {
      event.source.value = this.valeurDefaut;
      this.value = this.valeurDefaut;
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
