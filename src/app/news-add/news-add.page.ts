import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/autor.models';
import { NoticiasService } from '../services/noticias.service';
import { Noticia } from '../models/noticia.models';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.page.html',
  styleUrls: ['./news-add.page.scss'],
})
export class NewsAddPage implements OnInit {

  autores: Autor[] = new Array<Autor>();
  noticia: Noticia = new Noticia();
  constructor(private noticiaServicio: NoticiasService, public toastController: ToastController, public loadingController: LoadingController) {}

  ngOnInit() {
    this.noticiaServicio.verAutores().subscribe((listadoAutores)=>{
      this.autores = listadoAutores
    })
  }

  async guardar()
  {
    const loading = await this.loadingController.create({
      message: 'Saving...',
    });
    await loading.present();
    
    this.noticiaServicio.agregarNoticia(this.noticia).subscribe(()=>{
      loading.dismiss();
      this.mostrarMensaje("New Saved");
    },
    error=>{
      console.log("IYG: Error" + error);
      this.mostrarMensaje(error);
      loading.dismiss();
    });
  }

  async mostrarMensaje(mensaje: string)
  {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
