import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { Noticia } from '../models/noticia.models';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {
  noticias: Noticia[];

  constructor(private noticiasServicio: NoticiasService) { }

  ngOnInit() {
    this.noticiasServicio.verNoticias().subscribe((noticias)=>{
      this.noticias = noticias;
      console.log(noticias)

    },(errorObtenido)=>{
      console.log(errorObtenido)
    })
  }

}
