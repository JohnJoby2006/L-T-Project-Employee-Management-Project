import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightSalary]',
  standalone: true
})
export class HighlightSalaryDirective implements OnInit {

  @Input() appHighlightSalary!: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appHighlightSalary >= 50000) {
      this.el.nativeElement.style.backgroundColor = '#f5d7a1';
    }
  }
}