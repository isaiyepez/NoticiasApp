import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { Noticia } from '../models/noticia.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {
  noticias: Noticia[];

  constructor(private noticiasServicio: NoticiasService, private route: Router) { }

  ngOnInit() {
    this.noticiasServicio.verNoticias().subscribe((noticias)=>{
      this.noticias = noticias;
      //console.log(noticias)

    },(errorObtenido)=>{
      console.log(errorObtenido)
    })
  }
  
  gotoNewsDetail(noticia: Noticia)
  {
    alert(noticia)
    this.route.navigate(['news-detail', {noticia: JSON.stringify(noticia)}])
  }
}
