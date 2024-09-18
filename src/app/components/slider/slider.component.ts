import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @ViewChild('bannerVideo') bannerVideo!: ElementRef;
  isVideoPlaying: boolean = true;  // Flag para controlar se o vídeo está sendo exibido

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.bannerVideo.nativeElement;

    // Tenta carregar o vídeo
    video.load();

    // Tenta reproduzir o vídeo quando estiver pronto
    video.addEventListener('canplay', () => {
      video.play().catch(error => {
        this.isVideoPlaying = false;  // Se der erro, substitui o vídeo pela imagem
      });
    });

    // Caso o vídeo falhe ao carregar
    video.addEventListener('error', () => {
      this.isVideoPlaying = false;
    });
  }
}
