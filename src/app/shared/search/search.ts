import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ArtService } from '../../services/art.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IArt } from '../../models/art.model';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search implements OnInit {
  @Output() results = new EventEmitter<IArt[]>();
  searchResults: IArt[] = [];

  search = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.minLength(2)],
  });

  constructor(private searchService: ArtService, private router: Router) {}

  ngOnInit() {
    this.search.valueChanges
      .pipe(
        map((value) => value.trim()),
        tap((term) => {
          if (term.length === 0) {
            this.searchResults = [];
          }
        }),
        debounceTime(800),
        distinctUntilChanged(),
        filter((term) => term.length >= 2),
        switchMap((term) =>
          this.searchService.searchByName(term).pipe(
            catchError((err) => {
              console.error('Search error', err);
              return of<IArt[]>([]);
            })
          )
        )
      )
      .subscribe((arts) => {
        this.searchResults = arts;
      });
  }

  navigateToDetails(art: IArt) {
    this.router.navigate(['/details', art.id], {
      state: { art: art },
    });
    this.search.setValue('');
    this.searchResults = [];
  }
}
