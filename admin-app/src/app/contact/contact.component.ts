import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Contact } from '../interfaces.def';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  list : Contact[] = [];

  searchText: string = '';

  recordsToShow : Contact[] = [];

  filter = new FormControl('');

  search(text: string) {
    const term = text.toLowerCase();
    this.recordsToShow = this.list.filter( (obj)=> {
      return obj.name.toLowerCase().includes(term)
      ||obj.id?.toString().toLocaleLowerCase().includes(term)
      || obj.query.toLowerCase().includes(term)
      || obj.contactNo.toLowerCase().includes(term)
      || obj.email.toLowerCase().includes(term)
    });
  }

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getContacts().subscribe((data)=>{
      this.list = data;
      this.recordsToShow = data;
    });
  }

}
