import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  appList: any[] = [ {
    "id": "1",
    "url": './assets/images/1.jpg'
 },
 {

    "id": "2",
    "url": './assets/images/2.jpg'
 },
 {

  "id": "3",
  "url": './assets/images/3.jpg'
},

{
"id": "4",
"url": './assets/images/1.jpg'
},
{

"id": "5",
"url": './assets/images/2.jpg'
},
{

"id": "6",
"url": './assets/images/3.jpg'
} 
];
 
}
