import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  targetImg: string = '';
  isCLicked: boolean = false;
  getTargetImg(e: any) {
    if (e.target.className.includes('layer')) {
      this.targetImg = e.target.nextSibling.getAttribute('src');
      console.log(this.targetImg);
    }
    if (e.target.className.includes('fa-soli')) {
      this.targetImg = e.target.offsetParent.nextSibling.getAttribute('src');
      console.log(this.targetImg);
    }
    this.isCLicked = true;
  }
  hideLayer(e: any) {
    if (e.target.className.includes('box')) {
      this.isCLicked = false;
    }
  }
}
