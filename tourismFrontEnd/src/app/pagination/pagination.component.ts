import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

// @ts-ignore
import * as paginate from 'jw-paginate';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input()  items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 1;
  @Input() maxPages = 10;


  pager: any = {};


  constructor() { }

  ngOnInit(): void {
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }
  public setPage(page: number) {
    this.pager = paginate(this.items?.length, page, this.pageSize, this.maxPages);
    let pageOfItems = this.items?.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.changePage.emit(pageOfItems);
  }


}
