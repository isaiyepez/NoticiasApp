import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from '../models/noticia.models';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  noticia: Noticia

  constructor(private state: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.noticia)
    this.noticia = JSON.parse(this.state.snapshot.params.noticia)
    //console.log(this.noticia)
  }

}
