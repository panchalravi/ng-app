import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    ngOnChanges(): void {
        // tslint:disable-next-line:whitespace
        this.starWidth = this.rating * 86/5;
    }

    onClick() {
        console.log('clicked!');
        this.ratingClicked.emit(`The rating ${this.rating} clicked`);
    }
}
