import { Component } from '@angular/core';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
  searchQuery: any = '';
  items: string[];

  constructor() {
    this.initializeItems();

    /* nao tenho certeza, deve estar errado */

    this.searchQuery = [
      { autocomplete: 'on', autocorrect: 'on', placeholder:'Enter city'}
    ];

  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'São Paulo',
      'Salvador'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
