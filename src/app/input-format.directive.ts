import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el:ElementRef) { }


  @HostListener('focus') onFocus() {
    console.log('on focus');
  }

  @HostListener('blur') onblur() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = this.formatNumber(value);
  }

  formatNumber(number) {
    let formated: string;

    if(number.length < 10) {
      formated = 'Incorrect Number';
    }
    else {
      formated = '(';
      for(let i = 0; i < number.length; i++) {
        if(i == 2) {
          formated += number[i];
          formated += ')';
        }
        else if (i == 5) {
          formated += number[i];
          formated += '-';
        }
        else {
          formated += number[i];
        }
      }
    }
    return formated;
  }

}
