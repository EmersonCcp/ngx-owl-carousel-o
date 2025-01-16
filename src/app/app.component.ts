import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-owl-carousel-o';

  items = [
    {
      image:
        'https://cellshop.com.py/media/catalog/product/2/4/2469201_1_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=616&width=616&canvas=616:616',
      title: 'Zapatillas Running Ultra',
      description:
        'Mejora tu rendimiento con las Zapatillas Running Ultra. Su suela especial proporciona un excelente agarre y estabilidad, ideal para los corredores más exigentes.',
    },
    {
      image:
        'https://www.uliko.com.py//storage/App/Models/ProductImage/000/007/377/image/medium/BF0D7222-0C53-4034-88FB-0CF6319B4BF8.jpeg',
      title: 'Zapatillas CrossFit Pro',
      description:
        'Con las Zapatillas CrossFit Pro, estarás listo para cualquier entrenamiento. Ofrecen soporte adicional para movimientos de alta intensidad y una comodidad incomparable.',
    },
    {
      image: 'https://www.sallustro.com.py/storage/sku/a59967-1jpg.jpg.webp',
      title: 'Zapatillas Trail Runner XT',
      description:
        'Prepárate para enfrentar cualquier terreno con las Zapatillas Trail Runner XT. Su suela antideslizante y protección superior te permitirán correr sin límites.',
    },
    {
      image:
        'https://www.shoppingchina.com.py/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeHBPRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6946941d93b9c334949e01f3a70197e516e5e982/950589.jpg',
      title: 'Zapatillas Running Speed',
      description:
        'Corre más rápido y cómodo con las Zapatillas Running Speed. Con una suela antideslizante y tecnología de amortiguación, son ideales para corredores de todos los niveles.',
    },
    {
      image:
        'https://vendome.com.py/wp-content/uploads/2023/06/MK2004ML_BLACK_3-600x600.webp',
      title: 'Zapatillas Fútbol Turbo',
      description:
        'Domina el partido con las Zapatillas Fútbol Turbo. Su diseño ergonómico y suela de tracción mejorada te darán el control total sobre el campo de juego.',
    },
    {
      image:
        'https://cellshop.com.py/media/catalog/product/3/4/3417386_1_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=616&width=616&canvas=616:616',
      title: 'Zapatillas Deporte VividPro',
      description:
        'Las Zapatillas Deporte VividPro te ofrecen la combinación perfecta entre estilo y funcionalidad. Disfruta de una gran comodidad en todas tus actividades deportivas.',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcYbAfEfHeAJ3vuMrHB4UysjRORqVrlCMLw&s',
      title: 'Zapatillas Viaje Explorer',
      description:
        'Diseñadas para quienes disfrutan de la aventura. Las Zapatillas Viaje Explorer son resistentes, cómodas y perfectas para explorar nuevos destinos sin preocuparte por el terreno.',
    },
    {
      image:
        'https://metasports.com.py/media/catalog/product/cache/9286ff1d9737d1c21559f7da6b69729b/penalty/footwear/1242469500-2.jpg',
      title: 'Zapatillas Outdoor Trek',
      description:
        'Conquista cualquier terreno con las Zapatillas Outdoor Trek. Su suela antideslizante y material resistente aseguran un gran rendimiento en cualquier tipo de clima.',
    },
    {
      image:
        'https://www.chacomer.com.py/media/catalog/product/a/p/api-v1.1-file-public_files-pim-assets-24-5d-7c-5f-5f7c5d247cff234cfdd64799-images-60-7b-be-64-64be7b600635ebcbfc5ae242-SC7197012V45_CALZADO_SCOTT_KINABALU_M_VERDE_45_1b.jpg?quality=95&bg-color=255,255,255&fit=bounds&height=1000&width=1000&canvas=1000:1000',
      title: 'Botas Montaña Scott Kinabalu',
      description:
        'Con las Botas Montaña Scott Kinabalu,  Su tecnología avanzada y diseño especializado ofrecen máxima protección y comodidad en terrenos difíciles.',
    },
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 10,
    nav: true,
    navText: ['Atras', 'Siguiente'],
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  };
}
